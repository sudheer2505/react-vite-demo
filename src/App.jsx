import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Employee from "./components/Employee";
import NavBar from "./components/NavBar";
import ClearRoute from "./components/ClearRoute";
import Products from "./components/Products";
import AddProduct from "./components/AddProducts";
import Product from "./components/Product";
import NoPageFound from "./components/NoPageFound";
import Parent from "./components/memo_hook/Parent";
import EmployeeDetails from "./components/useContext/EmployeeDetails";

function App() {
  return (
    <React.Fragment>
      <h1>Hello React</h1>
      <Router>
        <NavBar />
        <hr />
        <Routes>
          <Route path="/" element={<ClearRoute />} />
          <Route path="/*" element={<NoPageFound />} />
          <Route exact path="/add-product" element={<AddProduct />} />
          <Route path="/products" Component={Products} />
          <Route path="/products/:productId/:productName" Component={Product} />
        </Routes>
      </Router>
      {/* <Parent /> */}
      <EmployeeDetails />
    </React.Fragment>
  );
}

export default App;
