import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Items from './pages/Items'
import NoMatch from './pages/NoMatch'
import Nav from './pages/Nav'
import UserPage from './pages/User'
import About from './pages/About'

const App = () => {

  let [store, setStore] = React.useState('')
  let [storeId, setStoreId] = React.useState('')

  return(
    <Router>
      <div>
        <Nav store={store} setStore={setStore}></Nav>
        <Switch>
          <Route exact path='/' render={() => <About />}/>
          <Route exact path='/item' render={() => <Items storeId={storeId}/>} />
          <Route exact path='/user' render={() => <UserPage setStore={setStore} setStoreId={setStoreId}/>} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
