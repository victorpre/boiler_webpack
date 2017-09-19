import '../sass/main.scss';

import React from 'react';
import { render } from 'react-dom';

import MyName from './components/MyName';

class App extends React.Component {
  render() {
    return (
      <MyName name="Guilherme" />
    )
  }
}

render(<App/>, document.querySelector("#container"));