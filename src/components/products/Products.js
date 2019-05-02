import React from 'react'

class Products extends React.Component {
    constructor(){
        super();
        this.state={
            products:[]
        }
    }

    askForProducts(){
        fetch('http://localhost:4500/api/products')
            .then(response => response.json())
            .then(products =>{
                console.log(products)
                products.results.forEach(product => {
                    let data = {
                        name: product.productName,
                        description: product.productDescription,
                        price: product.productPrice,
                        seller: product.productSeller,
                        category: product.productCategory,
                        img: product.productImg 
                    }
                    this.setState({ products: this.state.products.concat([data]) })
                })
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