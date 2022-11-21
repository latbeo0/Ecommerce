import React, { useState } from 'react';
import {
    Container,
    Wrapper,
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
import { formatCurrencyVND } from '../../../utils/format';

const ProductCard = (props) => {
    const { _id, primaryImages, price, newPrice, isStock, productName } =
        props?.product;

    const [isHeart, setIsHeart] = useState(false);

    return (
        <Container>
            <Link to={`/products/${_id}`}>
                <Wrapper>
                    <ImageContainer>
                        <Image alt='img' src={primaryImages[0].img} />
                        <Modal>
                            <ButtonsContainer>
                                <BiSearch />
                                <BsCart />
                            </ButtonsContainer>
                        </Modal>
                    </ImageContainer>
                    <Content>
                        <Header>
                            <Title>{productName}</Title>
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
                                {newPrice ? (
                                    <>
                                        <PriceNew>
                                            {formatCurrencyVND(newPrice)}
                                        </PriceNew>
                                        <PriceOld>
                                            {formatCurrencyVND(price)}
                                        </PriceOld>
                                    </>
                                ) : (
                                    <PriceNew color='gray'>
                                        {formatCurrencyVND(price)}
                                    </PriceNew>
                                )}
                            </ProductPrice>
                        </Body>
                    </Content>
                </Wrapper>
            </Link>
            <HeartContainer
                isHeart={isHeart}
                onClick={() => setIsHeart(!isHeart)}
            >
                <Heart src={isHeart ? heartIcon1 : heartIcon2} alt='img' />
            </HeartContainer>
        </Container>
    );
};

export default ProductCard;
