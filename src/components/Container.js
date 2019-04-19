import React, { Component } from 'react';
import RoomsList from './RoomsList';
import Sidebar from './Sidebar';
import Form from '../components/Form';
import moment from 'moment';
import ls from 'local-storage';

class Container extends Component {

  state = {
    checkIn: '',
    checkOut: '',
    adults: '',
    children: '',
    checkInLS: '',
		checkOutLS: '',
		adultsLS: '',
    childrenLS: '',
    roomName: 'Room',
    roomPrice: {common:'0', discount: '0'}
  }

  componentDidMount = () => {
    this.getDate();
    fetch(URL)
		.then(result => this.setState({
			checkInLS: ls.get('checkIn') || '',
			checkOutLS: ls.get('checkOut') || '',
			adultsLS: ls.get('adults') || '',
			childrenLS: ls.get('children') || '',
		}));
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

  handleCardClick = (e, props) => {
    e.preventDefault();
    this.setState({
      roomName: props.name,
      roomPrice: props.price,
    })
  }

  getDate = () => {
    const today = moment().format('DD/MM/YYYY');
    const tomorrow = moment().add(1, 'days').format('DD/MM/YYYY');
    this.setState({
      checkIn: today,
      checkOut: tomorrow
    }) 
  }

  render() {
    const { checkIn, checkOut, adults, children, roomName, roomPrice:{ common, discount } } = this.state;
    return (
      <>
        <Form 
          submit={this.handleSubmit}
        />
        <div className="container rar-summary">

          <div className="row">
            <div className="col-md-8 main">
                <h2>Rooms & Rates</h2>
                <p className="subtitle">Plan your perfect stay at our hotel</p>
                <img src="images/cocos/wizard_1.png" width="480" className="wizard" alt="wizard"/>
            </div>
            <div className="col-md-4 sidebar-header"></div>
          </div>

          <div className="row">
            <div className="col-md-8 main">
              <RoomsList 
              handleCardClick={this.handleCardClick}
              />
            </div>
            <div className="col-md-4 sidebar">
              <Sidebar 
                checkIn={checkIn}
                checkOut={checkOut}
                adults={adults}
                children={children}
                roomName={roomName}
                common={common}
                discount={discount}
              />
            </div>
          </div>

        </div>
      </>
    );
  }
}

export default Container;
