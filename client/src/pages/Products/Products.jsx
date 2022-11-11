import React, { useState, useTransition } from 'react';
import ProductCard from '../../components/User/ProductCard';
import Filter from '../../components/User/Filter';
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
    FooterProductsWrapper,
} from './ProductsStyled';
import BreadCrumb from '../../components/Basic/BreadCrumb';
import Search from '../../components/Basic/Search';
import { useDispatch, useSelector } from 'react-redux';
import { searchChange, selectSearch } from '../../redux/filterSlice';
import { Pagination } from '../../components/Basic';
import { selectProducts } from '../../redux/productSlice';
import Loading from '../../helpers/Loading';

const Products = () => {
    const dispatch = useDispatch();
    const [, startTransition] = useTransition();

    const products = useSelector(selectProducts);
    const search = useSelector(selectSearch);

    const handleChangeSearch = (e) => {
        startTransition(() => {
            const value = e.target.value;
            dispatch(searchChange({ value }));
        });
    };

    const handleClearSearch = () => {
        dispatch(searchChange({ value: '' }));
    };

    // pagination
    let PageSize = 10;
    const [currentPage, setCurrentPage] = useState(1);

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
                    <BodyProductsWrapper
                        isLoading={products?.isError || products?.isLoading}
                    >
                        {products.isError ? (
                            <span>Something wrong with api get products</span>
                        ) : products.isLoading ? (
                            <Loading />
                        ) : (
                            products.listProducts?.map((product) => (
                                <ProductCard
                                    key={product._id}
                                    product={product}
                                />
                            ))
                        )}
                    </BodyProductsWrapper>
                    <FooterProductsWrapper>
                        <Pagination
                            currentPage={currentPage}
                            totalCount={products?.totalProducts}
                            pageSize={PageSize}
                            onPageChange={(page) => setCurrentPage(page)}
                        />
                    </FooterProductsWrapper>
                </ProductsContainer>
            </Content>
        </Container>
    );
};

export default Products;
