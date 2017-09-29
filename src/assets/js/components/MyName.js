import React from 'react';

class MyName extends React.Component {
  render() {
    return (
      <div className="personal-infos">
        <h2>{this.props.name}</h2>
        <strong>{this.props.relationship}</strong>: 
        <a href="mailto:{this.props.email}">{this.props.email}</a>
      </div>
    )
  }
}

export default MyName;