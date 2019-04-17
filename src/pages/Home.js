import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Form from '../components/Form';
import Container from '../components/Container';
import Footer from '../components/Footer';

class Home extends Component {
  render() {
    return (
      <div className="room-and-rates">
        <NavBar />
        <Form />
        <Container />
        <Footer />
      </div>
    );
  }
}

export default Home;