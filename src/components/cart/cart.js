import React, {Component} from 'react';
import Link from 'react-router-dom/Link'

import CartCards from '../cartCards/cartCards'

export default class Cart extends Component {
    constructor(){
        super()
        this.state = {
            prods: []
        }
        this.update = this.update.bind(this)
    }
    componentDidMount(){
        const localCart = localStorage.getItem('cart');
        const cart = localCart ? JSON.parse(localCart) : [];
        console.log(cart.lenght)
        this.setState({prods: cart});
    }

    update(){
        const current = this.state.prods
        const localCart = localStorage.getItem('cart');
        const cart = localCart ? JSON.parse(localCart) : [];
        if (cart !== current) {
            return true            
        }else{
            return false
        }
    }

 
    componentDidUpdate(){
        return this.update
    }

    render(){
        const {prods} = this.state
        console.log((prods.length))
        if (prods.length !== 0){
            return(
            <div className="container content">
                {
                   prods.map(product => {
                       return(
                            <CartCards update={this.update} prod={product}/>
                       )
                   })
               }
            </div>
        )}else{
            return(
                <div className="container content has-text-centered">
                    <h1>There are no items in your cart.</h1>
                    <h3><Link to="/">Start shopping now.</Link></h3>
                </div>
            )
        }
        
    }
}