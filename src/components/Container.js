import React, { Component } from 'react';
import RoomsList from './RoomsList';
import Sidebar from './Sidebar';
import Form from '../components/Form';
import ls from 'local-storage';

class Container extends Component {

  //States

  state = {
    checkIn: '',
    checkOut: '',
    adults: '2',
    children: '',
    roomName: 'Room',
    roomPrice:'0',
    daysQuantity: '1',
    quantity: '1',
    mistake: false
  }

  //Component did mount

  componentDidMount = () => {
    if (localStorage.length > 0){
      fetch(URL)
      .then(() => this.setState({
        checkIn: ls.get('checkIn'),
        checkOut: ls.get('checkOut'),
        adults: ls.get('adults'),
        children: ls.get('children'),
        daysQuantity: ls.get('daysQuantity'),
        roomName: ls.get('roomName'),
        roomPrice: ls.get('roomPrice'),
        quantity: ls.get('quantity'),
      }));
    }
  }
  
  //Form submit (Modify)

  handleSubmit = (e, state) => {
    e.preventDefault();
    this.setState({
      checkIn: state.checkIn,
      checkOut: state.checkOut,
      adults: state.adults,
      children: state.children,
      daysQuantity: state.daysQuantity
    })
  }

  //Cards changes

  handleCardClick = (e, props, roomPrice) => {
    e.preventDefault();
    this.setState({
      roomName: props.name,
      roomPrice: roomPrice,
    })
  }

  //Save info

	handleSaveToLocalStorage = (props) => {
		ls.set('checkIn', props.checkIn);
		ls.set('checkOut', props.checkOut);
		ls.set('adults', props.adults);
		ls.set('children', props.children);
		ls.set('daysQuantity', props.daysQuantity)
		ls.set('roomName', props.roomName);
		ls.set('roomPrice', props.roomPrice);
		ls.set('quantity', props.quantity);
  }

	handleQuantity = (e) => {
		this.setState({ quantity: e.target.value })
  }

  render() {
    const { checkIn, 
            checkOut, 
            adults, 
            children, 
            roomName, 
            roomPrice,
            daysQuantity,
            quantity,
          } = this.state;
    const { promo, push } = this.props;
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
                promo={promo}
                push={push}
              />
            </div>
            <div className="col-md-4 sidebar">
              <Sidebar 
                checkIn={checkIn}
                checkOut={checkOut}
                adults={adults}
                children={children}
                roomName={roomName}
                roomPrice={roomPrice}
                submit={this.handleSubmit}
                daysQuantity={daysQuantity}
                quantity={quantity}
                handleQuantity={this.handleQuantity}
                handleSaveToLocalStorage={this.handleSaveToLocalStorage}
              />
            </div>
          </div>

        </div>
      </>
    );
  }
}

export default Container;
