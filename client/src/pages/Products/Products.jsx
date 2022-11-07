import React, { useState, useTransition } from "react";
import ProductCard from "../../components/User/ProductCard";
import Filter from "../../components/User/Filter";
import {
    Container,
    Content,
    ProductsContainer,
    HeaderProductsWrapper,
    DisplayContainer,
    SortContainer,
    SortChooseContainer,
    SortChooseButton,
    CountProductsSelect,
    CountProductsOption,
    CountProductsContainer,
    BodyProductsWrapper,
} from "./ProductsStyled";
import BreadCrumb from "../../components/Basic/BreadCrumb";
import Search from "../../components/Basic/Search";
import { useDispatch, useSelector } from "react-redux";
import { searchChange, selectSearch } from "../../redux/filterSlice";

const Products = () => {
    const [, startTransition] = useTransition();
    const dispatch = useDispatch();

    const search = useSelector(selectSearch);

    const handleChangeSearch = (e) => {
        startTransition(() => {
            const value = e.target.value;
            dispatch(searchChange({ value }));
        });
    };

    const handleClearSearch = () => {
        dispatch(searchChange({ value: "" }));
    };

    return (
        <Container>
            <BreadCrumb />
            <Content>
                <Filter />
                <ProductsContainer>
                    <HeaderProductsWrapper>
                        <Search
                            result={search}
                            onChange={handleChangeSearch}
                            onClear={handleClearSearch}
                        />
                        <DisplayContainer>
                            <SortContainer>
                                Sort:
                                <SortChooseContainer>
                                    <SortChooseButton choose>
                                        Relevance
                                    </SortChooseButton>
                                    <SortChooseButton>Popular</SortChooseButton>
                                    <SortChooseButton>
                                        Most New
                                    </SortChooseButton>
                                </SortChooseContainer>
                            </SortContainer>
                            <CountProductsContainer>
                                Products per page:
                                <CountProductsSelect>
                                    <CountProductsOption>
                                        15
                                    </CountProductsOption>
                                    <CountProductsOption>
                                        25
                                    </CountProductsOption>
                                    <CountProductsOption>
                                        50
                                    </CountProductsOption>
                                </CountProductsSelect>
                            </CountProductsContainer>
                        </DisplayContainer>
                    </HeaderProductsWrapper>
                    <BodyProductsWrapper>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </BodyProductsWrapper>
                </ProductsContainer>
            </Content>
        </Container>
    );
};

export default Products;
