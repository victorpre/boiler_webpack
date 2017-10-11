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
        { label: "Descrição da academia", size: "is-lg", type: "textarea" },
        { label: "Restrições", size: "is-lg", type: "textarea" },
        { label: "CNPJ ou CPF", size: "is-sm", type: "text" },
        { label: "Razão social (opcional)", size: "is-md", type: "text" },
        { label: "Endereço", size: "is-lg", type: "text" },
        { label: "Complemento", size: "is-lg", type: "text" },
        { label: "Descrição do endereço", size: "is-lg", type: "textarea" }
      ]
    });
  }

  render() {
    const {fields} = this.state;
    return(
      <form action="" className="form-gympass">
        <h2>Dados da Academia</h2>
        {fields.map((element, idx) => (
          <RowForm key={idx} {...element} />
        ))}
      </form>
    )
  }
}

export default GymInfo;