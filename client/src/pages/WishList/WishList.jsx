import React from "react";
import { useSelector } from "react-redux";
import BreadCrumb from "../../components/Basic/BreadCrumb";
import ProductCard from "../../components/User/ProductCard";
import { selectProducts } from "../../redux/productSlice";
import {
    Container,
    Wrapper,
    Header,
    Title,
    ButtonClearAll,
    Content,
} from "./WishListStyled";

const WishList = () => {
    const products = useSelector(selectProducts);

    return (
        <Container>
            <BreadCrumb />
            <Wrapper>
                <Header>
                    <Title>My wishlist</Title>
                    <ButtonClearAll>Clear wishlist</ButtonClearAll>
                </Header>
                <Content>
                    {products.listProducts?.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </Content>
            </Wrapper>
        </Container>
    );
};

export default WishList;
