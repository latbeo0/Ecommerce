import React, { useEffect, useState, useTransition } from 'react';
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
import Select from 'react-select';
import { fetchGetProducts } from '../../services/productFetch';

const options = [
    { value: 5, label: 5 },
    { value: 10, label: 10 },
    { value: 15, label: 15 },
];

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
    // let PageSize = 5;
    const [pageSize, setPageSize] = useState(options[1]);
    const [currentPage, setCurrentPage] = useState(1);

    const handleChangePageSize = (selectOption) => {
        setCurrentPage(1);
        setPageSize(selectOption);
    };

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const pageSizeCurrent = pageSize.value;
                const pageIndexCurrent = currentPage;

                await dispatch(
                    fetchGetProducts({
                        pageSize: pageSizeCurrent,
                        pageIndex: pageIndexCurrent,
                    })
                ).unwrap();
            } catch (error) {
                console.log('/Products/fetchProducts');
            }
        };
        fetchProducts();
    }, [pageSize, currentPage, dispatch]);

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
                            <CountProductsContainer style={{ zIndex: 990 }}>
                                Products per page:
                                <Select
                                    options={options}
                                    defaultValue={pageSize}
                                    onChange={handleChangePageSize}
                                />
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
                            pageSize={pageSize.value}
                            onPageChange={(page) => {
                                handleScrollToTop();
                                setCurrentPage(page);
                            }}
                        />
                    </FooterProductsWrapper>
                </ProductsContainer>
            </Content>
        </Container>
    );
};

export default Products;
