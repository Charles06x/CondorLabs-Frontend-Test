import React from 'react';

class ProductCard extends React.Component {

    constructor(){
        super();
        this.state = {
        name: "iPhone 7",
        price: 100,
        category: "Cell phones",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        seller: "Me",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Simple_cardboard_box.svg/1280px-Simple_cardboard_box.svg.png"

    }
    }
    

    
    render() {
         const {productName, productPrice, productCategory, productDescription, productSeller, productImg} = this.props.product;
        
        console.log("Props name: ", productName)
        return(
            <div className="card has-shadow">
                <a href="#">
                    <div className="card-image image is-1by1">
                        <figure>
                            <img src={productImg} alt="image for product" width="128px" height="128px"/>
                        </figure>                    
                    </div>

                    <div className="card-content">
                        <div className="media-content">
                            <p className="title is-4 is-italic"> <a href="#" className="has-text-warning">{productName}</a> </p>
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