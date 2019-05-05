import React, {Component} from 'react';

import Link from 'react-router-dom/Link'
import Axios from 'axios';

import CartCards from '../cartCards/cartCards'

//Modal Component
const Modal = ({ children, closeModal, modalState, title }) => {
  if(!modalState) {
    return null;
  }
  
  return(

    <div className="modal is-active">
      <div className="modal-background" onClick={closeModal} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <button className="delete" onClick={closeModal} />
        </header>
        <section className="modal-card-body">
          <div className="content">
            {children}
          </div>
        </section>
        <footer className="modal-card-foot">
          <a className="button" onClick={closeModal}>Cancel</a>
        </footer>
      </div>
    </div>
  );
}



export default class NavBarMenu extends Component {

  constructor(){
    super();
    this.state={
        categories: [],
        keyword: String,
        modalState: false, 
        prods: []
      };    
      this.handleChange = this.handleChange.bind(this)
      this.toggleModal = this.toggleModal.bind(this);
}

  componentDidMount(){
    Axios('http://localhost:4500/api/categories')
      .then(response => {
        this.setState({categories: response.data.categories})
    })

    const localCart = localStorage.getItem('cart');
    const cart = localCart ? JSON.parse(localCart) : [];
    this.setState({prods: cart});
  }


  handleChange(e){
    this.setState({keyword: e.target.value})
  }

  //Change the state of the modal.
  toggleModal() {    
    this.setState((prev, props) => {
      const newState = !prev.modalState;
      
      return { modalState: newState };
    });
  }

    render() {
      const {categories, prods} = this.state
      return(
        <div >
          <nav className="navbar is-light">
            <div className="container has-text-centered">
              <div className="navbar-brand">
                <Link to={'/products'}><img src="https://bit. ly/2J8mtsP" alt="CondorMarket Logo" className="is-1by1 is-96x96"/></Link>
                
              </div>
              <div className="navbar-start">
                <div className="navbar-item">
                  <input onChange={this.handleChange} className="input is-rounded is-warning is-medium navbar-padding-vertical" type="text" placeholder="Search"/>
                  <button className="button is-warning is-rounded is-medium"> <Link to={"/search/"+this.state.keyword}>Search</Link> </button>
                </div>
                
              </div>
  
              <div className="navbar-end">
              <a className="navbar-item is-primary" onClick={this.toggleModal}>
                <div className="button is-primary is-rounded has-text-weight-bold">Cart</div>
              </a>

                <Modal 
                  closeModal={this.toggleModal}
                  modalState={this.state.modalState}
                  title="Shopping Cart"
                >
                <section>
              <div className="columns ">
                  <div className="column is-3">
                    {
                      prods.map(prod => {
                        return(
                          <CartCards prod={prod}/>
                        )
                      })
                    }
                      
                  </div>
              </div>
            </section>
                </Modal>

                <Link to={'/products'} className="navbar-item">Home</Link>
  
                <div className="navbar-item has-dropdown is-hoverable">
                  <Link className="navbar-link">
                    Categories
                  </Link>
  
                  <div className="navbar-dropdown">

                    {categories.map(category => {
                      return(
                        <Link onClick={this.updateState} className="navbar-item" to={"/"+category+"/products"}>
                          {category}
                        </Link>
                      )
                    })}

                    
                  </div>
                </div>
                <Link to={'/upload-product'} className="navbar-item">Upload Products</Link>
                <Link to={'/about'} className="navbar-item">About</Link>
              </div>
            </div>
          </nav>
        </div>
      )
    }
  }