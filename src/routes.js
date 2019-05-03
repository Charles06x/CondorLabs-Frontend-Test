import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Componenents

import App from './App';
import Products from './components/products/Products';
import ProductsByCategory from './components/productsByCategory/productsByCategory';
import ProductsDetails from './components/productsDetails/productsDetails';

const AppRoutes = () =>
    <App>
        <Switch>
            <Route exact path="/home" component={Products} />
            <Route exact path="/products-details" component={ProductsDetails} />
            <Route exact path="/categories/:category/products" component={ProductsByCategory} />

            <Route path='/' component={Products} />
        </Switch>
    </App>;


export default AppRoutes;