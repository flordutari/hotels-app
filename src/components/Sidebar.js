import React, { Component } from 'react';
import SidebarContent from './SidebarContent';

class Sidebar extends Component {

	render() {
		const { checkIn, checkOut, adults, children, roomName, common, discount, daysQuantity } = this.props;
		return (
			<SidebarContent 
				checkIn={checkIn}
				checkOut={checkOut}
				adults={adults}
				children={children}
				roomName={roomName}
				common={common}
				discount={discount}
				daysQuantity={daysQuantity}
			/>
		)
  }
}

export default Sidebar;