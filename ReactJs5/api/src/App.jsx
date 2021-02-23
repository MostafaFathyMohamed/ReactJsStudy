import React from "react";
import axios from "axios";
import { Link, Route, Switch } from "react-router-dom";

const BASE_URL = "http://dev.uguworld.com/api";
class App extends React.Component {
  state = {
    user: null,
    posts: [],
    newPost: {
      type: "TEXT",
      contnt: "Add New Post",
    },
  };
  authHeader = () => {
    return {
      headers: { Authorization: 'Bearer ${localStorage.getItem("token")}' },
    };
  };
  login = () => {
    const userData = {
      email: "user-14@ugu.com",
      password: "S1234s12",
      fcm_token: "bk3RNwTe3H0:CI2k_HHwgIpoDKCIZvvDMExUdFQ3P1",
      device_id: "yts9KIBu1YUo",
    };
    axios.post(BASE_URL + "/1.0/auth/login", userData).then((res) => {
      this.setState({ user: res.data.response.data.user });
      localStorage.setItem("user", JSON.stringify(res.data.response.data.user));
      localStorage.setItem("token", res.data.response.data.token);
    });
  };

  getFeed = () => {
    axios
      .get(BASE_URL + "/1.0/posts/feed-filters", this.authHeader())
      .then((res) => {
        this.setState({ posts: res.data.response.data });
      });
  };

  userProfile = () => {
    axios
      .get(BASE_URL + "/1.0/user", this.authHeader())
      .then((res) => this.setState({ user: res.data.response.data }));
  };

  addNewPost = () => {
    axios
      .post(BASE_URL + "/1.0/posts", this.state.newPost, this.authHeader())
      .then((res) => console.log(res));
  };

  render() {
    console.table(this.state.posts);
    return (
      <div>
        <button onClick={this.login}>Login</button>
        <button onClick={this.getFeed}>Get posts</button>
        <button onClick={this.userProfile}>Get posts</button>
        <button onClick={this.addNewPost}>Add New Post</button>

        {localStorage.getItem("token")}
      </div>
    );
  }
}

export default App;
