import React, {Component} from 'react'

export default class ProductsDetails extends Component {
    constructor(){
        super()
        this.state={
            product: Object
        }
    }

    componentDidMount(){
        fetch('http://localhost:4500/api/products/'+this.props.match.params.productName)
            .then(response => response.json())
            .then((product) => {
                this.setState({product: product.product[0]})
            })
    }

    render() {
        const prod = this.state.product
        console.log("nanana",prod)
        return (
            <div className="container content">
                <div className="columns is-vcentered">
                    <div className="column is-half">
                        <figure>
                            <img className="image" src={prod.productImg} alt="image for product"/>
                        </figure> 
                    </div>
                    <div className="column is-1">
                    </div>
                    <div className="column is-3">
                        <div className="columns is-multiline is-vcentered is-gapless">
                            <div className="column is-full">
                                <h1 >
                                    {prod.productName}
                                </h1>
                            </div>
                            <div className="column is-full">
                                <h2 className="has-text-weight-light has-text-grey">$ {prod.productPrice}</h2>
                            </div>
                            <div className="column is-full">
                                <h2 className="has-text-weight-light">Description</h2>
                                <p className="has-text-weight-light description"> {prod.productDescription} </p>
                            </div>

                            <div className="column is-full">
                            <p className="is-italic"> There are <span className="has-text-weight-semibold"> {prod.productQuantity} left.</span> </p>
                            </div>


                            <div className="column is-half">
                                    <button className="button is-info is-fullwidth">Buy</button>
                            </div>
                            <div className="column is-half">
                                <button className="button is-danger is-outlined is-fullwidth">Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
    }
}