import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment'

class Form extends Component {

  state = {
    todaysDate: '',
    tomorrowsDate: ''
  }

  componentDidMount = () => {
    this.getDate()
  }

  getDate = () => {
    const today = moment().format('DD/MM/YYYY');
    const tomorrow = moment().add(1, 'days').format('DD/MM/YYYY');
    this.setState({
      todaysDate: today,
      tomorrowsDate: tomorrow
    }) 
  }

  render() {
    const { todaysDate, tomorrowsDate } = this.state;
    return (
      <div className="engine text-center">
        <div className="engine-wrapper">
          <div className="container text-center">

            <form id="search" className="form-inline" action="">

              <div className="form-group">
                <div className="input-group date" data-date-format="dd/mm/yyyy">
                  <input id="checkin" type="text" className="form-control" placeholder={todaysDate}/>
                  <div className="input-group-addon" >
                      <span className="glyphicon glyphicon-calendar"></span>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="input-group date" data-date-format="dd/mm/yyyy">
                  <input id="checkout" type="text" className="form-control" placeholder={tomorrowsDate}/>
                  <div className="input-group-addon" >
                      <span className="glyphicon glyphicon-calendar"></span>
                  </div>
                </div>
              </div>


              <div className="form-group select-inline">
                <select className="form-control" placeholder="Adults" id="adults">
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
                <select className="form-control" placeholder="Children" id="children">
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
                <Link to="#" className="btn btn-primary">Modify</Link>
              </div>
            </form>
            
          </div>
        </div> 
      </div>
    );
  }
}

export default Form;

// var DatePicker = require("react-bootstrap-date-picker");
 
// var App = React.createClass({
//   getInitialState: function(){
//     var value = new Date().toISOString();
//     return {
//       value: value
//     }
//   },
//   handleChange: function(value, formattedValue) {
//     this.setState({
//       value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
//       formattedValue: formattedValue // Formatted String, ex: "11/19/2016"
//     });
//   },
//   componentDidUpdate: function(){
//     // Access ISO String and formatted values from the DOM.
//     var hiddenInputElement = document.getElementById("example-datepicker");
//     console.log(hiddenInputElement.value); // ISO String, ex: "2016-11-19T12:00:00.000Z"
//     console.log(hiddenInputElement.getAttribute('data-formattedvalue')) // Formatted String, ex: "11/19/2016"
//   },
//   render: function(){
//     return <FormGroup>
//       <ControlLabel>Label</ControlLabel>
//       <DatePicker id="example-datepicker" value={this.state.value} onChange={this.handleChange} />
//       <HelpBlock>Help</HelpBlock>
//     </FormGroup>;
//   }
// });