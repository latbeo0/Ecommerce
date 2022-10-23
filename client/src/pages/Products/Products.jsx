import React from 'react';
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
    SeeAll,
} from './ProductsStyled';
import { IoIosArrowDown } from 'react-icons/io';
import CheckBox from '../../components/Basic/CheckBox';

const Products = () => {
    return (
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
                        <CheckBox />
                        <CheckBox />
                        <CheckBox />
                        <CheckBox />
                    </FilterSectionBody>
                    <SeeAll>See All</SeeAll>
                </FilterSection>
            </FilterContainer>
            <ProductsContainer>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </ProductsContainer>
        </Container>
    );
};

export default Products;
