import '../sass/main.scss';

import React from 'react';
import { render } from 'react-dom';

import MyName from './components/MyName';

class App extends React.Component {
  render() {
    return (
      <div>
        <MyName name="Guilherme" relationship="Eu mesmo" email="guilherme.milfont@gmail.com" />
        <MyName name="Rodrigo" relationship="Irmão" email="rodrigomilfont@gmail.com" />
        <MyName name="Joaquim" relationship="Filho" email="joaquimmilfont@gmail.com" />
      </div>
    )
  }
}

render(<App/>, document.querySelector("#container"));