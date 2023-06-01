import * as React from 'react' 
import Navbar from '../components/Navbar'
import { Route, Router, Switch } from 'react-router-dom'
import Home from '../components/Home'
import Contacts from '../components/Contacts'


const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Router>
            <Switch>
              <Route path='/' Component={Home} exact> <Home /> </Route>
              <Route path='/contacts' Component={Contacts} exact> <Contacts /> </Route>
            </Switch>
        </Router>
      </Router>
    </>

  )
}

export default App
