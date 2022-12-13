import React, { useEffect, useMemo, useState, useTransition } from 'react';
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
import {
    searchChange,
    selectFilter,
    selectSearch,
} from '../../redux/filterSlice';
import { Pagination } from '../../components/Basic';
import { selectProducts } from '../../redux/productSlice';
import Loading from '../../helpers/Loading';
import Select from 'react-select';
import { fetchGetProducts } from '../../services/productFetch';
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import imgNotFoundProduct from '../../assets/img/istockphoto-1038232966-612x612.jpg';
import debounce from 'lodash.debounce';

const options = [
    { value: 5, label: 5, name: 'pageSize' },
    { value: 10, label: 10, name: 'pageSize' },
    { value: 15, label: 15, name: 'pageSize' },
];

const Products = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const { search, isLoading, sort, pageSize, pageIndex } =
        useSelector(selectFilter);

    const [, startTransition] = useTransition();

    const products = useSelector(selectProducts);

    const handleChangeSearch = (e) => {
        // startTransition(() => {
        //     const value = e.target.value;
        //     dispatch(searchChange({ value }));
        // });

        // const value = e.target.value;
        // dispatch(searchChange({ value }));

        const { name, value } = e.target;
        setTemp(value);

        const pathname = location.pathname;
        const query = queryString.parse(location.search);

        const modifiedQuery = {
            ...query,
            [name]: value,
        };

        const search = queryString.stringify(modifiedQuery);
        navigate(`${pathname}?${search}`, { replace: true });
    };

    const handleClearSearch = () => {
        handleChangeSearch({
            target: {
                name: 'search',
                value: '',
            },
        });
        // dispatch(searchChange({ value: '' }));
    };

    const [temp, setTemp] = useState('');

    // pagination
    // const [pageSize, setPageSize] = useState(options[1]);
    // const [currentPage, setCurrentPage] = useState(1);

    const handleChangePageSize = (selectOption) => {
        // setCurrentPage(1);
        // setPageSize(selectOption);

        const { name, value } = selectOption;

        const pathname = location.pathname;
        const query = queryString.parse(location.search);

        const modifiedQuery = {
            ...query,
            [name]: value,
            pageIndex: 1,
        };

        const search = queryString.stringify(modifiedQuery);
        navigate(`${pathname}?${search}`, { replace: true });
    };

    const handleChangePageIndex = (page) => {
        const pathname = location.pathname;
        const query = queryString.parse(location.search);

        const modifiedQuery = {
            ...query,
            pageIndex: page,
        };

        const search = queryString.stringify(modifiedQuery);
        navigate(`${pathname}?${search}`, { replace: true });
    };

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    const handleChooseSort = (e) => {
        const { name, value } = e.target;

        const pathname = location.pathname;
        const query = queryString.parse(location.search);

        const modifiedQuery = {
            ...query,
            [name]: value,
        };

        const search = queryString.stringify(modifiedQuery);
        navigate(`${pathname}?${search}`, { replace: true });
    };

    const fetchProducts = async () => {
        try {
            const search = queryString.parse(location.search);
            const pageSizeCurrent = search.pageSize || pageSize[0];
            const pageIndexCurrent = search.pageIndex || 1;

            const modifiedQuery = {
                ...search,
                pageSize: pageSizeCurrent,
                pageIndex: pageIndexCurrent,
            };
            const query = queryString.stringify(modifiedQuery);

            await dispatch(
                fetchGetProducts({
                    query,
                    pageSize: pageSizeCurrent,
                    pageIndex: pageIndexCurrent,
                })
            ).unwrap();
        } catch (error) {
            console.log('/Products/fetchProducts');
        }
    };

    const debouncedChangeHandler = useMemo(
        () => debounce(fetchProducts, 500),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [location.search]
    );

    useEffect(() => {
        // const fetchProducts = async () => {
        //     try {
        //         const search = queryString.parse(location.search);
        //         const pageSizeCurrent = search.pageSize || pageSize[0];
        //         const pageIndexCurrent = search.pageIndex || 1;

        //         const modifiedQuery = {
        //             ...search,
        //             pageSize: pageSizeCurrent,
        //             pageIndex: pageIndexCurrent,
        //         };
        //         const query = queryString.stringify(modifiedQuery);

        //         await dispatch(
        //             fetchGetProducts({
        //                 query,
        //                 pageSize: pageSizeCurrent,
        //                 pageIndex: pageIndexCurrent,
        //             })
        //         ).unwrap();
        //     } catch (error) {
        //         console.log("/Products/fetchProducts");
        //     }
        // };
        // fetchProducts();
        debouncedChangeHandler();

        return () => {
            debouncedChangeHandler.cancel();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.search, dispatch]);

    return (
        <Container>
            <BreadCrumb />
            <Content>
                <Filter />
                <ProductsContainer>
                    <HeaderProductsWrapper>
                        <Search
                            result={temp}
                            onChange={handleChangeSearch}
                            onClear={handleClearSearch}
                        />
                        <DisplayContainer>
                            <SortContainer>
                                Sort:
                                <SortChooseContainer>
                                    <SortChooseButton
                                        choose={
                                            sort.includes('relevance')
                                                ? true
                                                : false
                                        }
                                        name='sort'
                                        value='relevance'
                                        onClick={(e) => handleChooseSort(e)}
                                    >
                                        Relevance
                                    </SortChooseButton>
                                    <SortChooseButton
                                        choose={
                                            sort.includes('popular')
                                                ? true
                                                : false
                                        }
                                        name='sort'
                                        value='popular'
                                        onClick={(e) => handleChooseSort(e)}
                                    >
                                        Popular
                                    </SortChooseButton>
                                    <SortChooseButton
                                        choose={
                                            sort.includes('most-new')
                                                ? true
                                                : false
                                        }
                                        name='sort'
                                        value='most-new'
                                        onClick={(e) => handleChooseSort(e)}
                                    >
                                        Most New
                                    </SortChooseButton>
                                    <SortChooseButton
                                        choose={
                                            sort.includes('price-low-high')
                                                ? true
                                                : false
                                        }
                                        name='sort'
                                        value='price-low-high'
                                        onClick={(e) => handleChooseSort(e)}
                                    >
                                        Price (Low - High)
                                    </SortChooseButton>
                                    <SortChooseButton
                                        choose={
                                            sort.includes('price-high-low')
                                                ? true
                                                : false
                                        }
                                        name='sort'
                                        value='price-high-low'
                                        onClick={(e) => handleChooseSort(e)}
                                    >
                                        Price (High - Low)
                                    </SortChooseButton>
                                </SortChooseContainer>
                            </SortContainer>
                            <CountProductsContainer style={{ zIndex: 990 }}>
                                Products per page:
                                <Select
                                    options={options}
                                    defaultValue={{
                                        value: 10,
                                        label: 10,
                                        name: 'pageSize',
                                    }}
                                    onChange={handleChangePageSize}
                                />
                            </CountProductsContainer>
                        </DisplayContainer>
                    </HeaderProductsWrapper>
                    <BodyProductsWrapper
                        isLoading={
                            products?.isError ||
                            products?.isLoading ||
                            isLoading
                        }
                    >
                        {products.isError ? (
                            <span>Something wrong with api get products</span>
                        ) : products.isLoading ? (
                            <Loading />
                        ) : products.listProducts?.length === 0 ? (
                            <div
                                style={{
                                    gridColumn: 'span 3',
                                    margin: 'auto',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <img
                                    src={imgNotFoundProduct}
                                    alt='Not found product you want'
                                />
                                <span>
                                    No products found matching the filter
                                </span>
                            </div>
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
                            currentPage={Number(pageIndex[0])}
                            totalCount={products?.totalProducts}
                            pageSize={Number(pageSize[0])}
                            onPageChange={(page) => {
                                handleScrollToTop();
                                handleChangePageIndex(page);
                            }}
                        />
                    </FooterProductsWrapper>
                </ProductsContainer>
            </Content>
        </Container>
    );
};

export default Products;
