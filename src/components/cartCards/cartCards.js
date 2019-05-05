import React, {Component} from 'react';

export default class CartCards extends Component{
   
   
    render(){
        var {prod} = this.props
        if(prod){
            return(
                <div className="container content">
                    <div className="tile is-ancestor">
                        <div className="tile is-parent is-2">
                            <img className="image is-128x128" src={prod.productImg} alt="image for product"/>
                            </div>
                        <div className="tile is-parent">{prod.productDescription}</div>
                        <div className="tile is-parent is-centered is-1 is-vertical">
                            <div className="tile is-child has-text-centered"><h2 className="has-text-weight-light has-text-grey is-italic">$ {prod.productPrice}</h2> </div>
                            <div className="tile is-child"><input type="number" className="input"/></div>
                            <div className="tile is-child is-centered"><button className="button is-danger">Remove from cart</button></div>
                        </div>
                    </div>
                </div>
            )
        }else{
            return(
                <div>Cart empty</div>
            )
        }
        
    }
}