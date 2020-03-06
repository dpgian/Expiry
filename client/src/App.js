import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Items from './pages/Items'
import Details from './pages/Details'
import NoMatch from './pages/NoMatch';
import Nav from './pages/Nav'
import UserPage from './pages/User/User'

const App = () => {

  let [store, setStore] = React.useState('')

  return(
    <Router>
      <div>
        <Nav store={store} setStore={setStore}></Nav>
        <Switch>
          <Route exact path='/items' component={Items} />
          <Route exact path='/' render={() => <Items setStoreName={setStore}/>}/>
          <Route exact path='/user' render={() => <UserPage setStore={setStore}/>} />
          <Route exact path='/items/:id' component={Details} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
