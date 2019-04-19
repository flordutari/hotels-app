import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Container from '../components/Container';
import Footer from '../components/Footer';

class Home extends Component {

  render() {
    const { search } = this.props.location;
    return (
      <div className="room-and-rates">
          <NavBar />
          <Container 
            promo={search}
          />
          <Footer />
      </div>
    )
  }
}

export default Home;