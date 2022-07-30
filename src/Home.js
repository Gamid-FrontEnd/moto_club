import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import Comments from './Comments.js';
import Form from './Form.js';
import FluObj from './FluObj.js';
import './Home.css';
import moto1 from './img/moto1.jpg';
import moto2 from './img/moto2.jpg';
import moto3 from './img/moto3.jpg';
import moto4 from './img/moto4.jpg';


class ListItem extends Component {
  render() {
    return(
      <div className="item"  id={this.props.is}>
        <div className="itemImg">
          <img alt="" src={this.props.sourceIMG}/>
        </div>
        <div className="itemText">
          <p>{this.props.description}</p>
        </div>
        <div className="buyList">
          <button className="itemBTN" disabled={this.props.disbtn}>More</button>
          <p className="sale">SALE</p>
          <p className="price">{this.props.price}</p>
        </div>
      </div>
    );
  }
}

class Home extends Component {
  render() {
    return(
      <div className="container">
        <FluObj/>
        <div className="catalog">
          <ul>
            <li><ListItem sourceIMG={moto1}
                description="good moto"
                price="2000$"/>
            </li>
            <li><ListItem sourceIMG={moto2}
                description="good moto! Wonderfool moto! I love it! I will buy it!"
                price="3000$"/>
            </li>
            <li><ListItem sourceIMG={moto3}
                description="good moto"
                price="1500$"/>
            </li>
            <li><ListItem sourceIMG={moto4}
                 description="good moto"
                 price="200$"
                 is='s'/>
            </li>
            <li><ListItem sourceIMG={moto4}
                 description="good moto"
                 price="out of sale"
                 is='n'
                 disbtn="disabled"/>
            </li>
            <li><ListItem sourceIMG={moto4}
                 description="good moto"
                 price="200$"/>
            </li>
            <li><ListItem sourceIMG={moto4}
                 description="good moto"
                 price="200$"/>
            </li>
            <li><ListItem sourceIMG={moto4}
                 description="good moto"
                 price="200$"/>
            </li>
          </ul>
        </div>
        <div className="learnmore"><button><NavLink className="learlink" to="/learnmore">Learn more...</NavLink></button></div>
        <Comments/>
        <Form/>
      </div>
    );
  }
}

export default Home;
