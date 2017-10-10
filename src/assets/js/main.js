import '../sass/main.scss';

import React, {Component} from 'react';
import { render } from 'react-dom';

// import MyName from './components/MyName';
import GymInfo from './components/GymInfo';
import BankData from './components/BankData';

class App extends Component {
  render() {
    return (
      <div className="form">
        <h1>Editando academia - Competition Frei Caneca</h1>
        <GymInfo />
        <BankData />
      </div>
    )
  }
}

render(<App/>, document.querySelector("#container"));