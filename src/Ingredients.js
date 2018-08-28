import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import Table from './Table'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { updateIngredients } from './actions/index'

const fetchIngredientTypes = function() {
  return [
    {
      id: 1,
      name: 'mushrooms',
    },
    {
      id: 2,
      name: 'pepperonni',
    },
    {
      id: 3,
      name: 'peppers',
    },
    {
      id: 4,
      name: 'onions',
    },
    {
      id: 5,
      name: 'sausage',
    },
  ]
}
const chooseIngredients = fetchIngredientTypes()

class Ingredients extends Component {
  constructor(props){
    super(props)
    const mapIngredients = chooseIngredients.reduce((a, b) => {
      a[b.name] = false
      return a
    }, {})
    this.state = mapIngredients

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    let item = event.target.value
    this.setState({ [item]: !this.state[item] })
  }

  render() {
    let ingredients = chooseIngredients.map((item, i) => {
      item = item.name
      return <div className='col'>
        <input type='radio' value={item} key={item + '+' + i}
          checked={this.state[item]}
          onClick={this.handleChange}>
        </input>
        <p>{item}</p>
      </div>
    })

    let ingredientsUsed = []
    for(var k in this.state){
      let obj={}
      obj.ingredient = k
      obj.picked = this.state[k]
      ingredientsUsed.push(obj)
    }

    return (
      <div id='ingredients' className='container'>
        <div className='content'>
          <h1>Ingredients</h1>


          <div className='row'>
            <div className='col-6'>
              {ingredients}
            </div>
            <div className='col-6 float-left'>

              <Table
                crust={this.props.demoData.crust}
                ingredientsUsed={ingredientsUsed}
              />
            </div>
          </div>
          <Link to='/review'><button className='btn btn-primary' onClick={()=>this.props.updateIngredients(this.state, this.props.demoData.crust)}>Next</button></Link>
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
    updateIngredients: updateIngredients,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Ingredients);
