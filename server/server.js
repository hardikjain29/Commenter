import Express from 'express';
import compression from 'compression';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';
import Comment from './models/comment';
// Webpack Requirements
import webpack from 'webpack';
import config from '../webpack.config.dev';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

// Initialize the Express App
const app = new Express();

// Run Webpack dev server in development mode
if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}

// React And Redux Setup
import { configureStore } from '../client/store';
import { Provider } from 'react-redux';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import Helmet from 'react-helmet';

// Import required modules
import routes from '../client/routes';
import { fetchComponentData } from './util/fetchData';
import serverConfig from './config';

// Set native promises as mongoose promise
mongoose.Promise = global.Promise;

// MongoDB Connection
mongoose.connect(serverConfig.mongoURL, (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
    throw error;
  }

});

// Apply body Parser and server public assets and routes
app.use(compression());
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
app.use(Express.static(path.resolve(__dirname, '../dist')));

// Render Initial HTML
const renderFullPage = (html, initialState) => {
  const head = Helmet.rewind();

  // Import Manifests
  const assetsManifest = process.env.webpackAssets && JSON.parse(process.env.webpackAssets);
  const chunkManifest = process.env.webpackChunkAssets && JSON.parse(process.env.webpackChunkAssets);

  return `
    <!doctype html>
    <html>
      <head>
        ${head.base.toString()}
        ${head.title.toString()}
        ${head.meta.toString()}
        ${head.link.toString()}
        ${head.script.toString()}

        
        ${process.env.NODE_ENV === 'production' ? `<link rel='stylesheet' href='${assetsManifest['/app.css']}' />` : ''}
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href='https://fonts.googleapis.com/css?family=Lato:400,300,700' rel='stylesheet' type='text/css'/>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css">
        <script   src="https://code.jquery.com/jquery-3.1.1.min.js"   integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="   crossorigin="anonymous"></script>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          
          ${process.env.NODE_ENV === 'production' ?
          `//<![CDATA[
          window.webpackManifest = ${JSON.stringify(chunkManifest)};
          //]]>` : ''}
        </script>
        <script src='${process.env.NODE_ENV === 'production' ? assetsManifest['/vendor.js'] : '/vendor.js'}'></script>
        <script src='${process.env.NODE_ENV === 'production' ? assetsManifest['/app.js'] : '/app.js'}'></script>
      </body>
    </html>
  `;
};

const renderError = err => {
  const softTab = '&#32;&#32;&#32;&#32;';
  const errTrace = process.env.NODE_ENV !== 'production' ?
    `:<br><br><pre style="color:red">${softTab}${err.stack.replace(/\n/g, `<br>${softTab}`)}</pre>` : '';
  return renderFullPage(`Server Error${errTrace}`, {});
};

app.get('/comments',function (req,res) {
  Comment.find().sort('-dateAdded').exec((err, comments) => {
    if (err) {
      res.status(500).send(err);
    }
    console.log("Entered server" + comments);
    res.json({ comments });
  });
});

app.post('/comments',function (req,res) {
  const comment = req.body.comment;
  const newComment = new Comment();
  newComment.comment = comment;
  newComment.likes = 0;
  newComment.dislikes = 0;

  newComment.save(function(err, comment) {
      if (err) {
        return console.error(err);
      }
      console.log("Created");
      res.sendStatus(200);
    });
});

app.post('/likes',function (req,res) {
  const id = req.body.id;
  Comment.findByIdAndUpdate(id, {$inc: {likes:1}}, function (err, data) {
    if(data){
      console.log("Updated likes");
      res.sendStatus(200);
    }else{
      res.sendStatus(500);
    }
  });

});

app.post('/dislikes',function (req,res) {
  const idd = req.body.id;
  Comment.findByIdAndUpdate(idd, {$inc: {dislikes:1}}, function (err, data) {
    if(data){
      console.log("Updated dis");
      res.sendStatus(200);
    }else{
      res.sendStatus(500);
    }
  });

});

// Server Side Rendering based on routes matched by React-router.
app.use((req, res, next) => {
  match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
    if (err) {
      return res.status(500).end(renderError(err));
    }

    if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    }

    if (!renderProps) {
      return next();
    }

    const store = configureStore();

    return fetchComponentData(store, renderProps.components, renderProps.params)
      .then(() => {
        const initialView = renderToString(
          <Provider store={store}>
              <RouterContext {...renderProps} />
          </Provider>
        );
        const finalState = store.getState();

        res
          .set('Content-Type', 'text/html')
          .status(200)
          .end(renderFullPage(initialView, finalState));
      })
      .catch((error) => next(error));
  });
});

// start app
app.listen(serverConfig.port, (error) => {
  if (!error) {
    console.log(`Commenter is running on port: ${serverConfig.port}!`); // eslint-disable-line
  }
});

export default app;
