import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Container from '../components/Container';
import Footer from '../components/Footer';

class Home extends Component {

  render() {
      return (
        <div className="room-and-rates">
            <NavBar />
            <Container />
            <Footer />
        </div>
      )
  }
}

export default Home;