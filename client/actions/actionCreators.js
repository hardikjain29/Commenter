export function addComment(comment) {
  return {
    type: 'ADD_COMMENT',
    comment
  }
}

export function receiveComments(data) {
  console.log("Recieved"+ data);
  return {
    type: 'RECEIVE_COMMENTS',
    data
  }
}

export function deleteIngredient(index) {
  return {
    type: 'DELETE_INGREDIENT',
    index
  }
}

export function dbComment(comment) {
  return (dispatch, getState) => {
        addComments(comment)
            .then(dispatch(fetchComments()));
    }
}

export function startLoad(ingredients) {
  return (dispatch, getState) => {
  		dispatch(requestLoad());
        loadApi(ingredients)
            .then(data => {
            	dispatch(stopLoad());
            	return dispatch(receiveLoad(data))
            });
    }
}

export function uiLikes(id) {
  return {
    type: 'INCREMENT_LIKES',
    id
  }
}

export function incrementLikes(id) {
  return (dispatch, getState) => {
        dbLikes(id);
        dispatch(uiLikes(id));
    }
}

export function fetchComments() {
  return (dispatch, getState) => {
        loadComments()
            .then(data => {
              return dispatch(receiveComments(data))
            });
    }
}

function dbLikes(id){
  return new Promise((resolve, reject) => {
      console.log("entered db likes");
            var url = "http://localhost:8000/likes";
        resolve(
            $.ajax({
                method: "POST",
                url: url,
                data: {
                  id:id}
              }).done(function( msg ) {
                  console.log( "Data Saved: " + msg );
                  return;
                })
          );
    });

}

function addComments(comment) {
    return new Promise((resolve, reject) => {
      console.log("entered add");
            var url = "http://localhost:8000/comments";
        resolve(
            $.ajax({
                method: "POST",
                url: url,
                data: {
                  comment:comment}
              }).done(function( msg ) {
                  console.log( "Data Saved: " + msg );
                  return;
                })
          );
    });
}

function loadComments() {
    return new Promise((resolve, reject) => {
      console.log("entered");
            var url = "http://localhost:8000/comments";
        resolve(
            $.ajax({
                    type: "GET",
                    cache: false,
                    url: url,
                    success: function (data) {
                    	return data
                    }
                })

        	);
    });
}