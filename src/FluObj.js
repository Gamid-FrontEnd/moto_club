import React, {Component} from 'react';
import './FluObj.css';
import logoMoto from './img/logo.jpg';

class FluObj extends Component {
  render() {
    return(
      <div className="container logoMoto">
          <img src={logoMoto} alt="moto_logo" className="objFly"/>
      </div>
    );
  }
}

export default FluObj;
