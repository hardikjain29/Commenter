import React from 'react';

const Comm = React.createClass({
  
  handleLikes(id){
    this.props.incrementLikes(id);
  },

  handleDislikes(id){
    this.props.decrementLikes(id);
  },

	render(){
		return(
			<div className="col s12">
        <div className="col s8">
          {this.props.comment.comment}
        </div>
        <div className="col s2">
          <button onClick={() => this.handleLikes(this.props.comment._id)} className="likes">{this.props.comment.likes}</button>
        </div>
        <div className="col s2">
          <button onClick={() => this.handleDislikes(this.props.comment._id)} className="dislikes">{this.props.comment.dislikes}</button>
        </div>
      </div>
			)
	}

});

export default Comm;