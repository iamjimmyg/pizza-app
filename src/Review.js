import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import Table from './Table'

class Review extends Component {

  render() {
    let ingredientsUsed = []
    for(var k in this.props.demoData.ingredients){
      let obj={}
      obj.ingredient = k
      obj.picked =  this.props.demoData.ingredients[k]
      ingredientsUsed.push(obj)
    }

    return (
      <div id='review'>
        <div className='content'>
          <h1>Review</h1>
          <div>
            <Table
              crust={this.props.demoData.crust}
              ingredientsUsed={ingredientsUsed}
            />
          </div>
          <Link to='/thankyou'><button className='btn btn-primary'>Order</button></Link>
        </div>

      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    demoData: state.demoData.dummyData
  }
}

export default connect(mapStateToProps)(Review);
