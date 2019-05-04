import React from 'react';
import ProductCard from '../productCard/ProductCard';
import Hero from '../hero/hero';

import axios from 'axios';


class Products extends React.Component {
    constructor(){
        super();
        this.state={
            products: []
        };
        //this.askForProducts = this.askForProducts.bind(this)
    }

    componentDidMount(){
        axios.get('http://localhost:4500/api/products')
                .then(products => {
                    this.setState({products: products.data.products})
                })
    }

    render(){
        const {products} = this.state
        if(products.length === 0){
            return(
                <div className="columns">
                    <div className="column">
                        <a class="button is-loading">Loading</a> 
                    </div>
                   
                </div>
                
            ) 
        }else{
            return(
                <div>
                    <Hero />
                    <div className="container content">
                        <div className="columns is-multiline">
                            
                            {products.map(product => {
                                return(
                                    <div className="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
                                        <ProductCard product={product} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    
                </div>

                
            
            )
        }
        
    }
}

export default Products;