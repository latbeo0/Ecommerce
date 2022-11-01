import React, { useState } from 'react';
import {
    Container,
    ImageContainer,
    Image,
    HeartContainer,
    Heart,
    Content,
    Header,
    Title,
    StarsContainer,
    StarsWrapper,
    Body,
    SaleContainer,
    SaleTag,
    ProductPrice,
    PriceNew,
    PriceOld,
    Modal,
    ButtonsContainer,
} from './ProductCardStyled';
import heartIcon1 from '../../../assets/img/heart (1).png';
import heartIcon2 from '../../../assets/img/heart (2).png';
import { BsStarFill, BsCart } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const ProductCard = () => {
    const [isHeart, setIsHeart] = useState(false);

    return (
        <Link to='/products/1'>
            <Container>
                <ImageContainer>
                    <Image
                        alt='img'
                        src='https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1600'
                    />
                    <HeartContainer
                        isHeart={isHeart}
                        onClick={() => setIsHeart(!isHeart)}
                    >
                        <Heart
                            src={isHeart ? heartIcon1 : heartIcon2}
                            alt='img'
                        />
                    </HeartContainer>
                    <Modal>
                        <ButtonsContainer>
                            <BiSearch />
                            <BsCart />
                        </ButtonsContainer>
                    </Modal>
                </ImageContainer>
                <Content>
                    <Header>
                        <Title>Monstera DK Var (L)</Title>
                        <StarsContainer>
                            <StarsWrapper>
                                <BsStarFill color='#ffc554' />
                                <BsStarFill color='#ffc554' />
                                <BsStarFill color='#ffc554' />
                                <BsStarFill color='#ffc554' />
                                <BsStarFill color='#ffc554' />
                            </StarsWrapper>
                            (74)
                        </StarsContainer>
                    </Header>
                    <Body>
                        <SaleContainer>
                            Price
                            <SaleTag>12.5%</SaleTag>
                        </SaleContainer>
                        <ProductPrice>
                            <PriceNew>12.345.678 vnđ</PriceNew>
                            <PriceOld>98.765.432 vnđ</PriceOld>
                        </ProductPrice>
                    </Body>
                </Content>
            </Container>
        </Link>
    );
};

export default ProductCard;
