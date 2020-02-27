import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Items from './pages/Items'
import Details from './pages/Details'
import NoMatch from './pages/NoMatch';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={Items} />
        <Route exact path='/items' component={Items} />
        <Route exact path='/items/:id' component={Details} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
)

export default App;
