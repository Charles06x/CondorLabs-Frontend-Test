import React from 'react';
//import logo from './logo.svg';
import './App.css';
import '../src/components/products/Products';

import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Redirect from 'react-router-dom/Redirect'
import Link from 'react-router-dom/Link'

import Auth from './services/auth'
import Products from '../src/components/products/Products';
import ProductsByCategory from '../src/components/productsByCategory/productsByCategory';
import ProductsDetails from '../src/components/productsDetails/productsDetails';

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
              <Link to={'/products'} className="navbar-item">Home</Link>
              <Link to={'/products-details'} className="navbar-item">Categories</Link>
              <Link to={'/products'} className="navbar-item">About</Link>
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
      <Router>
        <NavBarMenu />
        <div className="container content">
          
            <Switch>
                <Route exact path="/products" component={Products} />
                <Route exact path="/products-details" component={ProductsDetails} />
                <Route exact path="/categories/:category/products" component={ProductsByCategory} />
                
                <Redirect from={'/'} to={'/products'} />
            </Switch>
          
        </div>
        
        
        </Router>
      </div>
    
    )
  }
}

export default App;
