import React from 'react';
//import logo from './logo.svg';
import './App.css';
import '../src/components/products/Products';

import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Redirect from 'react-router-dom/Redirect'
import Link from 'react-router-dom/Link'

import Auth from './services/auth';
import NavBarMenu from '../src/components/navBarMenu/navBarMenu';
import Products from '../src/components/products/Products';
import ProductsByCategory from '../src/components/productsByCategory/productsByCategory';
import ProductsDetails from '../src/components/productsDetails/productsDetails';
import ProductsSearch from '../src/components/productsSearch/productsSearch';
import Cart from '../src/components/cart/cart'
import About from '../src/components/about/about';
import UploadProduct from '../src/components/uploadProduct/uploadProduct'


const logo = 'https://bit.ly/2IVk4lW';  //Contains the logo image in png format.

const auth = new Auth();
//auth.login();     //Comment this line to disable login.



class App extends React.Component {
  render(){
    return (
      <div>
      <Router>
        <NavBarMenu />        

        <div className="">
          
            <Switch>
                <Route exact path="/products" component={Products} />
                <Route exact path="/categories" component={ProductsByCategory} />
                <Route exact path="/:category/products" component={ProductsByCategory} />
                <Route exact path="/products/:id" component={ProductsDetails} />
                <Route exact path="/search/:keyword" component={ProductsSearch} />
                <Route exact path="/upload-product" component={UploadProduct}/>
                <Route exact path="/cart" component={Cart}/>
                <Route exact path="/about" component={About} />
                
                <Redirect from={'/'} to={'/products'} />
            </Switch>
          
        </div>
        
        
        </Router>
      </div>
    
    )
  }
}

export default App;
