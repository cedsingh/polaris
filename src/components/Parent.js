import React, { Component } from "react";
import Child from "./Child";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    return (
      <Child
        value={String(this.state.count)}
        handle={() => this.handleClick()}
      />
    );
  }
}
