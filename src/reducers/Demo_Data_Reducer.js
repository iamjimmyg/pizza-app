export default function(state = {
  dummyData: {
    crust: null,
    ingredients: null,
  }
}, action) {
  if(action.type === 'UPDATE_CRUST'){
    //const stateCopy = Object.assign({}, state, )
    //console.log(action.payload)
    return Object.assign({}, state, {
      dummyData: {
        crust: action.payload,
      }
    })

  }
  if(action.type === 'UPDATE_INGREDIENTS'){
    //console.log(action.payload)
    return Object.assign({}, state, {
      dummyData: {
        ingredients: action.payload[0],
        crust: action.payload[1]
      }
    })

  }

  return state;
}
