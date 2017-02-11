import React from 'react';
import Comment from './Comment';

const Comments = React.createClass({
  
  componentDidMount() {
    this.props.fetchComments();
  },

	handleSubmit(e){
		e.preventDefault();
		const comment = this.refs.comment.value;
    console.log(comment);
		this.props.dbComment(comment);
		this.refs.comment.value = " ";
	},

  render() {
    var m = {margin:'15px'};
    return (
      <div className="container">
          <div className="row">
            <div className="col m12">
              <form ref="inForm" className="in-form" onSubmit={this.handleSubmit}>
                <textarea style={m}  className="materialize-textarea" type="text" ref="comment" placeholder="Enter a comment"></textarea>
              </form>
          </div>
                <div className="col m12">
                    <button  onClick={this.handleSubmit} type="submit" style={m} className="waves-effect waves-light btn">Comment</button>
                </div>
              <div className="col m12">
                  <Comment {...this.props}/>
              </div>
      </div>
      </div>
    )
  }
});

export default Comments;
