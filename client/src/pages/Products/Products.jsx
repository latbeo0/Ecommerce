import React from "react";
import ProductCard from "../../components/User/ProductCard";
import Filter from "../../components/User/Filter";
import {
    Container,
    Content,
    ProductsContainer,
    HeaderProductsWrapper,
    SearchContainer,
    InputSearch,
    ResultSearch,
    Result,
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

const Products = () => {
    return (
        <Container>
            <BreadCrumb />
            <Content>
                <Filter />
                <ProductsContainer>
                    <HeaderProductsWrapper>
                        <SearchContainer>
                            <InputSearch placeholder="Search here ..." />
                        </SearchContainer>
                        <ResultSearch>
                            Search result for <Result>"Something"</Result>
                        </ResultSearch>
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
                    </BodyProductsWrapper>
                </ProductsContainer>
            </Content>
        </Container>
    );
};

export default Products;
