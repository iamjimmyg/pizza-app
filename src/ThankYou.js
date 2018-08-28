import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class ThankYou extends Component {
  render() {
    return (
      <div id='thankyou'>
        <div className='content'>
          <h1>
            ThankYou
          </h1>
          <Link to='/'><button className='btn btn-primary'>Place Another Order</button></Link>
        </div>

      </div>
    );
  }
}

export default ThankYou;
