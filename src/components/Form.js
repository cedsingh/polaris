import React, { Component } from "react";
import {
  Badge,
  Button,
  Checkbox,
  Form,
  FormLayout,
  RadioButton,
  TextField,
  TextStyle,
} from "@shopify/polaris";

export default class TheForm extends Component {
  state = {
    checked: true,
    radio: true,
    textField: "",
  };
  handleSubmit(e) {
    console.log(e.target[0].value);
  }
  handleChange(e) {
    this.setState({
      ...this.state,
      checked: !this.state.checked,
    });
  }
  handleRadio(e) {
    this.setState({
      ...this.state,
      radio: !this.state.radio,
    });
    console.log(this.state);
  }
  handleText(text) {
    this.setState({
      ...this.state,
      textField: text,
    });
  }
  render() {
    return (
      <Form onSubmit={(e) => this.handleSubmit(e)}>
        <FormLayout>
          <TextStyle variation="positive">
            Uesrs{<Badge status="success">3</Badge>}
          </TextStyle>
          <TextField
            type="text"
            label="Textfield"
            placeholder="Name"
            value={this.state.textField}
            onChange={(text) => this.handleText(text)}
          />
          <Checkbox
            label="Checkbox"
            checked={this.state.checked}
            onChange={(e) => this.handleChange(e)}
          />
          <RadioButton
            label="RadioButton"
            checked={this.state.radio}
            onChange={(e) => this.handleRadio(e)}
          />
          <Button submit primary>
            Submit
          </Button>
        </FormLayout>
      </Form>
    );
  }
}
