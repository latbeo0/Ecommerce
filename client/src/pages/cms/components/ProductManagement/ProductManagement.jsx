import React from "react";
import ProductList from "../ProductList/ProductList";
import BasicSelect from "../../../../components/Basic/BasicSelect";
import "./ProductManagement.css";
const ProductManagement = () => {
  return (
    <div className="ProductContainer">
      <div className="ProductContent">
        <h1>Product</h1>
        <div className="SelectContainer">
          <BasicSelect className = "ProductSelect"/>
          <BasicSelect className = "ProductSelect"/>
          <BasicSelect className = "ProductSelect"/>
        </div>
        <ProductList />
      </div>
    </div>
  );
};

export default ProductManagement;
