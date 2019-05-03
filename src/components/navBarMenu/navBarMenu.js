import React, {Component} from 'react';

import Link from 'react-router-dom/Link'

export default class NavBarMenu extends React.Component {
    render() {
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
                    <Link className="navbar-item">
                      Category 1
                    </Link>
                    <Link className="navbar-item">
                      Category 2
                    </Link>
                    <Link className="navbar-item">
                      Category 3
                    </Link>
                    <Link className="navbar-item">
                      Category 4
                    </Link>
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