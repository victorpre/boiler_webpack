import '../sass/main.scss';

import React, {Component} from 'react';
import { render } from 'react-dom';

import HelloWorld from './components/HelloWorld';

class App extends Component {
  render() {
    return (
      <div className="app">
        <HelloWorld hello="Hello World!" />
      </div>
    )
  }
}

render(<App/>, document.querySelector("#container"));