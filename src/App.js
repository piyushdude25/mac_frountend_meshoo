// import logo from './logo.svg';
import "./App.css";
// import {BrowserRouter as Router} from 'react-router-dom'
import { Route, Switch, Routes } from "react-router-dom";
import Header from "./containers/Header";
import ProductList from "./containers/ProductList";
import ProductDetails from "./containers/ProductDetails";

import HomeBottom from "./containers/HomeBottom";
import Cartpage from "./containers/Cartpage";
import Address from "./containers/Address";
import Payment from "./containers/Payment";
import SignUp from "./containers/SignUp";
import { LoginPage } from "./containers/LoginPage";
import SuccessPage from "./containers/SuccessPage";

import TSignup from "./Registration/TSignup";
import TLogin from "./Registration/TLogin";
import NewAddress from "./containers/NewAddress";
import NewPayment from "./containers/NewPayment";
import NewCartpage from "./containers/NewCartpage";
import SignupFirebase from "./containers/SignupFirebase";
import LoginFirebase from "./containers/LoginFirebase";
import { AuthProvider } from "./contextApi/AuthContext";
import Demo from "./containers/Demo";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomeBottom />} />

          <Route exact path="/product" element={<ProductList />} />

          {/* <Route exact path="/product/cart" element={<Cartpage />} /> */}
          <Route exact path="/product/cart" element={<NewCartpage />} />

          {/* <Route exact path="/product/checkout" element={<Address/>}></Route> */}
          <Route
            exact
            path="/product/checkout"
            element={<NewAddress />}
          ></Route>

          {/* <Route exact path="/product/payment" element={<Payment />} /> */}
          <Route exact path="/product/payment" element={<NewPayment />} />

          {/* <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<LoginPage />} /> */}
          <Route exact path="/product/:id" element={<ProductDetails />} />
          <Route path="/success" element={<SuccessPage />} />

          <Route exact path="/tsignup" element={<TSignup />} />
          <Route exact path="/tlogin" element={<TLogin />} />

          <Route exact path="/signup" element={<SignupFirebase />} />
          <Route exact path="/login" element={<LoginFirebase />} />

          <Route exact path="/demo" element={<Demo />} />

          <Route>404 not found!!!</Route>
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
