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
    const discount = (promoStr).slice(promoStr.length - 2, promoStr.length)
    if(promo.includes('promo_code')){
      const applyDiscount = parseInt(discount)/100;
      const priceWithDiscount = roomPrice - Math.floor(roomPrice * applyDiscount);
      this.setState({
        roomPrice: priceWithDiscount
      })
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