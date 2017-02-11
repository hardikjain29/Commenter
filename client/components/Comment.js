import React from 'react';
import Comm from './Comm';

const Comment = React.createClass({
	render()
	{
		return(
			<div className="containers">
				<div className="row">
					{this.props.comments.comments.comments.map((comment,i) => <Comm {...this.props} comment={comment} key={i} />)}
				</div>
			</div>
			)
	}

});

export default Comment;