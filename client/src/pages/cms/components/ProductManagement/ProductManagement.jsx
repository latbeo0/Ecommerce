import React from "react";
import ProductList from "../ProductList/ProductList";
import "./ProductManagement.css"
const ProductManagement = () => {
  return (
    <div className="ProductContainer">
      <h1>Product</h1>
      <ProductList/>
    </div>
  );
};

export default ProductManagement;
