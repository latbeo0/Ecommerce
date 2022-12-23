import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { FiCheck } from 'react-icons/fi';
import { IoClose, IoTrashOutline } from 'react-icons/io5';
import { formatCurrencyVND } from '../../../utils/format';
import {
    Container,
    ImageContainer,
    Image,
    HeartContainer,
    Heart,
    BodyContainer,
    Name,
    Code,
    Detail,
    Color,
    PriceContainer,
    PriceOld,
    PriceNew,
    FooterContainer,
    QuantityContainer,
    Quantity,
    Input,
    Arrow,
    ItemPrice,
    ToolContainer,
    CheckContainer,
    DeleteContainer,
} from './ItemCartStyled';
import heartIcon1 from '../../../assets/img/heart (1).png';
import heartIcon2 from '../../../assets/img/heart (2).png';
import {
    fetchDecreaseNumber,
    fetchGetCart,
    fetchIncreaseNumber,
    fetchRemoveItem,
    fetchSelectItem,
} from '../../../services/cartFetch';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../Modal';
import { selectUser } from '../../../redux/userSlice';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { fetchWishList } from '../../../services/userFetch';

const ItemCart = (props) => {
    const dispatch = useDispatch();

    const { currentUser } = useSelector(selectUser);

    const { product } = props;

    const selectQuantity = product?.count;

    const quantityBySelectedSize = product?.product.color.details.find(
        (item) => item.size === product?.size
    ).quantity;

    const [isHeart, setIsHeart] = useState(
        currentUser?.favoriteProductID?.includes(product?.product._id)
    );

    useEffect(() => {
        currentUser?.favoriteProductID?.includes(product?.product._id) &&
            setIsHeart(true);
    }, [currentUser]);

    const fetchCartOfUser = async () => {
        try {
            await dispatch(fetchGetCart({ user: currentUser })).unwrap();
        } catch (error) {
            console.log('/App/fetchCart');
        }
    };

    const handlePlusQuantity = async () => {
        try {
            if (selectQuantity < quantityBySelectedSize) {
                await dispatch(
                    fetchIncreaseNumber({
                        user: currentUser,
                        product: product?.product,
                        quantity: selectQuantity,
                    })
                ).unwrap();
                if (product.isError) {
                    fetchCartOfUser();
                }
            }
        } catch (error) {
            console.log('error', error);
        }
    };

    const handleMinusQuantity = async () => {
        try {
            if (selectQuantity > 1) {
                await dispatch(
                    fetchDecreaseNumber({
                        user: currentUser,
                        product: product?.product,
                        quantity: selectQuantity,
                    })
                ).unwrap();
                if (product.isError) {
                    fetchCartOfUser();
                }
            } else {
                setIsOpened((prev) => !prev);
            }
        } catch (error) {
            console.log('error', error);
        }
    };

    const handleRemoveItem = async () => {
        try {
            setIsOpened((prev) => !prev);
            await dispatch(
                fetchRemoveItem({
                    user: currentUser,
                    product: product?.product,
                })
            ).unwrap();
        } catch (error) {
            console.log('error', error);
        }
    };

    const handleSelect = async () => {
        try {
            await dispatch(
                fetchSelectItem({
                    user: currentUser,
                    product: product?.product,
                    isSelected: product?.isSelected,
                })
            ).unwrap();
        } catch (error) {
            console.log('error', error);
        }
    };

    const handleWishList = () => {
        if (currentUser) {
            setIsHeart((prev) => !prev);
            const type = isHeart ? 1 : 0;
            const access_token = currentUser.access_token;
            try {
                dispatch(
                    fetchWishList({
                        type,
                        productId: product?.product._id,
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

    const [isOpened, setIsOpened] = useState(false);

    const handleOpenModal = () => {
        setIsOpened((prev) => !prev);
    };

    return (
        <Container
            key={product.product._id + product.size}
            isSelect={product?.isSelected}
            isError={product?.isError}
        >
            <ImageContainer>
                <Image src={product?.product.primaryImages[0].img} alt='#' />
                <HeartContainer isHeart={isHeart} onClick={handleWishList}>
                    <Heart src={isHeart ? heartIcon1 : heartIcon2} alt='img' />
                </HeartContainer>
            </ImageContainer>
            <BodyContainer>
                <Name>{product?.product.productName}</Name>
                <Code>{`Code: ${product?.product._id}`}</Code>
                <PriceContainer>
                    Price:
                    {product?.product.newPrice ? (
                        <>
                            <PriceNew>
                                {formatCurrencyVND(product?.product.newPrice)}
                            </PriceNew>
                            <PriceOld>
                                {formatCurrencyVND(product?.product.price)}
                            </PriceOld>
                        </>
                    ) : (
                        <PriceNew>
                            {formatCurrencyVND(product?.product.price)}
                        </PriceNew>
                    )}
                </PriceContainer>
                <Detail>
                    Color
                    <Color
                        background={product?.product.color.valueColor}
                    ></Color>
                    Size: {product?.size}
                </Detail>
            </BodyContainer>
            <FooterContainer>
                have only{' '}
                {
                    product?.product.color.details.find(
                        (item) => item.size === product?.size
                    ).quantity
                }{' '}
                in stock
                <QuantityContainer>
                    <Quantity>
                        <Arrow onClick={handleMinusQuantity}>
                            <AiOutlineMinus />
                        </Arrow>
                        <Input value={selectQuantity} onChange={() => {}} />
                        <Arrow
                            onClick={handlePlusQuantity}
                            disabled={selectQuantity >= quantityBySelectedSize}
                        >
                            <AiOutlinePlus />
                        </Arrow>
                    </Quantity>
                </QuantityContainer>
                <ItemPrice>
                    {product?.product.newPrice
                        ? formatCurrencyVND(
                              product?.product.newPrice * product?.count
                          )
                        : formatCurrencyVND(
                              product?.product.price * product?.count
                          )}
                </ItemPrice>
            </FooterContainer>
            <ToolContainer>
                <CheckContainer
                    onClick={handleSelect}
                    isSelect={product?.isSelected}
                    isError={product?.isError}
                >
                    {product?.isSelected ? (
                        product?.isError ? (
                            <IoClose />
                        ) : (
                            <FiCheck />
                        )
                    ) : null}
                </CheckContainer>
                <DeleteContainer onClick={handleOpenModal}>
                    <IoTrashOutline />
                </DeleteContainer>
            </ToolContainer>
            {isOpened ? (
                <Modal
                    product={props.product}
                    onCancel={handleOpenModal}
                    onConfirm={handleRemoveItem}
                />
            ) : null}
        </Container>
    );
};

export default ItemCart;
