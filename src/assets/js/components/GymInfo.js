import React, {Component} from 'react';

import RowForm from './RowForm';

class GymInfo extends Component {
  constructor() {
    super();

    this.state = {
      fields: [],
    }
  }

  componentWillMount() {
    this.setState({
      fields: [
        { label: "Nome fantasia do estabelicimento", size: "is-lg", type: "text" },
        { label: "Descrição da academia", size: "is-lg", type: "textarea" }
      ]
    });
  }

  render() {
    const {fields} = this.state;
    return(
      <form action="" className="form-gympass">
        <h2>Dados da Academia</h2>
        {fields.map((f, idx) => (
          <RowForm key={idx} {...f} />
        ))}
      </form>
    )
  }
}

export default GymInfo;