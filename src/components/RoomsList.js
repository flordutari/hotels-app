import React, { Component } from 'react';
import RoomCard from './RoomCard';
import rooms from '../data/rooms.json';

class RoomsList extends Component {

  state = {
    rooms,
  }

  render() {
    const { handleCardClick, promo } = this.props;
    return (
      this.state.rooms.map((room, index) => {
        return (
          <RoomCard 
            key={`id${index}`}
            id={room.id}
            name={room.name}
            image={room.image}
            description={room.description}
            size={room.size}
            beds={room.beds}
            people={room.people}
            roomPrice={room.roomPrice}
            handleCardClick={handleCardClick}
            promo={promo}
          />
        )
      })
    );
  }
}

export default RoomsList;