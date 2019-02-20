import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentWillMount() {
    fetch("https://my-json-server.typicode.com/typicode/demo/posts")
      .then(res => res.json())
      .then(data => this.setState({ posts: data }));
  }
  render() {
    const postItems = this.state.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
     return (
      <div>
        <PostForm />
        <hr />
        <Posts />
      </div>
    );
  }
}

export default App;
