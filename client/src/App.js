import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Items from './pages/Items'
import NoMatch from './pages/NoMatch'
import Nav from './pages/Nav'
import UserPage from './pages/User'
import About from './pages/About'
import Dotting from './pages/Dotting'
import API from './utils/API'

const App = () => {

  useEffect(() => {
    if (storeId === '') { 
      if (window.localStorage.getItem('storeName')) { 
        API.getStore(window.localStorage.getItem('storeName'))
           .then(res => {
             setStore(res.data[0].name)
             setStoreId(res.data[0]._id)
           })
           .catch(err => console.log(err))
      }
    }
  }, [])

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
          <Route exact path='/dotting' render={() => <Dotting />}/>
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
