import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class Crust extends Component {
  render() {
    return (
      <div id='crust'>
        Crust
        <Link to='/ingredients'><button>Next</button></Link>
      </div>
    );
  }
}

export default Crust;
