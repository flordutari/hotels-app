import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';

class RoomsList extends Component {
  render() {
    return (
      <div className="container rar-summary">
        <div className="row">
          <div className="col-md-8 main">
              <h2>Rooms & Rates</h2>
              <p className="subtitle">Plan your perfect stay at our hotel</p>
              <img src="images/cocos/wizard_1.png" width="480" className="wizard" alt="wizard"/>
          </div>
          <div className="col-md-4 sidebar-header">
            <Sidebar />
          </div>
        </div>

        <div className="row">
          <div className="col-md-8 main">
              
          </div>
        </div>
      </div>
    );
  }
}

export default RoomsList;