import React, { Component } from 'react';
import RoomCard from './RoomCard';
import rooms from '../data/rooms.json';

class RoomsList extends Component {

  state = {
    rooms
  }

  render() {
    return (
      this.state.rooms.map((room, index) => {
        return (
          <RoomCard 
            key={`id${index}`}
            name={room.name}
            image={room.image}
            description={room.description}
            size={room.size}
            beds={room.beds}
            people={room.people}
            price={room.price}
          />
        )
      })
    );
  }
}

export default RoomsList;