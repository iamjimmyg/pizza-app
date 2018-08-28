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

    //let total = 2
    let ingredientsUsed = []
    for(var k in this.state){
      let obj={}
      obj.ingredient = k
      obj.picked = this.state[k]
      ingredientsUsed.push(obj)
    }
    console.log(ingredientsUsed)



    return (
      <div id='ingredients' className='container'>

        <h1>Ingredients</h1>

        <div className='row'>
          {ingredients}
        </div>

        <Table
          crust={this.props.demoData.crust}
          ingredientsUsed={ingredientsUsed}
          //total={total}
        />

        <Link to='/review'><button onClick={()=>this.props.updateIngredients(this.state, this.props.demoData.crust)}>Next</button></Link>
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
