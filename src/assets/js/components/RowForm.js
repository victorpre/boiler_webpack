import React, {Component} from 'react';

class RowForm extends Component {
  
  renderField(type) {
    switch(type) {
      case "textarea":
        return <textarea className="input-txt textarea-txt"></textarea>;
      
      case "select":
        return (
          <select name="" className="selection-itens input-txt">
            <option value="Selecione uma conta">Selecione uma</option>
          </select>
        )
      
      default: 
        return <input type="text" className="input-txt"/>;
    }
  }
  
  render() {
    return(
      <div className={`form-row ${this.props.size}`}>
        <label htmlFor="">{this.props.label}</label>
        {this.renderField(this.props.type)}
      </div>
    )
  }

}

export default RowForm;