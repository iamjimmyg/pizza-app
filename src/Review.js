import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class Review extends Component {
  render() {
    return (
      <div>
        Review
        <Link to='/thankyou'><button>Next</button></Link>
      </div>
    );
  }
}

export default Review;
