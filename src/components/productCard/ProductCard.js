import React from 'react';
import Link from 'react-router-dom/Link';

class ProductCard extends React.Component {

    
    render() {
         const {productName, productPrice, productImg} = this.props.product;
         const prod = this.props.product;
        
        console.log("Props name: ", prod)
        return(
            <div className="card has-shadow">
                <Link to={'/products/'+productName}>
                    <div className="card-image image is-2by1">
                        <figure>
                            <img className="cardImg" src={productImg} alt="image for product"/>
                        </figure>                    
                    </div>

                    <div className="card-content">
                        <div className="media-content">
                            <p className="title is-4 is-italic"> <a href="#" className="has-text-grey product-name">{productName}</a> </p>
                            <p className="subtitle is-6">$ {productPrice}</p>
                        </div>
                    </div>
                </Link>
                

                <footer className="card-footer">
                    <a href="#" className="card-footer-item">Buy</a>
                    <a href="#" className="card-footer-item cart">Add to cart</a>
                </footer>
            </div>
        )
    }

}

export default ProductCard