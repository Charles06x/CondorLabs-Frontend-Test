import React from 'react';

class ProductCard extends React.Component {

    
    render() {
         const {productName, productPrice, productCategory, productDescription, productSeller, productImg} = this.props.product;
        
        console.log("Props name: ", productName)
        return(
            <div className="card has-shadow">
                <a href="#">
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
                </a>
                

                <footer className="card-footer">
                    <a href="#" className="card-footer-item">Buy</a>
                    <a href="#" className="card-footer-item cart">Add to cart</a>
                </footer>
            </div>
        )
    }

}

export default ProductCard