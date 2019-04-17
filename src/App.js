import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Room from './pages/Room';
import NoMatch from './pages/NoMatch';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/room/:id" component={ Room }/>
        <Route component={ NoMatch }/>
      </Switch>
    );
  }
}

export default App;
