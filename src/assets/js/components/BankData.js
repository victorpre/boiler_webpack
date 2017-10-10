import React, {Component} from 'react';

import RowForm from './RowForm';

class BankData extends Component {
  render() {
    return(
      <form action="" className="form-gympass">
        <h2>Dados bancários</h2>
        <RowForm label="Nome completo do titular da conta" size="is-lg" type="text" />
        <RowForm label="CNPJ ou CPF do titular" size="is-sm" type="text" />
        <RowForm label="Tipo de conta" size="is-md" type="select" />
        <RowForm label="Banco" size="is-md" type="select" />
        <RowForm label="Agência sem o dígito verificador" size="is-sm" type="text" />
        <RowForm label="Conta Corrente com dígito verificador" size="is-md" type="text" />
      </form>
    )
  }
}

export default BankData;