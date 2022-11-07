import React from "react";
import { Carousel } from "../../Basic";
import ProductCard from "../ProductCard";

const ListProducts = (props) => {
    const { listProducts } = props;

    return (
        <Carousel show={4} infiniteLoop>
            {listProducts.map((product, index) => (
                <ProductCard key={index} />
            ))}
        </Carousel>
    );
};

export default ListProducts;
