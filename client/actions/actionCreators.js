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

export function uiDislikes(id) {
  return {
    type: 'DECREMENT_LIKES',
    id
  }
}

export function incrementLikes(id) {
  return (dispatch, getState) => {
        dbLikes(id);
        dispatch(uiLikes(id));

    }
}

export function decrementLikes(id) {
  return (dispatch, getState) => {
        dbDislikes(id);
        dispatch(uiDislikes(id));
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
            var url = "/likes";
        resolve(

           $.ajax({
                type: "POST", 
                url : url,
                data: {id:id}
            }).done(function()  {
                console.log("Success.");
                return;
            }).fail(function()  {
                alert("Sorry. Server unavailable. ");
            })
          );
    });

}

function dbDislikes(id){
  return new Promise((resolve, reject) => {
        var url = "/dislikes";
        resolve(
            $.ajax({
                method: "POST",
                url: url,
                data:{
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
            var url = "/comments";
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
            var url = "/comments";
        resolve(
            $.ajax({
                    type: "GET",
                    cache: false,
                    async: true,
                     timeout:50000,
                    url: url,
                    success: function (data) {
                    	return data
                    }
                })

        	);
    });
}