import { combineReducers } from 'redux'

import DemoData from './Demo_Data_Reducer'

const rootReducer = combineReducers({
  demoData: DemoData,
});

export default rootReducer;
