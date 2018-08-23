import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class Ingredients extends Component {
  render() {
    return (
      <div>
        Ingredients
        <Link to='/review'><button>Next</button></Link>
      </div>
    );
  }
}

export default Ingredients;
