import React, {Component} from 'react'

import Link from 'react-router-dom/Link'
import Axios from 'axios';

import ProductCard from '../productCard/ProductCard';

export default class ProductByCategory extends Component{

    constructor(){
        super();
        this.state={
            categories: [],
            products: [],
            productsToBeShown: []

        };
        this.updateState = this.updateState.bind(this)
    }

    componentDidMount(){    //When first mounted the component, shows all products.
        Axios('http://localhost:4500/api/categories')
        .then(response => {
          this.setState({categories: response.data.categories})
        })
        if(!this.props.match.params){
            Axios(process.env.REACT_APP_API_BASE_URL+'products')
                .then(products => {
                    this.setState({products: products.data.product, productsToBeShown: products.data.product})
                })
        }else{
            Axios(process.env.REACT_APP_API_BASE_URL+this.props.match.params.category.split(' ').join('%20')+'/products')
                .then(products => {
                    this.setState({products: products.data.product, productsToBeShown: products.data.product})
                })
        }
    }

    updateState(){
        Axios(process.env.REACT_APP_API_BASE_URL+this.props.match.params.category.split(' ').join('%20')+'/products')
                .then(products => {
                    this.setState({productsToBeShown: products.data.product})
                })
    }

    render() {
        const {categories, productsToBeShown, products} = this.state
        return(
            <div className="container content">
                <nav class="breadcrumb" aria-label="breadcrumbs">
                    <ul>
                       {categories.slice(0,10).map(category => {
                           return(
                               <li>
                                   <Link onClick={this.updateState} to={"/"+category+"/products"}>{category}</Link>
                               </li>                               
                           )
                       })}                        
                    </ul>
                </nav>
                <div>
                    {productsToBeShown.map(product => {
                        return(
                            <div className="columns">
                                <div className="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
                                    <ProductCard product={product} />
                                </div>
                            </div>
                            
                        )
                    })}
                </div>
            </div>
        )
    }
    
}