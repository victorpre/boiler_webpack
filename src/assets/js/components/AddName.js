// import React, { Component } from 'react';

// class AddName extends Component {
  
//   constructor() {
//     super();
//     this.state = { 
//       text: "",
//       textAdded: false,
//     }
    
//     this.handleChange = (event) => this.setState({text: event.target.value});
//     this.eraseTxt = (event) => this.setState({text: ""});
//   }
  
//   render() {
//     return (
//       <div className="add-lastname">
//         <input type="text" className="txt-name" onChange={this.handleChange}/>
//         <button className="btn-add" disabled={this.state.text.length === 0 && !this.state.textAdded} onClick={this.eraseTxt}>{this.state.textAdded ? "Added" : "Add"}</button>
//         <br />
//         {this.state.text}
//       </div>
//     )
//   }
// }

// export default AddName;