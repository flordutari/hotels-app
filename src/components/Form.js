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

  handleChangeCheckIn  = date => this.setState({ checkIn: moment(date).format('DD/MM/YYYY') });
  handleChangeCheckOut = date => this.setState({ checkOut: moment(date).format('DD/MM/YYYY') });

  render() {
    const { submit } = this.props;
    const { checkIn, checkOut, adults, children } = this.state;

    return (
      <div className="engine text-center">
        <div className="engine-wrapper">
          <div className="container text-center">

            <form onSubmit={(e) => {submit(e, this.state)}} id="search" className="form-inline" action="">

              <div className="form-group">
                <div className="input-group date" data-date-format="dd/mm/yyyy">
                  <DatePicker onChange={this.handleChangeCheckIn} placeholder={checkIn} value={checkIn} id="checkin" className="form-control react-datepicker"/>
                  <div className="input-group-addon" >
                    <span className="glyphicon glyphicon-calendar"></span>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="input-group date" data-date-format="dd/mm/yyyy">
                  <DatePicker onChange={this.handleChangeCheckOut} placeholder={checkOut} value={checkOut} id="checkout" className="react-datepicker form-control"/>
                  <div className="input-group-addon" >
                    <span className="glyphicon glyphicon-calendar"></span>
                  </div>
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
            
          </div>
        </div> 
      </div>
    );
  }
}

export default Form;