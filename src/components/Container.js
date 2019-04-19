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
    adults: '2',
    children: '',
    roomName: 'Room',
    roomPrice:'0',
    daysQuantity: '1',
    quantity: '1',
    mistake: false
  }

  componentDidMount = () => {
    this.getDate();
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

  handleSubmit = (e, state) => {
    e.preventDefault();
    this.setState({
      checkIn: state.checkIn,
      checkOut: state.checkOut,
      adults: state.adults,
      children: state.children,
    })
  }

  handleCardClick = (e, props, roomPrice) => {
    e.preventDefault();
    this.setState({
      roomName: props.name,
      roomPrice: roomPrice,
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

	getDaysQuantity = (checkIn, checkOut) => {
    const start = moment(checkIn, 'DD/MM/YYYY');
    const end = moment(checkOut, 'DD/MM/YYYY');

    const daysQuantity = end.diff(start, 'days');
    if (daysQuantity <= 0) {
      return (
        this.setState({
          mistake: true,
          checkOut: 'Checkout'
        })
      )
    } else {
      return (
        this.setState({
          daysQuantity,
          mistake: false
        })
      )
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value,
    })
  }

  handleChangeCheckIn  = date => {
    const today = moment().format('DD/MM/YYYY');
    const checkIn = moment(date).format('DD/MM/YYYY');
    const start = moment(today, 'DD/MM/YYYY');
    const end= moment(checkIn, 'DD/MM/YYYY');

    const difference = end.diff(start, 'days');
    if(difference > 0) {
      const { checkOut } = this.state;
      this.setState({ 
        checkIn
      });
      this.getDaysQuantity(checkIn, checkOut);
    } else {
      this.setState({ 
        checkIn: today
      });
    }
  }

  handleChangeCheckOut  = date => {
    const { checkIn } = this.state;
    const checkOut = moment(date).format('DD/MM/YYYY');
    const checkOutCheck = moment(date).add(1, 'days').format('DD/MM/YYYY');
    const start = moment(checkIn, 'DD/MM/YYYY');
    const end= moment(checkOutCheck, 'DD/MM/YYYY');

    const difference = end.diff(start, 'days');
    if(difference > 0) {
      const { checkIn } = this.state;
      this.setState({ 
        checkOut
      });
      this.getDaysQuantity(checkIn, checkOut);
    } else {
      this.setState({ 
        checkOut: checkOutCheck
      });
    }
  }

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
            mistake
          } = this.state;
    const { promo } = this.props;
    return (
      <>
        <Form 
          submit={this.handleSubmit}
          handleChange={this.handleChange}
          handleChangeCheckIn={this.handleChangeCheckIn}
          handleChangeCheckOut={this.handleChangeCheckOut}
          checkIn={checkIn}
          checkOut={checkOut}
          adults={adults}
          children={children}
        />
        {(mistake) ?
        <p className="dateMistake">Looks like there is a mistake, check the dates!</p> : null }
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
