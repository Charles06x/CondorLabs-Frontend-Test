import React from 'react';
import ProductCard from '../productCard/ProductCard';

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
        fetch('http://localhost:4500/api/products')
            .then(response => response.json())
            .then((products) => {
                this.setState({products: products.products})
            })
    }

    render(){
        const {products} = this.state
        if(products.length === 0){
            return(
                <div className="columns is-vcentered">
                    <div className="column is-half">
                        <a class="button is-loading">Loading</a> 
                    </div>
                   
                </div>
                
            ) 
        }else{
            return(
                <div className="columns is-multiline">
                    {products.map(product => {
                        return(
                            <div className="column is-one-quarter">
                                <ProductCard product={product} />
                            </div>
                        )
                    })}
                </div>
            
            )
        }
        
    }
}

export default Products;