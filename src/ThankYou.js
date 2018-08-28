import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class ThankYou extends Component {
  render() {
    return (
      <div>
        ThankYou
        <Link to='/'><button>Place Another Order</button></Link>
      </div>
    );
  }
}

export default ThankYou;
