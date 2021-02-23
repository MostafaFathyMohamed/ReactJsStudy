import React from "react";
import axios from "axios";
import { Link, Route, Switch } from "react-router-dom";

const BASE_URL = "http://dev.ugu.com/api";
class App2 extends React.Component {
  state = {
    appData: null,
  };
  getAppData = () => {
    axios
      .get(BASE_URL + "/1.0/app-data")
      .then((res) => this.setState({ appData: res.data }));
  };
  componentDidMount() {
    this.getAppData();
  }
  render() {
    console.log(this.state.appData && this.state.appData.response.data);
    return <div>App</div>;
  }
}

export default App2;
