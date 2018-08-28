import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { updateCrust } from './actions/index'

var fetchDoughTypes = function() {
  return [
    {
      id: 1,
      name: 'Thin',
      description: 'Thin and crusty pizza dough',
    },
    {
      id: 2,
      name: 'Thick',
      description: 'Thick and soft pizza dough',
    },
  ]
}

class Crust extends Component {
  constructor(props){
    super(props)
    this.state = {
      crust: null,
    }
    this.handleCrust = this.handleCrust.bind(this)
  }

  handleCrust(event){
    this.setState({crust: event.target.value})
  }

  render() {
    const crustOptions = fetchDoughTypes()
    let selectOptions = crustOptions.map((item, i) => {
      return <option value={item.name} key={`${item.name}-${i}`}>{`${item.name} Crust`}</option>
    })
    return (
      <div id='crust'>
        <div className='content'>
          <h1>Please Select Crust</h1>
          <select onChange={this.handleCrust} className="btn select">
            <option value=''>Select Crust</option>
            {selectOptions}
          </select>
          <Link to='/ingredients'>
            <button className='btn btn-primary' onClick={()=>this.props.updateCrust(this.state.crust)} disabled={this.state.crust == null ? true: false}>Next</button>
          </Link>
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

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    updateCrust: updateCrust,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Crust);
