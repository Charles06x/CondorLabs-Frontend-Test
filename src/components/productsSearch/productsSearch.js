import React, {Component} from 'react';
import Axios from 'axios';

import ProductCard from '../productCard/ProductCard';

export default class ProductsSearch extends Component{
    constructor(){
        super()
        this.state={
            kword: String,
            products: []
        }
        
    }

    componentWillReceiveProps(nextProps) {

        console.log("np ", nextProps.match.params.keyword)
        this.setState({kword: nextProps.match.params.keyword})
        Axios('http://localhost:4500/api/products')
        .then(products => {
            var filteredProds = products.data.products.filter(product => {
                const productNameLowerCase = product.productName.toLowerCase();
                const kwordLowerCase = this.state.kword.toLowerCase();
                return productNameLowerCase.includes(kwordLowerCase)
            })
            this.setState({products: filteredProds})
        })
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        var changeState = this.state.products !== nextState.product
        var changeProps = this.props.match.params.keyword !== nextProps.match.params.keyword
        return changeProps || changeState
    }

    

    render(){
        var {products} = this.state
        return(
            <div className="container content">
                <p className="is-italic">Showing results for "<span className="is-italic has-text-grey-light">{this.state.kword}</span>"</p>
                {
                    products.map(product => {
                    return(  <div className="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
                            <ProductCard product={product} />
                        </div>)
                    })
                }
            </div>
        )
    }
}