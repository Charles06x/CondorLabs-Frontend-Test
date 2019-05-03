import React from 'react';
//import logo from './logo.svg';
import './App.css';
import './App.sass';
import '../src/components/products/Products';

import Auth from './services/auth'
import Products from '../src/components/products/Products';

const logo = 'https://bit.ly/2IVk4lW';  //Contains the logo image in png format.

const auth = new Auth();
//auth.login();     //Comment this line to disable login.

class NavBarMenu extends React.Component {
  render() {
    return(
      <div >
        <nav className="navbar is-light">
          <div className="container has-text-centered">
            <div className="navbar-brand">
              <img src="https://bit.ly/2J8mtsP" alt="CondorMarket Logo" width="100" height="32" className="is-1by1"/>
            </div>
            <div className="navbar-start navbar-padding-vertical">
              <div className="navbar-item">
                <input className="input is-rounded is-warning is-medium navbar-padding-vertical" type="text" placeholder="Search"/>
              </div>
              
            </div>

            <div className="navbar-end">
              <a href="#" className="navbar-item">Home</a>
              <a href="#" className="navbar-item">Categories</a>
              <a href="#" className="navbar-item">About</a>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

class App extends React.Component {
  render(){
    return (
      <div>
        <NavBarMenu />
        <div className="container content">
          <Products />
        </div>
      </div>
    
    )
  }
}

export default App;
