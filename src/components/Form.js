import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class Form extends Component {

  render() {
    const { checkIn, checkOut, adults, children, submit, handleChange, handleChangeCheckIn, handleChangeCheckOut } = this.props;

    return (
      <div className="engine text-center">
        <div className="engine-wrapper">
          <div className="container text-center">

            <form onSubmit={(e) => {submit(e, this.props)}} id="search" className="form-inline" action="">

              <div className="form-group">
                <div className="input-group date" data-date-format="dd/mm/yyyy">
                  <DatePicker onChange={(checkIn) => {handleChangeCheckIn(checkIn)}} placeholder={checkIn} value={checkIn} id="checkin" className="form-control react-datepicker"/>
                </div>
              </div>

              <div className="form-group">
                <div className="input-group date" data-date-format="dd/mm/yyyy">
                  <DatePicker onChange={(checkOut) => {handleChangeCheckOut(checkOut)}} placeholder={checkOut} value={checkOut} id="checkout" className="react-datepicker form-control"/>
                </div>
              </div>

              <div className="form-group select-inline">
                <select name="adults" onChange={(adults) => {handleChange(adults)}} value={adults} className="form-control" placeholder="Adults" id="adults">
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
                <select name="children" onChange={(children) => {handleChange(children)}} value={children} className="form-control" placeholder="Children" id="children">
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