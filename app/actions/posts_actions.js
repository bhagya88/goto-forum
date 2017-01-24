// create all actions associated with activeSubreddit
export function  setPosts(posts){

	return{
		type: 'SET_POSTS',
		posts
	}
}

export function addPost(post){

	return{
		type: 'ADD_POST',
		post
	}
}


export function addComment(postId,comment){

	return{
		type: 'ADD_COMMENT',
		id: postId,
		comment
		
	}
}

export function despatchSetPosts(){

	return (despatch) => {
		fetch('/posts')
		.then(res=>res.json())
		.then(data=>{
			console.log(data);
			despatch(setPosts(data))
		});
	}
}


export function despatchAddPost(post){

	return (despatch) => {

		fetch('/posts', 
		{   
		  method: "POST",
		  body: JSON.stringify({post}),
		  headers: {
		    "Content-Type": "application/json"
		  },
		  credentials: "same-origin"
    	})
		.then(data=>data.json())
		.then(data=>{
			console.log("from add post")
			console.log(data);
			despatch(addPost(data));
		});
	}
}

export function despatchAddComment(postId,comment){

	return (despatch) => {

		fetch('/posts/'+postId, 
		{   
		  method: "POST",
		  body: JSON.stringify({comment}),
		  headers: {
		    "Content-Type": "application/json"
		  },
		  credentials: "same-origin"
    	})
		.then(data=>data.json())
		.then(data=>{
			console.log("from add post")
			console.log(data);
			despatch(addComment(postId,comment));
		});
	}

}

