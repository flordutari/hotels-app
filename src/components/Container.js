import React, { Component } from 'react';
import RoomsList from './RoomsList';
import Sidebar from './Sidebar';

class Container extends Component {

  render() {
    return (
      <div className="container rar-summary">

        <div className="row">
          <div className="col-md-8 main">
              <h2>Rooms & Rates</h2>
              <p className="subtitle">Plan your perfect stay at our hotel</p>
              <img src="images/cocos/wizard_1.png" width="480" className="wizard" alt="wizard"/>
          </div>
          <div className="col-md-4 sidebar-header"></div>
        </div>

        <div className="row">
          <div className="col-md-8 main">
            <RoomsList />
          </div>
          <div className="col-md-4 sidebar">
            <Sidebar />
          </div>
        </div>

      </div>
    );
  }
}

export default Container;
