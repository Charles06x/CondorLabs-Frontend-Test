import React, {Component} from 'react';

import Link from 'react-router-dom/Link'
import Axios from 'axios';

import CartCards from '../cartCards/cartCards'

export default class NavBarMenu extends Component {

  constructor(){
    super();
    this.state={
        categories: [],
        keyword: String,
        prods: []
      };    
      this.handleChange = this.handleChange.bind(this)
}

  componentDidMount(){
    Axios(process.env.REACT_APP_API_BASE_URL+'categories')
      .then(response => {
        this.setState({categories: response.data.categories})
    })


    const localCart = localStorage.getItem('cart');
    const cart = localCart ? JSON.parse(localCart) : [];
    this.setState({prods: cart});
  }


  handleChange(e){
    this.setState({keyword: e.target.value})
  }

 

    render() {
      const {categories, prods} = this.state
      return(
        <div >
          <nav className="navbar is-light">
            <div className="container has-text-centered">
              <div className="navbar-brand">
                <Link to={'/products'}><img src="https://bit. ly/2J8mtsP" alt="CondorMarket Logo" className="is-1by1 is-96x96"/></Link>
                
              </div>
              <div className="navbar-start">
                <div className="navbar-item">
                  <input onChange={this.handleChange} className="input is-rounded is-warning is-medium navbar-padding-vertical" type="text" placeholder="Search"/>
                  <Link to={"/search/"+this.state.keyword}><button className="button is-warning is-rounded is-medium"> Search </button></Link>
                </div>
                
              </div>
  
              <div className="navbar-end">
              <Link className="navbar-item is-primary" to="/cart" >
                <div className="button is-primary is-rounded has-text-weight-bold">Cart</div>
              </Link>

                <Link to={'/products'} className="navbar-item">Home</Link>
  
                <div className="navbar-item has-dropdown is-hoverable">
                  <Link className="navbar-link">
                    Categories
                  </Link>
  
                  <div className="navbar-dropdown">

                    {categories.map(category => {
                      return(
                        <Link onClick={this.updateState} className="navbar-item" to={"/"+category+"/products"}>
                          {category}
                        </Link>
                      )
                    })}

                    
                  </div>
                </div>
                <Link to={'/upload-product'} className="navbar-item">Upload Products</Link>
                <Link to={'/about'} className="navbar-item">About</Link>
              </div>
            </div>
          </nav>
        </div>
      )
    }
  }