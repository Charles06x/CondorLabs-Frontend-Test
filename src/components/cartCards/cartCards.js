import React, {Component} from 'react';
import Link from 'react-router-dom/Link'

export default class CartCards extends Component{

    constructor(){
        super()
        this.removeFromCart = this.removeFromCart.bind(this)
    }
   
    removeFromCart(){
        const localCart = localStorage.getItem('cart');
          const cart = localCart ? JSON.parse(localCart) : [];
          
          const updatedCart = cart.filter( item => item._id !== this.props.prod._id)
          localStorage.setItem('cart', JSON.stringify(updatedCart))
      }
   
    render(){
        var {prod} = this.props
        if(prod){
            return(
                <div className="modal-card">
                    <div className="tile is-ancestor ">
                        <div className="tile is-parent is-2">
                            <img className="image is-96x96" src={prod.productImg} alt="image for product"/>
                            </div>
                        <div className="tile is-parent is-5 has-text-left">
                            <span className="has-text-weight-bold is-italic">{prod.productName}</span>
                            <hr className="navbar-divider"/>
                            {prod.productDescription}
                            </div>
                        <div className="tile is-parent is-centered is-2 is-vertical">
                            <div className="tile is-child has-text-centered"><h2 className="has-text-weight-light has-text-grey is-italic">$ {prod.productPrice}</h2> </div>
                            <label className="has-text-grey is-italic">Quantity</label>
                            <div className="tile is-child"><input type="number" className="input is-medium"/></div>
                            <div className="tile is-child is-centered"> <Link to="/"><button onClick={this.removeFromCart} className="button is-danger is-small">Remove from cart</button></Link></div>
                        </div>
                    </div>
                    <hr className="navbar-divider"/>
                </div>
            )
        }else{
            return(
                <div>Cart empty</div>
            )
        }
        
    }
}