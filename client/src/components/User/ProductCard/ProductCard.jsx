import React, { useEffect, useState } from 'react';
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
    Star,
} from './ProductCardStyled';
import heartIcon1 from '../../../assets/img/heart (1).png';
import heartIcon2 from '../../../assets/img/heart (2).png';
import { BsStarFill, BsCart } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { formatCurrencyVND } from '../../../utils/format';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../../redux/userSlice';
import { toast } from 'react-toastify';
import { fetchWishList } from '../../../services/userFetch';
import Rating from 'react-rating';
import star from '../../../assets/img/star.png';
import starfull from '../../../assets/img/starfull.png';

const ProductCard = (props) => {
    const dispatch = useDispatch();

    const {
        _id,
        primaryImages,
        price,
        newPrice,
        isStock,
        productName,
        productDescription,
        point,
        color,
    } = props?.product;

    const { currentUser } = useSelector(selectUser);

    const [isHeart, setIsHeart] = useState(
        currentUser?.favoriteProductID?.includes(_id)
    );

    useEffect(() => {
        currentUser?.favoriteProductID?.includes(_id)
            ? setIsHeart(true)
            : setIsHeart(false);
    }, [currentUser, _id]);

    const handleWishList = () => {
        if (currentUser) {
            setIsHeart((prev) => !prev);
            const type = isHeart ? 1 : 0;
            const access_token = currentUser.access_token;
            try {
                dispatch(
                    fetchWishList({
                        type,
                        productId: _id,
                        token: access_token,
                    })
                ).unwrap();
                if (type) {
                    return toast.error('You just remove product to wishlist', {
                        position: 'top-right',
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                } else {
                    return toast.success(
                        'You just add new product to wishlist',
                        {
                            position: 'top-right',
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        }
                    );
                }
            } catch (error) {
                toast.error(error, {
                    position: 'top-right',
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        } else {
            toast.error('You need to login to use this feature.', {
                position: 'top-right',
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return (
        <Container>
            <Link to={`/products/${_id}`}>
                <Wrapper>
                    <ImageContainer>
                        {isStock ? null : (
                            <Modal style={{ display: 'block' }}>
                                <ButtonsContainer>
                                    Not in stock
                                </ButtonsContainer>
                            </Modal>
                        )}
                        <Image alt='img' src={primaryImages[0].img} />
                        {isStock && (
                            <Modal>
                                <ButtonsContainer>
                                    <BiSearch />
                                    <BsCart />
                                </ButtonsContainer>
                            </Modal>
                        )}
                    </ImageContainer>
                    <Content>
                        <Header>
                            <Title>{`${productName} (${color.nameColor})`}</Title>
                            <StarsContainer>
                                <StarsWrapper>
                                    <Rating
                                        initialRating={Math.floor(point)}
                                        emptySymbol={
                                            <Star
                                                src={star}
                                                alt='star'
                                                className='icon'
                                            />
                                        }
                                        placeholderSymbol={
                                            <Star
                                                src={starfull}
                                                alt='starfull'
                                                className='icon'
                                            />
                                        }
                                        fullSymbol={
                                            <Star
                                                src={starfull}
                                                alt='starfull'
                                                className='icon'
                                            />
                                        }
                                        readonly
                                    />
                                </StarsWrapper>
                                ({point})
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
            <HeartContainer isHeart={isHeart} onClick={handleWishList}>
                <Heart src={isHeart ? heartIcon1 : heartIcon2} alt='img' />
            </HeartContainer>
        </Container>
    );
};

export default ProductCard;
