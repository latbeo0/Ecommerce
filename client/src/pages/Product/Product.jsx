import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import BreadCrumb from '../../components/Basic/BreadCrumb';
import ListProducts from '../../components/User/ListProducts';
import {
    fetchGetProductById,
    fetchGetRelatedProducts,
} from '../../services/productFetch';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import {
    Container,
    ProductDetailContainer,
    ImageContainer,
    ImagePrimaryContainer,
    Image,
    ImageSecondary,
    InformationContainer,
    Name,
    HeaderInformationContainer,
    CodeProduct,
    StateProduct,
    PriceContainer,
    PriceNew,
    PriceOld,
    DescriptionContainer,
    ColorContainer,
    Color,
    DetailContainer,
    SizeContainer,
    Size,
    QuantityContainer,
    Quantity,
    Input,
    Arrow,
    ButtonContainer,
    ButtonCart,
    ButtonCheckout,
    SubInformationContainer,
    CommentContainer,
    RelatedProductsContainer,
    RecentlyViewedProducts,
    Title,
    Decor,
} from './ProductStyled';
import Loading from '../../helpers/Loading';
import ListImage from '../../components/User/ListImage';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { fetchAddToCart } from '../../services/cartFetch';

const Product = () => {
    const { codeProduct } = useParams();
    const dispatch = useDispatch();

    const [currentProduct, setCurrentProduct] = useState({
        loading: true,
        product: null,
        error: false,
    });
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [selectSize, setSelectSize] = useState(null);
    const [selectQuantity, setSelectQuantity] = useState(0);

    const listSize = currentProduct.product?.colors
        .find((item) => !item.id)
        ?.details.map((item) => item.size);

    const quantityBySelectedSize = currentProduct.product?.colors
        .find((item) => !item.id)
        ?.details.find(
            (item) => Number(item.size) === Number(selectSize)
        )?.quantity;

    useEffect(() => {
        // reset
        setCurrentProduct({
            loading: true,
            product: null,
            error: false,
        });
        setSelectSize(null);
        setSelectQuantity(0);

        // get product detail
        const getProduct = async (codeProduct) => {
            const res = await fetchGetProductById(codeProduct);
            setCurrentProduct((prev) => {
                return { ...prev, loading: false, product: res?.data };
            });
        };
        getProduct(codeProduct);
    }, [codeProduct]);

    useEffect(() => {
        if (currentProduct.product) {
            const getRelatedProducts = async (idProduct, collectionCode) => {
                const res = await fetchGetRelatedProducts(
                    idProduct,
                    collectionCode
                );
                setRelatedProducts(res?.data?.listRelatedProducts);
            };
            getRelatedProducts(
                currentProduct.product?._id,
                currentProduct.product?.collectCode
            );
        }
    }, [currentProduct.product]);

    const handleSelectSize = (e) => {
        const { value } = e.target;
        setSelectSize(Number(value));
        // set quantity
        setSelectQuantity(Number(1));
    };

    const handleClick = () => {
        if (selectSize === null) {
            toast.info('Please choose a size first', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    const checkInteger = (value) => {
        const regex = /^[0-9]*$/;
        if (regex.test(value)) return true;
        return false;
    };

    const handleChangeQuantity = (e) => {
        const { value } = e.target;

        if (
            value < 1 ||
            value > quantityBySelectedSize ||
            !checkInteger(value)
        ) {
            toast.error('Please choose the right quantity', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            setSelectQuantity(Number(value));
        }
    };

    const handlePlusQuantity = () => {
        if (selectQuantity < quantityBySelectedSize) {
            setSelectQuantity((prev) => prev + 1);
        }
    };

    const handleMinusQuantity = () => {
        if (selectQuantity > 1) {
            setSelectQuantity((prev) => prev - 1);
        }
    };

    const handleAddToCart = () => {
        if (selectSize === null) {
            return toast.error('Please choose the right size and quantity', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }

        const { colors, ...product } = currentProduct.product;

        const productOrigin = { ...product, color: colors[0] };

        const addToCart = async () => {
            try {
                await dispatch(
                    fetchAddToCart({
                        product: productOrigin,
                        size: selectSize,
                        count: selectQuantity,
                    })
                );

                toast.success('Add product to cart successful', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } catch (err) {
                console.log(err);
            }
        };
        addToCart();

        // console.log(product);
        // console.log(selectedSize);
        // console.log(selectQuantity);
    };

    // console.log(selectSize);

    return currentProduct.loading ? (
        <Loading />
    ) : (
        <Container>
            <BreadCrumb />
            <ProductDetailContainer>
                <ImageContainer>
                    <ImagePrimaryContainer>
                        <Image
                            alt='img'
                            src={currentProduct.product?.primaryImages?.[0].img}
                        />
                    </ImagePrimaryContainer>
                    <ImageSecondary>
                        <ListImage
                            listImages={currentProduct.product?.secondaryImages}
                        />
                    </ImageSecondary>
                </ImageContainer>
                <InformationContainer>
                    <Name>{currentProduct.product?.productName}</Name>
                    <HeaderInformationContainer>
                        <CodeProduct>
                            Mã sản phẩm:{' '}
                            <strong style={{ fontWeight: 'bold' }}>
                                {currentProduct.product?._id}
                            </strong>
                        </CodeProduct>
                        <StateProduct>
                            Tình trạng:{' '}
                            <strong style={{ fontWeight: 'bold' }}>
                                {currentProduct.product?.stateCode}
                            </strong>
                        </StateProduct>
                    </HeaderInformationContainer>
                    <PriceContainer>
                        {currentProduct.product?.newPrice ? (
                            <>
                                <PriceNew>
                                    {currentProduct.product?.newPrice} vnđ
                                </PriceNew>
                                <PriceOld>
                                    {currentProduct.product?.price} vnđ
                                </PriceOld>
                            </>
                        ) : (
                            <PriceNew color='gray'>
                                {currentProduct.product?.price} vnđ
                            </PriceNew>
                        )}
                    </PriceContainer>
                    <DescriptionContainer>
                        {currentProduct.product?.productDescription}
                    </DescriptionContainer>
                    <ColorContainer>
                        Color
                        {currentProduct.product?.colors.map((color, index) => {
                            if (color.id) {
                                return (
                                    <Link
                                        to={`/products/${color.id}`}
                                        key={index}
                                    >
                                        <Color
                                            background={color.valueColor}
                                        ></Color>
                                    </Link>
                                );
                            } else {
                                return (
                                    <Color
                                        key={index}
                                        background={color.valueColor}
                                        selected
                                    ></Color>
                                );
                            }
                        })}
                    </ColorContainer>
                    <DetailContainer>
                        <SizeContainer>
                            Size{' '}
                            {listSize.map((item) => (
                                <Size
                                    key={item}
                                    value={item}
                                    onClick={(e) => handleSelectSize(e)}
                                    selected={
                                        Number(selectSize) === Number(item)
                                    }
                                >
                                    {item}
                                </Size>
                            ))}
                        </SizeContainer>
                        <QuantityContainer onClick={handleClick}>
                            Quantity
                            <Quantity>
                                <Arrow
                                    onClick={handleMinusQuantity}
                                    disabled={
                                        selectSize === null ||
                                        selectQuantity <= 1
                                    }
                                >
                                    <AiOutlineMinus />
                                </Arrow>
                                <Input
                                    value={selectQuantity}
                                    onChange={(e) => handleChangeQuantity(e)}
                                    disabled={selectSize === null}
                                />
                                <Arrow
                                    onClick={handlePlusQuantity}
                                    disabled={
                                        selectSize === null ||
                                        selectQuantity >= quantityBySelectedSize
                                    }
                                >
                                    <AiOutlinePlus />
                                </Arrow>
                            </Quantity>
                            {quantityBySelectedSize
                                ? `Have only ${quantityBySelectedSize} in stock`
                                : null}
                        </QuantityContainer>
                    </DetailContainer>
                    <ButtonContainer>
                        <ButtonCart onClick={handleAddToCart}>
                            Add to cart
                        </ButtonCart>
                        <ButtonCheckout>Checkout</ButtonCheckout>
                    </ButtonContainer>
                    <SubInformationContainer></SubInformationContainer>
                </InformationContainer>
            </ProductDetailContainer>
            <CommentContainer></CommentContainer>
            {relatedProducts.length >= 4 ? (
                <RelatedProductsContainer>
                    <Title>
                        <Decor />
                        Related Products
                    </Title>
                    <ListProducts listProducts={relatedProducts} />
                </RelatedProductsContainer>
            ) : undefined}
            <RecentlyViewedProducts>
                {/* <h1>Recently Viewed Products</h1> */}
                {/* <ListProducts listProducts={[1, 1, 1, 1, 1, 1, 1, 1]} /> */}
            </RecentlyViewedProducts>
        </Container>
    );
};

export default Product;
