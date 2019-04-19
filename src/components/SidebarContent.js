import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ls from 'local-storage';

class SidebarContent extends Component {

	state = {
		quantity:'1',
	}

	handleQuantity = (e) => {
		this.setState({ quantity: e.target.value })
	}

	handleSaveToLocalStorage = (props, state) => {
		ls.set('checkIn', props.checkIn);
		ls.set('checkOut', props.checkOut);
		ls.set('adults', props.adults);
		ls.set('children', props.children);
		ls.set('daysQuantity', state.daysQuantity)
		ls.set('roomName', props.roomName);
		ls.set('common', props.common);
		ls.set('quantity', state.quantity);
	}

	render() {
		const { checkIn, checkOut, adults, children, roomName, common, daysQuantity } = this.props;
		const { quantity } = this.state;
		console.log(daysQuantity)
    return (
			<div className="card">
					<h2>Reservation Summary</h2>
					<div className="clearfix">
							<h5 className="pull-left">{roomName}</h5>
							<div className="form-group pull-right">
									<select className="pull-right" id="rooms" onChange={this.handleQuantity}>
											<option value='1'>1</option>
											<option value='2'>2</option>
											<option value='3'>3</option>
											<option value='4'>4</option>
											<option value='5'>5</option>
											<option value='6'>6</option>
											<option value='7'>7</option>
											<option value='8'>8</option>
											<option value='9'>9</option>
									</select>
							</div>
					</div>

					<div className="clearfix">

							<div className="card-content">
									<p className="main">Check in</p>
									<p className="base">From 15.00h</p>
							</div>

							<div className="card-content">
									<p className="main">Check out</p>
									<p className="base">Before 12.00h</p>
							</div>

							<div className="card-content">
									<p className="main">Reservation date</p>
									<p className="base">From <strong><span id="checkin-summary">{checkIn}</span></strong> to <strong id="checkout-summary">{checkOut}</strong></p>
							</div>

							<div className="card-content">
									<p className="main">People</p>
									<p className="base" id="adults-summary">{adults} Adults</p>
									<p className="base" id="children-summary">{children} Children</p>
							</div>

							<div className="card-checkout clearfix">
									<div className="left pull-left">
											<p className="main">Total</p>
											<p className="base"><Link to="#">Price details ></Link></p>
									</div>
									<div className="right pull-right">
											<p className="main">€{common * parseInt(quantity) * parseInt(daysQuantity)}</p>
									</div>
							</div>

							<button type="submit" onClick={() => {this.handleSaveToLocalStorage(this.props, this.state)}} className="btn btn-primary btn-group-justified">Save</button>
					</div>
			</div> 
    );
  }
}

export default SidebarContent;