import React, { Component } from 'react';

class RoomCard extends Component {

  render() {
    const { image, name, description, size, beds, people, price: { common }, handleCardClick } = this.props;
    return (
      <div className="card clearfix pointer" onClick={(e) => {handleCardClick(e, this.props)}}>
        <div className="room-image">
            <img src={image} width="100%" alt={name}/>
        </div>

        <div className="room-content">
          <h5 className="form-group">{name}</h5>
          <p className="form-group">{description}</p>

          <p className="form-group">Size: {size}</p>

          <div className="room-info">
            <div className="item">
                <span className="inline-block">
                    <img src="images/icons/double-bed.svg" width="40" alt={name}/>
                </span>
                <div>Beds: {beds}</div>
            </div>
            <div className="item">People: {people}</div>
            <div className="item price text-right">
              €{common}
              {/* <span className="line-through">{common}</span>
              {discount} */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RoomCard;