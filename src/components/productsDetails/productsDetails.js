import React, {Component} from 'react';
import Link from 'react-router-dom/Link';
import Axios from 'axios';

export default class ProductsDetails extends Component {
    constructor(){
        super()
        this.state={
            product: Object,
            category: Object
        }
        this.addToCart = this.addToCart.bind(this)
    }

    componentDidMount(){
        console.log("jjj ", this.props)
        Axios(process.env.REACT_APP_API_BASE_URL+'products/'+this.props.match.params.id)
            .then((product) => {
                console.log("product ", product)
                this.setState({product: product.data.product})
            })
    }

    addToCart(newItem) {   //Shopping cart will be manage in local storage.
        const localCart = localStorage.getItem('cart');
        const cart = localCart ? JSON.parse(localCart) : [];
        
        const inCart = cart.filter( item => item._id === this.state.product._id) //Store the element if found.
        if(inCart.length ===0){
            const updatedCart = [...cart, this.state.product]
            localStorage.setItem('cart', JSON.stringify(updatedCart))
        }

    }

    render() {
        const prod = this.state.product
        const cat = this.state.category
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
                            <div className="column is-full">
                                <Link className="is-italic">{prod.productCategory}</Link>
                            </div>
                            

                            <div className="column is-half">
                                    <button className="button is-info is-fullwidth">Buy</button>
                            </div>
                            <div className="column is-half">
                                <Link to="/cart"><button onClick={this.addToCart} className="button is-success is-outlined is-fullwidth">Add to cart</button></Link>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
    }
}