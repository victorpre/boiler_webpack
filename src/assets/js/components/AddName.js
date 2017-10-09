import React, { Component } from 'react';

class AddName extends Component {
  
  constructor() {
    super();
    this.state = { text: "", }
    // this.getInitialState = () => (text: "");
    this.handleChange = (event) => this.setState({text: event.target.value});
  }
  
  render() {
    return (
      <div className="add-lastname">
        <input type="text" className="txt-name" onChange={this.handleChange}/>
        <button className="btn-add">add</button>
        <br/>
        {this.state.text}
      </div>
    )
  }
}

export default AddName;