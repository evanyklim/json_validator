import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      result: 'Invalid JSON'
    }
    this.handleChange = this.handleChange.bind(this)
    this.validator = this.validator.bind(this)
  }
  handleChange(event) {
    let text = event.target.value
    if (this.validator(text)) {
      this.setState({
        text: text, 
        result: text
      })
    } else {
      this.setState({
        text: text,
        result: "Invalid JSON"
      })
    }
  }
  validator(inputText) {
    try {
      JSON.parse(inputText)
      return true
    } 
    catch (err) {
      return false
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Dynamic JSON Validator</h2>
        </div>
        <p className="App-intro">
          {this.state.result}
        </p>
        <textarea value={this.state.text} onChange={this.handleChange}/>
      </div>
    );
  }
}


export default App;
