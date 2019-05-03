import React from 'react';
import ProductCard from '../productCard/ProductCard';

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
        //fetch('https://reqres.in/api/users')
            .then(response => response.json())
            .then((products) => {
                this.setState({products: products.products})
            })
    }

    render(){
        const {products} = this.state
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

export default Products;