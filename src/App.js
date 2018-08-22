import React, { Component } from 'react'
import Crust from './Crust'
import Ingredients from './Ingredients'
import Review from './Review'
import ThankYou from './ThankYou'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-react">
          <Switch>
            <Route exact path="/" component={Crust}/>
            <Route path="/ingredients" component={Ingredients}/>
            <Route path="/review" component={Review}/>
            <Route path="/thankyou" component={ThankYou}/>



          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
