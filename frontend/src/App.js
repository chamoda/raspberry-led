import React, { Component } from 'react';

import Panel from './Components/Panel'

import './App.css';

class App extends Component {
  
  constructor(){

    super();

    this.state = {
      buttons: []
    }

  }

  componentWillMount(){

    this.setState({
      buttons: [
        {
          id: 1,
          name: 'On',
          action: 'on'
        },
        {
          id: 2,
          name: 'Off',
          action: 'off'
        }
      ] 
    })

  }

  render() {

    return (
      <div>
        <Panel buttons={this.state.buttons} />
      </div>
    );

  }

}

export default App;
