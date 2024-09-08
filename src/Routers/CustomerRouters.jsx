import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/Pages/HomePage/HomePage";
import Cart from "../customer/components/Cart/Cart";
import Footer from "../customer/components/Footer/Footer";
import Product from "../customer/components/Product/Product";
import Navigation from "../customer/components/navigation/Navigation.jsx";
import ProductDetails from "../customer/components/ProductDetails/ProductDetails.jsx";
import Checkout from "../customer/components/Checkout/Checkout.jsx";
import Order from "../customer/Order/Order.jsx";
import OrderDetails from "../customer/Order/OrderDetails.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import PaymentSuccess from "../customer/components/Payment/PaymentSuccess.jsx";

const CustomerRouters = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/:levelOne/:levelTwo/:levelThree"
          element={<Product />}
        ></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route
          path="/account/order"
          element={<PrivateRoute element={<Order />} />}
        />
        <Route
          path="/account/order/:orderId"
          element={<PrivateRoute element={<OrderDetails />} />}
        />
        <Route
          path="/payment/:orderId"
          element={<PrivateRoute element={<PaymentSuccess />} />}
        />
      </Routes>
      
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRouters;
