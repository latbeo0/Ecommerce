import React from 'react';
import ProductCard from '../../components/User/ProductCard';
import {
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
} from './ProductsStyled';

const Products = () => {
    return (
        <>
            <HeaderProductsWrapper>
                <SearchContainer>
                    <InputSearch placeholder='Search here ...' />
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
                            <SortChooseButton>Most New</SortChooseButton>
                        </SortChooseContainer>
                    </SortContainer>
                    <CountProductsContainer>
                        Products per page:
                        <CountProductsSelect>
                            <CountProductsOption>15</CountProductsOption>
                            <CountProductsOption>25</CountProductsOption>
                            <CountProductsOption>50</CountProductsOption>
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
        </>
    );
};

export default Products;
