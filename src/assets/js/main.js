import '../sass/main.scss';

import React from 'react';
import { render } from 'react-dom';

import MyName from './components/MyName';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.infos = [{
      name: "Guilherme",
      relationship: "Eu mesmo",
      email: "guilherme.milfont@gmail.com"
    },
    {
      name: "Rodrigo",
      relationship: "Irmão",
      email: "rodrigomilfont@gmail.com"
    },{
      name: "Joaquim",
      relationship: "Filho",
      email: "joaquimmilfont@gmail.com"
    }
    ];
  }

  render() {
    return (
      <div>
        {
          this.infos.map((e, idx) => (
            <MyName key={idx} name={e.name} relationship={e.relationship} email={e.email} />
          ))
        }
      </div>
    )
  }
}

render(<App/>, document.querySelector("#container"));