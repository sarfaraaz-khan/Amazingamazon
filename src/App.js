import React from 'react';
import Header from './Header';
import Home from './Home'
import Checkout from './Checkout';
import Login from './Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (<Router>
    <div className="app">


      <Switch>
        <Route path="/checkout">
        <Header/>
          <Checkout/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>

        {/* this shou ld be default Route */}
        <Route path="/">
          <Header/>
          <Home/>
         

        </Route> 
      </Switch>


    </div>
  </Router >)
}
export default App;