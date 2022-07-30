import React, {Component} from 'react';
import './Features.css';

class Features extends Component {
  constructor (props) {
    super(props);

    this.state = {
      coltheme: 'light',
      verify: true
    };
  }

  change = (e) => {
    this.setState ({
      verify: !this.state.verify
    });
    console.log(this.state.verify);

    if (this.state.verify) {
      this.setState ({
        coltheme: 'light'
      });
    } else {
      this.setState ({
        coltheme: 'dark'
      });
    }
    console.log(this.state.coltheme);

    e.preventDefault();
  }

  render() {
    let theme = this.state.coltheme;
    return(
      <div className='container'>
        <div id="box" className={theme}></div>
        <button onClick={this.change}>Click</button>
      </div>
    );
  }
}

export default Features;
