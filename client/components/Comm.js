import React from 'react';

const Comm = React.createClass({
  
  handleLikes(id){
    this.props.incrementLikes(id);
  },

  handleDislikes(id){
    this.props.decrementLikes(id);
  },

	render(){
    var up = {color:'green',cursor:'pointer'};
    var down = {color:'red',cursor:'pointer'};
    var margin = {margin:'35px'};
		return(
			<div style={margin} className="col s12">
        <div className="col s8">
          {this.props.comment.comment}
        </div>
        <div className="col s2">
          <div><i style={up} onClick={() => this.handleLikes(this.props.comment._id)} className="up material-icons">thumb_up</i>
          {this.props.comment.likes} </div>
        </div>
        <div className="col s2">
          <div><i style={down} onClick={() => this.handleDislikes(this.props.comment._id)} className="down material-icons">thumb_down</i>
          {this.props.comment.dislikes} </div> 
        </div>
      </div>
			)
	}

});

export default Comm;