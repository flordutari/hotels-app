import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Form from '../components/Form';
import Container from '../components/Container';
import Footer from '../components/Footer';

class Home extends Component {

  state = {
    checkIn: '',
    checkOut: '',
    adults: '',
    children: ''
  }

  handleSubmit = (e, state) => {
    e.preventDefault();
    this.setState({
      checkIn: state.checkIn,
      checkOut: state.checkOut,
      adults: state.adults,
      children: state.children
    })
  }

  render() {
    const { checkIn, checkOut, adults, children } = this.state;
    return (
      <div className="room-and-rates">
        <NavBar />
        <Form 
        submit={this.handleSubmit}
        />
        <Container 
        checkIn={checkIn}
        checkOut={checkOut}
        adults={adults}
        children={children}
        />
        <Footer />
      </div>
    );
  }
}

export default Home;