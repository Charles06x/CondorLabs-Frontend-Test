import React from 'react'

class Products extends React.Component {
    constructor(){
        super();
        this.state={
            products: []
        };
        this.askForProducts = this.askForProducts.bind(this)
    }

    askForProducts(){
        var listOfProducts = []
        fetch('http://localhost:4500/api/products')
            .then(response => response.json())
            .then((products) => {
                this.setState({products: products})
            })
    }

    render(){
        return(
            <div>
                <button onClick={this.askForProducts} className="button is-primary">Pedir datos</button>
                {this.state.products}
            </div>
        )
    }
}

export default Products;