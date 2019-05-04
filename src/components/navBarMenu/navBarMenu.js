import React, {Component} from 'react';

import Link from 'react-router-dom/Link'
import Axios from 'axios';

export default class NavBarMenu extends React.Component {

  constructor(){
    super();
    this.state={
        categories: []
    };
    
}

  componentDidMount(){
    Axios('http://localhost:4500/api/categories')
      .then(response => {
        console.log("kkk", response.data.categories);
        this.setState({categories: response.data.categories})
    })
  }

    render() {
      const {categories} = this.state
      return(
        <div >
          <nav className="navbar is-light">
            <div className="container has-text-centered">
              <div className="navbar-brand">
                <img src="https://bit.ly/2J8mtsP" alt="CondorMarket Logo" className="is-1by1 is-96x96"/>
              </div>
              <div className="navbar-start">
                <div className="navbar-item">
                  <input className="input is-rounded is-warning is-medium navbar-padding-vertical" type="text" placeholder="Search"/>
                </div>
                
              </div>
  
              <div className="navbar-end">
                <Link className="navbar-item" to={'/cart'}>Cart</Link>
                <Link to={'/products'} className="navbar-item">Home</Link>
  
                <div className="navbar-item has-dropdown is-hoverable">
                  <Link className="navbar-link" to={'/categories'}>
                    Categories
                  </Link>
  
                  <div className="navbar-dropdown">

                    {categories.map(category => {
                      return(
                        <Link className="navbar-item" to={"/"+category+""}>
                          {category}
                        </Link>
                      )
                    })}

                    
                  </div>
                </div>
  
                <Link to={'/about'} className="navbar-item">About</Link>
              </div>
            </div>
          </nav>
        </div>
      )
    }
  }