import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home }/>
        <Route component={ NoMatch }/>
      </Switch>
    );
  }
}

export default App;
