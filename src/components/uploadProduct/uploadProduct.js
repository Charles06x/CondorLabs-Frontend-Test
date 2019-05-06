import React, {Component} from 'react'

import Axios from 'axios';

export default class UploadProduct extends Component {
    constructor(){
        super();
        this.state={
            categories: [],
            imgUrl: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount(){
        Axios(process.env.REACT_APP_API_BASE_URL+'categories')
          .then(response => {
            this.setState({categories: response.data.categories})
        })
        this.submitProduct = this.submitProduct.bind(this)
      }


    handleChange(e){
        var img = (e.target.files[0])
        console.log(e.target.files[0])
        var bodyFormData = new FormData();
        bodyFormData.append('file', img)
        bodyFormData.set('upload_preset', 'condor-products')
        console.log("bbb", bodyFormData)
        Axios({
            method: 'post',
            url: 'https://api.cloudinary.com/v1_1/condormarket/image/upload',
            data: bodyFormData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(response => {
            console.log("res: ",response)
            this.setState({imgUrl: response.data.secure_url})
            console.log("st ", this.state.imgUrl)
        })
        .catch(response => {
            console.log("res: ",response)
        })
        
    }

    submitProduct(){
        var bodyData = new FormData();
        console.log(document.getElementById('prodCategory').value)
        console.log(document.getElementById('prodName').value)

        bodyData.append("productName", document.getElementById('prodName').value);
        bodyData.append("productPrice", document.getElementById('prodPrice').value);
        bodyData.append("productSeller", document.getElementById('prodSeller').value);
        bodyData.append("productDescription", document.getElementById('prodDescription').value);
        bodyData.append("productCategory", document.getElementById('prodCategory').value);
        bodyData.append("productImg", this.state.imgUrl);

        console.log(bodyData)
        
        Axios({
            method: 'post',
            url: process.env.REACT_APP_API_BASE_URL+'products',
            data: bodyData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(response => {
            console.log(response);

        })
        .catch(response => {
            console.log(response);
        })
    }

    render(){

        const {categories} = this.state
        
        return(

            <div className="container content">
                <div className="columns">
                    <div className="column is-6">
                        <div className="section">
                            <div className="field">
                                <label className="label">Name</label>
                                <div className="control">
                                    <input id="prodName" className="input" type="text" placeholder="The name of your product."/>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Price</label>
                                <div className="control">
                                    <input id="prodPrice" className="input" type="number" placeholder="E.g. 250"/>
                                </div>
                            </div>

                            <div className="file is-warning has-text-white-bis">
                                <label className="file-label">
                                <input className="file-input" type="file" name="resume" accept="image/*" onChange={this.handleChange}/>
                                <span className="file-cta">
                                    <span className="file-label has-text-white-bis has-text-weight-semibold">
                                    Choose a file…
                                    </span>
                                </span>
                                
                                </label>

                            </div>

                            
                            {/* <div id="prodCategory" class="select">
                                <select>
                                    {categories.map(category => {
                                        return(
                                            <option value="">{category}</option>
                                        )
                                    })}
                                </select>
                            </div> */}
                            <div className="field">
                                <div className="">Category</div>
                                <div className="control">
                                    <input id="prodCategory" className="input" type="text" placeholder="The category of your product."/>
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Seller</label>
                                <div className="control">
                                    <input id="prodSeller" className="input" type="text" placeholder="Who sells it?"/>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Description</label>
                                <textarea id="prodDescription" class="textarea" placeholder="Write a description of the product for the users."></textarea>
                                
                            </div>
                            <button onClick={this.submitProduct} className="button is-info has-text-weight-bold">Upload Product</button>
                        </div>
                    </div>
                </div>

            

            </div>)
    }
}