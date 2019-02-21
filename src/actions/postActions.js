import { FETCH_POSTS, NEW_POST } from "./types";

export function fetchPosts() {
// thunk (middleware) allows us to call the dispatch function 
// directly so that we can make asychronous requests
// dispatch is like a resolver in a promise
    return  function(dispatch) {
// this is where we create our fetch
        fetch("https://my-json-server.typicode.com/typicode/demo/posts")
        .then(res => res.json())
// we dont want to use this.setState because that sets the component state
// we want to dispatch the data to the reducer
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }));
    }
}