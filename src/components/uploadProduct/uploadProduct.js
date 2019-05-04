import React, {Component} from 'react'

import Axios from 'axios';

export default class UploadProduct extends Component {
    constructor(){
        super();
        this.state={
            categories: []
        }
    }

    componentDidMount(){
        Axios('http://localhost:4500/api/categories')
          .then(response => {
            this.setState({categories: response.data.categories})
        })
      }

    render(){
        const {categories} = this.state
        var fileInput
        var fileName
        return(

            <div className="container content">
                <div className="columns">
                    <div className="column is-6">
                        <div className="section">
                            <div className="field">
                                <label className="label">Name</label>
                                <div className="control">
                                    <input className="input" type="text" placeholder="The name of your product."/>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Price</label>
                                <div className="control">
                                    <input className="input" type="number" placeholder="E.g. 250"/>
                                </div>
                            </div>

                            <div className="file is-warning has-text-white-bis">
                                <label className="file-label">
                                <input className="file-input" type="file" name="resume" />
                                <span className="file-cta">
                                    <span className="file-label has-text-white-bis has-text-weight-semibold">
                                    Choose a file…
                                    </span>
                                </span>
                                
                                </label>
                            </div>

                            <div className="">Category</div>
                            <div class="select">
                                <select>
                                    {categories.map(category => {
                                        return(
                                            <option value="">{category}</option>
                                        )
                                    })}
                                </select>
                            </div>

                            <div className="field">
                                <label className="label">Seller</label>
                                <div className="control">
                                    <input className="input" type="text" placeholder="Who sells it?"/>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Description</label>
                                <textarea class="textarea" placeholder="Write a description of the product for the users."></textarea>
                                
                            </div>
                        </div>
                    </div>
                </div>

            

            </div>)
    }
}