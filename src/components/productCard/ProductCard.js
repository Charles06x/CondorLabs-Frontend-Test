import React from 'react';
import Link from 'react-router-dom/Link';

class ProductCard extends React.Component {
    constructor(){
        super();
        this.addToCart = this.addToCart.bind(this);
        this.existInCart = this.existInCart.bind(this)
    }

    addToCart(newItem) {   //Shopping cart will be manage in local storage.
        const localCart = localStorage.getItem('cart');
        const cart = localCart ? JSON.parse(localCart) : [];
        
        const inCart = cart.filter( item => item._id === this.props.product._id) //Store the element if found.
        if(inCart.length ===0){
            const updatedCart = [...cart, this.props.product]
            localStorage.setItem('cart', JSON.stringify(updatedCart))
        }
        this.existInCart()

    }

    existInCart(){
        const localCart = localStorage.getItem('cart');
        const cart = localCart ? JSON.parse(localCart) : [];
        
        const inCart = cart.filter( item => item._id === this.props.product._id) //Store the element if found.
        if(inCart.length === 0){
            return false
        }else{
            return true
        }
    }
    
    render() {
         const {productName, productPrice, productImg, _id} = this.props.product;
         const prod = this.props.product;
        return(
            
            <div className="card">
                <Link to={'/products/'+_id} product={prod}>
                    <div className="card-image image is-2by1">
                        <figure>
                            <img className="cardImg" src={productImg} alt="image for product"/>
                        </figure>                    
                    </div>

                    <div className="card-content">
                        <div className="media-content">
                            <p className="title is-4 is-italic"> <a className="has-text-grey product-name">{productName}</a> </p>
                            <p className="subtitle is-6">$ {productPrice}</p>
                        </div>
                    </div>
                </Link>
                

                <footer className="card-footer">
                    <a className="card-footer-item">Buy</a>
                    {
                        this.existInCart ?  <a onClick={this.addToCart} className="card-footer-item cart">Add to cart</a> :  <a onClick={this.addToCart} className="card-footer-item cart">Remove from cart</a>
                    }
                   
                </footer>
            </div>
        )
    }

}

export default ProductCard