import React from 'react';
import Footer from '../../components/User/Footer';
import Header from '../../components/User/Header';
import ProductCard from '../../components/User/ProductCard';
import {
    Container,
    FilterContainer,
    ProductsContainer,
    FilterSection,
    FilterTitle,
    ButtonReset,
    FilterSectionHeader,
    ButtonHide,
    FilterSectionBody,
} from './ProductsStyled';
import { IoIosArrowDown } from 'react-icons/io';

const Products = () => {
    return (
        <>
            <Header />
            <Container>
                <FilterContainer>
                    <FilterSection>
                        <FilterSectionHeader>
                            <FilterTitle>Filter</FilterTitle>
                            <ButtonReset>Reset</ButtonReset>
                        </FilterSectionHeader>
                    </FilterSection>
                    <FilterSection>
                        <FilterSectionHeader>
                            Price
                            <ButtonHide>
                                Hide
                                <IoIosArrowDown />
                            </ButtonHide>
                        </FilterSectionHeader>
                        <FilterSectionBody>
                            <input type='range' />
                            <p>Max value: 100.000.000 vnđ</p>
                        </FilterSectionBody>
                    </FilterSection>
                    <FilterSection>
                        <FilterSectionHeader>
                            City
                            <ButtonHide>
                                Hide
                                <IoIosArrowDown />
                            </ButtonHide>
                        </FilterSectionHeader>
                        <FilterSectionBody>
                            <input type='checkbox' />
                            <input type='checkbox' />
                            <input type='checkbox' />
                            <input type='checkbox' />
                            <p>See All</p>
                        </FilterSectionBody>
                    </FilterSection>
                </FilterContainer>
                <ProductsContainer>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </ProductsContainer>
            </Container>
            <Footer />
        </>
    );
};

export default Products;
