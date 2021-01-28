import React, { Component } from "react";
import Form from "./components/Form";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    return <Form />;
  }
}
