import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

import HomeScreen from '../src/screens/HomeScreen';
import ProductScreen from '../src/screens/ProductScreen';
import CartScreen from '../src/screens/CartScreen';
import LoginScreen from '../src/screens/LoginScreen';
import RegisterScreen from '../src/screens/RegisterScreen';
import ProfileScreen from '../src/screens/ProfileScreen';
import ShippingScreen from '../src/screens/ShippingScreen';
import PaymentScreen from '../src/screens/PaymentScreen';
import PlaceOrderScreen from '../src/screens/PlaceOrderScreen';
import OrderScreen from '../src/screens/OrderScreen';
import UserListScreen from '../src/screens/UserListScreen';
import UserEditScreen from '../src/screens/UserEditScreen';
import ProductListScreen from '../src/screens/ProductListScreen';
import ProductEditScreen from '../src/screens/ProductEditScreen';

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/admin/userlist" component={UserListScreen} />
          <Route path="/admin/user/:id/edit" component={UserEditScreen} />
          <Route path="/admin/productlist" component={ProductListScreen} />
          <Route path="/admin/product/:id/edit" component={ProductEditScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
