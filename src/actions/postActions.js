import { FETCH_POSTS, NEW_POST } from "./types";

export const fetchPosts = () => dispatch => {
  fetch("https://my-json-server.typicode.com/typicode/demo/posts")
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};

export const createPost = (postData) => dispatch => {

  };
  