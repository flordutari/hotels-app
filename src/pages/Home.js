import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Container from '../components/Container';
import Footer from '../components/Footer';

class Home extends Component {

  render() {
    const { search } = this.props.location;
    const { push } = this.props.history;
    return (
      <div className="room-and-rates">
          <NavBar />
          <Container 
            promo={search}
            push={push}
          />
          <Footer />
      </div>
    )
  }
}

export default Home;