/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("mongoose");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("webpack");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /* eslint-disable global-require */


	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(1);

	var _App = __webpack_require__(21);

	var _App2 = _interopRequireDefault(_App);

	var _Comments = __webpack_require__(24);

	var _Comments2 = _interopRequireDefault(_Comments);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// require.ensure polyfill for node
	if (false) {
	  require.ensure = function requireModule(deps, callback) {
	    callback(require);
	  };
	}

	exports.default = _jsx(_reactRouter.Route, {
	  path: '/',
	  component: _App2.default
	}, void 0, _jsx(_reactRouter.IndexRoute, {
	  component: _Comments2.default
	}));

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.configureStore = configureStore;

	var _redux = __webpack_require__(2);

	var _reduxThunk = __webpack_require__(33);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _reducers = __webpack_require__(26);

	var _reducers2 = _interopRequireDefault(_reducers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function configureStore() {
	  // Middleware and store enhancers
	  var enhancers = [(0, _redux.applyMiddleware)(_reduxThunk2.default)];

	  var initialState = {
	    comments: { comments: { comments: [] } }
	  };
	  // if (process.env.CLIENT && process.env.NODE_ENV === 'development') {
	  //   // Enable DevTools only when rendering on client and during development.
	  //   enhancers.push(window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument());
	  // }

	  var store = (0, _redux.createStore)(_reducers2.default, initialState, _redux.compose.apply(undefined, enhancers));

	  // For hot reloading reducers
	  if (false) {
	    // Enable Webpack hot module replacement for reducers
	    module.hot.accept('./reducers', function () {
	      var nextReducer = require('./reducers').default; // eslint-disable-line global-require
	      store.replaceReducer(nextReducer);
	    });
	  }

	  return store;
	} /**
	   * Main store function
	   */

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var config = {
	  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/commenter',
	  port: process.env.PORT || 8000
	};

	exports.default = config;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mongoose = __webpack_require__(3);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Schema = _mongoose2.default.Schema;

	var commentSchema = new Schema({
	  comment: { type: 'String' },
	  likes: { type: 'Number' },
	  dislikes: { type: 'Number' }
	});

	exports.default = _mongoose2.default.model('Comment', commentSchema);

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fetchComponentData = fetchComponentData;

	var _promiseUtils = __webpack_require__(29);

	function fetchComponentData(store, components, params) {
	  var needs = components.reduce(function (prev, current) {
	    return (current.need || []).concat((current.WrappedComponent && current.WrappedComponent.need !== current.need ? current.WrappedComponent.need : []) || []).concat(prev);
	  }, []);

	  return (0, _promiseUtils.sequence)(needs, function (need) {
	    return store.dispatch(need(params, store.getState()));
	  });
	} /*
	  Utility function to fetch required data for component to render in server side.
	  This was inspired from https://github.com/caljrimmer/isomorphic-redux-app/blob/73e6e7d43ccd41e2eb557a70be79cebc494ee54b/src/common/api/fetchComponentDataBeforeRender.js
	  */

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var webpack = __webpack_require__(5);
	var cssnext = __webpack_require__(30);
	var postcssFocus = __webpack_require__(31);
	var postcssReporter = __webpack_require__(32);

	module.exports = {
	  devtool: 'cheap-module-eval-source-map',

	  entry: {
	    app: ['eventsource-polyfill', 'webpack-hot-middleware/client', 'webpack/hot/only-dev-server', 'react-hot-loader/patch', './client/index.js'],
	    vendor: ['react', 'react-dom']
	  },

	  output: {
	    path: __dirname,
	    filename: 'app.js',
	    publicPath: 'http://0.0.0.0:8000/'
	  },

	  resolve: {
	    extensions: ['', '.js', '.jsx'],
	    modules: ['client', 'node_modules']
	  },

	  module: {
	    loaders: [{
	      test: /\.css$/,
	      exclude: /node_modules/,
	      loader: 'style-loader!css-loader?localIdentName=[name]__[local]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader'
	    }, {
	      test: /\.css$/,
	      include: /node_modules/,
	      loaders: ['style-loader', 'css-loader']
	    }, {
	      test: /\.jsx*$/,
	      exclude: [/node_modules/, /.+\.config.js/],
	      loader: 'babel'
	    }, {
	      test: /\.(jpe?g|gif|png|svg)$/i,
	      loader: 'url-loader?limit=10000'
	    }, {
	      test: /\.json$/,
	      loader: 'json-loader'
	    }]
	  },

	  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.optimize.CommonsChunkPlugin({
	    name: 'vendor',
	    minChunks: Infinity,
	    filename: 'vendor.js'
	  }), new webpack.DefinePlugin({
	    'process.env': {
	      CLIENT: JSON.stringify(true),
	      'NODE_ENV': JSON.stringify('development')
	    }
	  })],

	  postcss: function postcss() {
	    return [postcssFocus(), cssnext({
	      browsers: ['last 2 versions', 'IE > 10']
	    }), postcssReporter({
	      clearMessages: true
	    })];
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = require("react-helmet");

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = require("webpack-dev-middleware");

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = require("webpack-hot-middleware");

/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.addComment = addComment;
	exports.receiveComments = receiveComments;
	exports.dbComment = dbComment;
	exports.uiLikes = uiLikes;
	exports.uiDislikes = uiDislikes;
	exports.incrementLikes = incrementLikes;
	exports.decrementLikes = decrementLikes;
	exports.fetchComments = fetchComments;
	function addComment(comment) {
	    return {
	        type: 'ADD_COMMENT',
	        comment: comment
	    };
	}

	function receiveComments(data) {
	    console.log("Recieved" + data);
	    return {
	        type: 'RECEIVE_COMMENTS',
	        data: data
	    };
	}

	function dbComment(comment) {
	    return function (dispatch, getState) {
	        addComments(comment).then(dispatch(fetchComments()));
	    };
	}

	function uiLikes(id) {
	    return {
	        type: 'INCREMENT_LIKES',
	        id: id
	    };
	}

	function uiDislikes(id) {
	    return {
	        type: 'DECREMENT_LIKES',
	        id: id
	    };
	}

	function incrementLikes(id) {
	    return function (dispatch, getState) {
	        dbLikes(id);
	        dispatch(uiLikes(id));
	    };
	}

	function decrementLikes(id) {
	    return function (dispatch, getState) {
	        dbDislikes(id);
	        dispatch(uiDislikes(id));
	    };
	}

	function fetchComments() {
	    return function (dispatch, getState) {
	        loadComments().then(function (data) {
	            return dispatch(receiveComments(data));
	        });
	    };
	}

	function dbLikes(id) {
	    return new Promise(function (resolve, reject) {
	        var url = "/likes";
	        resolve($.ajax({
	            type: "POST",
	            url: url,
	            data: { id: id }
	        }).done(function () {
	            console.log("Success.");
	            return;
	        }).fail(function () {
	            alert("Sorry. Server unavailable. ");
	        }));
	    });
	}

	function dbDislikes(id) {
	    return new Promise(function (resolve, reject) {
	        var url = "/dislikes";
	        resolve($.ajax({
	            method: "POST",
	            url: url,
	            data: {
	                id: id }
	        }).done(function (msg) {
	            console.log("Data Saved: " + msg);
	            return;
	        }));
	    });
	}

	function addComments(comment) {
	    return new Promise(function (resolve, reject) {
	        var url = "/comments";
	        resolve($.ajax({
	            method: "POST",
	            url: url,
	            data: {
	                comment: comment }
	        }).done(function (msg) {
	            console.log("Data Saved: " + msg);
	            return;
	        }));
	    });
	}

	function loadComments() {
	    return new Promise(function (resolve, reject) {
	        var url = "/comments";
	        resolve($.ajax({
	            type: "GET",
	            cache: false,
	            async: true,
	            timeout: 50000,
	            url: url,
	            success: function success(data) {
	                return data;
	            }
	        }));
	    });
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(2);

	var _reactRedux = __webpack_require__(4);

	var _actionCreators = __webpack_require__(20);

	var actionCreators = _interopRequireWildcard(_actionCreators);

	var _Main = __webpack_require__(25);

	var _Main2 = _interopRequireDefault(_Main);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function mapStateToProps(state) {
	  return {
	    comments: state.comments
	  };
	}

	function mapDispachToProps(dispatch) {
	  return (0, _redux.bindActionCreators)(actionCreators, dispatch);
	}

	var App = (0, _reactRedux.connect)(mapStateToProps, mapDispachToProps)(_Main2.default);

	exports.default = App;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Comm = _react2.default.createClass({
	  displayName: 'Comm',
	  handleLikes: function handleLikes(id) {
	    this.props.incrementLikes(id);
	  },
	  handleDislikes: function handleDislikes(id) {
	    this.props.decrementLikes(id);
	  },
	  render: function render() {
	    var _this = this;

	    var up = { color: 'green', cursor: 'pointer' };
	    var down = { color: 'red', cursor: 'pointer' };
	    var margin = { margin: '35px' };
	    return _jsx('div', {
	      style: margin,
	      className: 'col s12'
	    }, void 0, _jsx('div', {
	      className: 'col s8'
	    }, void 0, this.props.comment.comment), _jsx('div', {
	      className: 'col s2'
	    }, void 0, _jsx('div', {}, void 0, _jsx('i', {
	      style: up,
	      onClick: function onClick() {
	        return _this.handleLikes(_this.props.comment._id);
	      },
	      className: 'up material-icons'
	    }, void 0, 'thumb_up'), this.props.comment.likes, ' ')), _jsx('div', {
	      className: 'col s2'
	    }, void 0, _jsx('div', {}, void 0, _jsx('i', {
	      style: down,
	      onClick: function onClick() {
	        return _this.handleDislikes(_this.props.comment._id);
	      },
	      className: 'down material-icons'
	    }, void 0, 'thumb_down'), this.props.comment.dislikes, ' ')));
	  }
	});

	exports.default = Comm;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _Comm = __webpack_require__(22);

	var _Comm2 = _interopRequireDefault(_Comm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Comment = _react2.default.createClass({
		displayName: 'Comment',
		render: function render() {
			var _this = this;

			return _jsx('div', {
				className: 'containers'
			}, void 0, _jsx('div', {
				className: 'row'
			}, void 0, this.props.comments.comments.comments.map(function (comment, i) {
				return _react2.default.createElement(_Comm2.default, _extends({}, _this.props, { comment: comment, key: i }));
			})));
		}
	});

	exports.default = Comment;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _Comment = __webpack_require__(23);

	var _Comment2 = _interopRequireDefault(_Comment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Comments = _react2.default.createClass({
	  displayName: 'Comments',
	  componentDidMount: function componentDidMount() {
	    this.props.fetchComments();
	  },
	  handleSubmit: function handleSubmit(e) {
	    e.preventDefault();
	    var comment = this.refs.comment.value;
	    console.log(comment);
	    this.props.dbComment(comment);
	    this.refs.comment.value = " ";
	  },
	  render: function render() {
	    var m = { margin: '15px' };
	    return _jsx('div', {
	      className: 'container'
	    }, void 0, _jsx('div', {
	      className: 'row'
	    }, void 0, _jsx('div', {
	      className: 'col m12'
	    }, void 0, _react2.default.createElement(
	      'form',
	      { ref: 'inForm', className: 'in-form', onSubmit: this.handleSubmit },
	      _react2.default.createElement('textarea', { style: m, className: 'materialize-textarea', type: 'text', ref: 'comment', placeholder: 'Enter a comment' })
	    )), _jsx('div', {
	      className: 'col m12'
	    }, void 0, _jsx('button', {
	      onClick: this.handleSubmit,
	      type: 'submit',
	      style: m,
	      className: 'waves-effect waves-light btn'
	    }, void 0, 'Comment')), _jsx('div', {
	      className: 'col m12'
	    }, void 0, _react2.default.createElement(_Comment2.default, this.props))));
	  }
	});

	exports.default = Comments;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _ref = _jsx('nav', {
	  className: 'cyan'
	}, void 0, _jsx('div', {
	  className: 'nav-wrapper'
	}, void 0, _jsx('div', {
	  className: 'container'
	}, void 0, _jsx(_reactRouter.Link, {
	  className: 'brand-logo',
	  to: '/'
	}, void 0, 'Commenter'))));

	var Main = _react2.default.createClass({
	  displayName: 'Main',
	  render: function render() {
	    return _jsx('div', {}, void 0, _ref, _react2.default.cloneElement(_extends({}, this.props).children, _extends({}, this.props)));
	  }
	});

	exports.default = Main;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(2);

	var _comments = __webpack_require__(27);

	var _comments2 = _interopRequireDefault(_comments);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var rootReducer = (0, _redux.combineReducers)({ comments: _comments2.default });

	exports.default = rootReducer;

/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function comments() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	  var action = arguments[1];

	  switch (action.type) {
	    case 'RECEIVE_COMMENTS':
	      return Object.assign({}, state, {
	        comments: action.data
	      });
	    case 'INCREMENT_LIKES':
	      var newState = state.comments.comments.map(function (u) {
	        if (action.id === u._id) {
	          return Object.assign({}, u, { likes: u.likes + 1 });
	        } else return u;
	      });
	      return Object.assign({}, state, { comments: { comments: newState } });
	    case 'DECREMENT_LIKES':
	      var newState = state.comments.comments.map(function (u) {
	        if (action.id === u._id) {
	          return Object.assign({}, u, { dislikes: u.dislikes + 1 });
	        } else return u;
	      });
	      return Object.assign({}, state, { comments: { comments: newState } });
	    default:
	      return state;
	  }
	}

	exports.default = comments;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();
	// Webpack Requirements


	var _express = __webpack_require__(14);

	var _express2 = _interopRequireDefault(_express);

	var _compression = __webpack_require__(13);

	var _compression2 = _interopRequireDefault(_compression);

	var _mongoose = __webpack_require__(3);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	var _bodyParser = __webpack_require__(12);

	var _bodyParser2 = _interopRequireDefault(_bodyParser);

	var _path = __webpack_require__(15);

	var _path2 = _interopRequireDefault(_path);

	var _comment = __webpack_require__(9);

	var _comment2 = _interopRequireDefault(_comment);

	var _webpack = __webpack_require__(5);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _webpackConfig = __webpack_require__(11);

	var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

	var _webpackDevMiddleware = __webpack_require__(18);

	var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

	var _webpackHotMiddleware = __webpack_require__(19);

	var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

	var _store = __webpack_require__(7);

	var _reactRedux = __webpack_require__(4);

	var _react = __webpack_require__(0);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(16);

	var _reactRouter = __webpack_require__(1);

	var _reactHelmet = __webpack_require__(17);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _routes = __webpack_require__(6);

	var _routes2 = _interopRequireDefault(_routes);

	var _fetchData = __webpack_require__(10);

	var _config = __webpack_require__(8);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Initialize the Express App
	var app = new _express2.default();

	// Run Webpack dev server in development mode
	if (process.env.NODE_ENV === 'development') {
	  var compiler = (0, _webpack2.default)(_webpackConfig2.default);
	  app.use((0, _webpackDevMiddleware2.default)(compiler, { noInfo: true, publicPath: _webpackConfig2.default.output.publicPath }));
	  app.use((0, _webpackHotMiddleware2.default)(compiler));
	}

	// React And Redux Setup


	// Import required modules


	// Set native promises as mongoose promise
	_mongoose2.default.Promise = global.Promise;

	// MongoDB Connection
	_mongoose2.default.connect(_config2.default.mongoURL, function (error) {
	  if (error) {
	    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
	    throw error;
	  }
	});

	// Apply body Parser and server public assets and routes
	app.use((0, _compression2.default)());
	app.use(_bodyParser2.default.json({ limit: '20mb' }));
	app.use(_bodyParser2.default.urlencoded({ limit: '20mb', extended: false }));
	app.use(_express2.default.static(_path2.default.resolve(__dirname, '../dist')));

	// Render Initial HTML
	var renderFullPage = function renderFullPage(html, initialState) {
	  var head = _reactHelmet2.default.rewind();

	  // Import Manifests
	  var assetsManifest = process.env.webpackAssets && JSON.parse(process.env.webpackAssets);
	  var chunkManifest = process.env.webpackChunkAssets && JSON.parse(process.env.webpackChunkAssets);

	  return '\n    <!doctype html>\n    <html>\n      <head>\n        ' + head.base.toString() + '\n        ' + head.title.toString() + '\n        ' + head.meta.toString() + '\n        ' + head.link.toString() + '\n        ' + head.script.toString() + '\n\n        \n        ' + (process.env.NODE_ENV === 'production' ? '<link rel=\'stylesheet\' href=\'' + assetsManifest['/app.css'] + '\' />' : '') + '\n        <meta charset="utf-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1">\n        <link href=\'https://fonts.googleapis.com/css?family=Lato:400,300,700\' rel=\'stylesheet\' type=\'text/css\'/>\n        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">\n        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css">\n        <script   src="https://code.jquery.com/jquery-3.1.1.min.js"   integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="   crossorigin="anonymous"></script>\n      </head>\n      <body>\n        <div id="root">' + html + '</div>\n        <script>\n          \n          ' + (process.env.NODE_ENV === 'production' ? '//<![CDATA[\n          window.webpackManifest = ' + JSON.stringify(chunkManifest) + ';\n          //]]>' : '') + '\n        </script>\n        <script src=\'' + (process.env.NODE_ENV === 'production' ? assetsManifest['/vendor.js'] : '/vendor.js') + '\'></script>\n        <script src=\'' + (process.env.NODE_ENV === 'production' ? assetsManifest['/app.js'] : '/app.js') + '\'></script>\n      </body>\n    </html>\n  ';
	};

	var renderError = function renderError(err) {
	  var softTab = '&#32;&#32;&#32;&#32;';
	  var errTrace = process.env.NODE_ENV !== 'production' ? ':<br><br><pre style="color:red">' + softTab + err.stack.replace(/\n/g, '<br>' + softTab) + '</pre>' : '';
	  return renderFullPage('Server Error' + errTrace, {});
	};

	app.get('/comments', function (req, res) {
	  _comment2.default.find().sort('-dateAdded').exec(function (err, comments) {
	    if (err) {
	      res.status(500).send(err);
	    }
	    console.log("Entered server" + comments);
	    res.json({ comments: comments });
	  });
	});

	app.post('/comments', function (req, res) {
	  var comment = req.body.comment;
	  var newComment = new _comment2.default();
	  newComment.comment = comment;
	  newComment.likes = 0;
	  newComment.dislikes = 0;

	  newComment.save(function (err, comment) {
	    if (err) {
	      return console.error(err);
	    }
	    console.log("Created");
	    res.sendStatus(200);
	  });
	});

	app.post('/likes', function (req, res) {
	  var id = req.body.id;
	  _comment2.default.findByIdAndUpdate(id, { $inc: { likes: 1 } }, function (err, data) {
	    if (data) {
	      console.log("Updated likes");
	      res.sendStatus(200);
	    } else {
	      res.sendStatus(500);
	    }
	  });
	});

	app.post('/dislikes', function (req, res) {
	  var idd = req.body.id;
	  _comment2.default.findByIdAndUpdate(idd, { $inc: { dislikes: 1 } }, function (err, data) {
	    if (data) {
	      console.log("Updated dis");
	      res.sendStatus(200);
	    } else {
	      res.sendStatus(500);
	    }
	  });
	});

	// Server Side Rendering based on routes matched by React-router.
	app.use(function (req, res, next) {
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirectLocation, renderProps) {
	    if (err) {
	      return res.status(500).end(renderError(err));
	    }

	    if (redirectLocation) {
	      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
	    }

	    if (!renderProps) {
	      return next();
	    }

	    var store = (0, _store.configureStore)();

	    return (0, _fetchData.fetchComponentData)(store, renderProps.components, renderProps.params).then(function () {
	      var initialView = (0, _server.renderToString)(_jsx(_reactRedux.Provider, {
	        store: store
	      }, void 0, _react2.default.createElement(_reactRouter.RouterContext, renderProps)));
	      var finalState = store.getState();

	      res.set('Content-Type', 'text/html').status(200).end(renderFullPage(initialView, finalState));
	    }).catch(function (error) {
	      return next(error);
	    });
	  });
	});

	// start app
	app.listen(_config2.default.port, function (error) {
	  if (!error) {
	    console.log('Commenter is running on port: ' + _config2.default.port + '!'); // eslint-disable-line
	  }
	});

	exports.default = app;
	/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";
	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.sequence = sequence;
	/**
	 * Throw an array to it and a function which can generate promises
	 * and it will call them sequentially, one after another
	 */
	function sequence(items, consumer) {
	  var results = [];
	  var runner = function runner() {
	    var item = items.shift();
	    if (item) {
	      return consumer(item).then(function (result) {
	        results.push(result);
	      }).then(runner);
	    }

	    return Promise.resolve(results);
	  };

	  return runner();
	}

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = require("postcss-cssnext");

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = require("postcss-focus");

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = require("postcss-reporter");

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = require("redux-thunk");

/***/ }
/******/ ]);