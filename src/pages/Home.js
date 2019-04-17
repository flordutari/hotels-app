import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Form from '../components/Form';
import RoomsList from '../components/RoomsList';

class Home extends Component {
  render() {
    return (
      <div className="room-and-rates">
        <NavBar />
        <Form />
        <RoomsList />
      </div>
    );
  }
}

export default Home;