import React, { Component } from 'react';

class RoomCard extends Component {

  state = {
    roomPrice: ''
  }

  componentDidMount = () => {
    this.setState({
      roomPrice: this.props.roomPrice
    })
    this.checkDiscount();
  }

  checkDiscount = () => {
    const { promo, roomPrice } = this.props;
    const promoStr = promo.toString();
    const discount = parseInt((promoStr).slice(promoStr.length - 2, promoStr.length));
    if(promo.includes('promo_code') && discount > 0 && discount < 99) {
      const priceWithDiscount = roomPrice - Math.floor(roomPrice * discount / 100);
      this.setState({
        roomPrice: priceWithDiscount
      })
    } else if (promo.length > 1 && !(promo.includes('promo_code'))){
      this.props.push('/error')
    }
  }

  render() {
    const { image, name, description, size, beds, people, handleCardClick } = this.props;
    const { roomPrice } = this.state;
    return (
      <div className="card clearfix pointer" onClick={(e) => {handleCardClick(e, this.props, roomPrice)}}>
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
            <div className="item price text-right">€{roomPrice}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default RoomCard;