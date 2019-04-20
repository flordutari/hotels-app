import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

class Form extends Component {

  state = {
    checkIn: '',
    checkOut: '',
    adults: '2',
    children: '',
    roomName: 'Room',
    roomPrice: '0',
    daysQuantity: '1',
    mistake: false,
  }

  componentDidMount = () => {
    this.getDate();
    
  }

  getDate = () => {
    const today = moment().format('DD/MM/YYYY');
    const tomorrow = moment().add(1, 'days').format('DD/MM/YYYY');
    this.setState({
      checkIn: today,
      checkOut: tomorrow
    }) 
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
    const end = moment(checkIn, 'DD/MM/YYYY');

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
    const start = moment(checkIn, 'DD/MM/YYYY');
    const end= moment(checkOut, 'DD/MM/YYYY');

    const difference = end.diff(start, 'days');
    if(difference > 0) {
      const { checkIn } = this.state;
      this.setState({ 
        checkOut
      });
      this.getDaysQuantity(checkIn, checkOut);
    } else {
      this.setState({ 
        checkOut: 'checkout',
        mistake: true
      });
    }
  }

	getDaysQuantity = (checkIn, checkOut) => {
    const start = moment(checkIn, 'DD/MM/YYYY');
    const end = moment(checkOut, 'DD/MM/YYYY');

    const daysQuantity = end.diff(start, 'days');
    if (daysQuantity <= 0) {
      return (
        this.setState({
          checkOut: 'Checkout',
          mistake: true,
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

  render() {
    const { submit } = this.props;
    const { checkIn, checkOut, adults, children, mistake } = this.state;
    return (
      <div className="engine text-center">
        <div className="engine-wrapper">
          <div className="container text-center">

            <form onSubmit={(e) => {submit(e, this.state)}} id="search" className="form-inline" action="">

              <div className="form-group">
                <div className="input-group date" data-date-format="dd/mm/yyyy">
                  <DatePicker onChange={this.handleChangeCheckIn} placeholder={checkIn} value={checkIn} id="checkin" className="form-control react-datepicker"/>
                </div>
              </div>

              <div className="form-group">
                <div className="input-group date" data-date-format="dd/mm/yyyy">
                  <DatePicker onChange={this.handleChangeCheckOut} placeholder={checkOut} value={checkOut} id="checkout" className="react-datepicker form-control"/>
                </div>
              </div>

              <div className="form-group select-inline">
                <select name="adults" onChange={this.handleChange} value={adults} className="form-control" placeholder="Adults" id="adults">
                  <option defaultValue>Adults</option>
                  <option value="1">Adults: 1</option>
                  <option value="2">Adults: 2</option>
                  <option value="3">Adults: 3</option>
                  <option value="4">Adults: 4</option>
                  <option value="5">Adults: 5</option>
                  <option value="6">Adults: 6</option>
                  <option value="7">Adults: 7</option>
                  <option value="8">Adults: 8</option>
                  <option value="9">Adults: 9</option>
                </select>
              </div>

              <div className="form-group select-inline">
                <select name="children" onChange={this.handleChange} value={children} className="form-control" placeholder="Children" id="children">
                  <option defaultValue>Children</option>
                  <option value="1">Children: 1</option>
                  <option value="2">Children: 2</option>
                  <option value="3">Children: 3</option>
                  <option value="4">Children: 4</option>
                  <option value="5">Children: 5</option>
                  <option value="6">Children: 6</option>
                  <option value="7">Children: 7</option>
                  <option value="8">Children: 8</option>
                  <option value="9">Children: 9</option>
                </select>
              </div>

              <div className="form-group">
                <input type="submit" className="btn btn-primary" value="Modify"/>
              </div>
            </form>
            {(mistake) ?
            <p className="dateMistake">Looks like there is a mistake, check the dates!</p> : null }   

          </div>
        </div> 
      </div>
    );
  }
}

export default Form;