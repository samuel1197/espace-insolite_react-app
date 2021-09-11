import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import LocationScreen from './screens/LocationScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAdressScreen from './screens/ShippingAdressScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import ProfileScreen from './screens/ProfileScreen';
import PrivateRoute from './components/PrivateRoute';
import LocationAdminListScreen from './screens/LocationAdminListScreen';
import AdminRoute from "./components/AdminRoute";
import LocationEditScreen from './screens/LocationEditScreen';
import OrderAdminListScreen from './screens/OrderAdminListScreen';
import UserAdminListScreen from './screens/UserAdminListScreen';
import UserAdminEditScreen from './screens/UserAdminEditScreen';
import MentionLegalScreen from './screens/MentionLegalScreen';
import AboutScreen from './screens/AboutScreen';
import AppScreen from './screens/AppScreen';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {  
  return (
    <BrowserRouter>
      <div className="grid-container">
        <Header/>
        <main>
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/location/:id" component={LocationScreen} exact></Route>
          <Route path="/location/:id/edit" component={LocationEditScreen} exact></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/shipping" component={ShippingAdressScreen}></Route>
          <Route path="/payment" component={PaymentMethodScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/order/:id" component={OrderScreen}></Route>
          <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
          <PrivateRoute path="/profile" component={ProfileScreen}></PrivateRoute>
          <AdminRoute path="/locationlist" component={LocationAdminListScreen}></AdminRoute>
          <AdminRoute path="/orderlist" component={OrderAdminListScreen}></AdminRoute>
          <AdminRoute path="/userlist" component={UserAdminListScreen}></AdminRoute>
          <AdminRoute path="/user/:id/edit" component={UserAdminEditScreen}></AdminRoute>
          <Route path="/mention_Legal" component={MentionLegalScreen} exact></Route>
          <Route path="/qui_sommes_nous" component={AboutScreen} exact></Route>
          <Route path="/application" component={AppScreen} exact></Route>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
