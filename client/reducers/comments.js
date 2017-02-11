function comments(state = [], action) {
  switch(action.type) {
    case 'RECEIVE_COMMENTS' :
      return Object.assign({}, state, {
        comments: action.data
      })
    case 'INCREMENT_LIKES':
      var newState = state.comments.comments.map(u => {
        if(action.id === u._id){
          return Object.assign({}, u, { likes: u.likes + 1} )
        }
        else
          return u
      });
      return Object.assign({}, state, {comments:{comments:newState}} );
    default:
      return state;
  }
}

export default comments;
