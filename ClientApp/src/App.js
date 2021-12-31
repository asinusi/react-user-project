import React, { Component } from 'react';
import Name from './components/name/Name';
import Language from './components/Language';
import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
    <React.Fragment>
      <Name />
      <Language />
    </React.Fragment>
    );
  }
}
