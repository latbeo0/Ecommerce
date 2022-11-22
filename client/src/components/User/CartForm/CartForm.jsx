import React from "react";
import { ListProductsContainer, ListProducts } from "./CartFormStyled";
import ItemCart from "../ItemCart";

const CartForm = (props) => {
    const { listProducts } = props;

    return listProducts?.length > 0 ? (
        <ListProductsContainer>
            <h1 style={{ marginBottom: "2rem" }}>My Cart</h1>
            <ListProducts>
                {listProducts.map((product) => (
                    <ItemCart
                        key={product.product._id + product.size}
                        product={product}
                    />
                ))}
            </ListProducts>
        </ListProductsContainer>
    ) : (
        <div>No thing in cart</div>
    );
};

export default CartForm;
