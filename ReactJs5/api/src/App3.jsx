import React from "react";
import axios from "axios";
import { Link, Route, Switch } from "react-router-dom";

class App3 extends React.Component {
  state = {
    posts: [
      {
        id: 1,
        title: "Title one",
      },
      {
        id: 2,
        title: "Title one",
      },
    ],
  };
  getAllPostsFromApi = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((Response) => this.setState({ posts: Response.data }));
  };
  componentDidMount() {
    {
      this.getAllPostsFromApi();
    }
  }

  render() {
    return (
      <Switch>
        <Route
          path="/:postId"
          render={(props) => <PostsShow {...props} />}
          exact
        />
        <Route
          path="/"
          render={(props) => (
            <PostsList {...props} posts={this.state.posts} exact />
          )}
        />
      </Switch>
    );
  }
}
const PostsList = (props) => {
  return (
    <ul>
      {props.posts.map((post) => (
        <li key={post.id}>
          <Link to={`/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

class PostsShow extends React.Component {
  state = {
    post: {},
  };
  async componentDidMount() {
    const data = await this.getPostById(this.props.match.params.postId).then(
      (r) => r.data
    );
    this.setState({ post: data });
  }
  getPostById = async (postId) => {
    return await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
  };

  render() {
    return (
      <p>
        Title
        {this.state.post && this.state.post.title}
        <hr />
        Body
        {this.state.post && this.state.post.body}
      </p>
    );
  }
}

export default App3;
