import React, {Component} from 'react';
import './Form.css';
import motofeed from './img/motofeed.jpg';

class Form extends Component {
  render() {
    return(
      <div className="container">
        <section className="form">
          <div className="cont feel">
            <form className="feedback">
              <label className="gender">Enter your name:</label>
              <input type="text" placeholder="Enter your name" className="inputFeedback"/>

              <label className="gender">Enter your e-mail:</label>
              <input type="text" placeholder="Enter your e-mail" className="inputFeedback"/>

              <label className="gender">Choose your gender:</label>
              <select>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>

              <label className="gender">Write your question:</label>
              <input type="text" placeholder="Write your question" className="inputFeedback"/>

              <input type="submit" value="Send"/>
            </form>
          </div>

          <div className="cont textfeed">
            <p>Welcome to our club!</p>
            <div className="feedIMG"></div>
          </div>
        </section>
      </div>
    );
  }
}

export default Form;
