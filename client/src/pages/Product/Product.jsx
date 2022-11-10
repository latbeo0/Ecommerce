import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import BreadCrumb from '../../components/Basic/BreadCrumb';
import ListProducts from '../../components/User/ListProducts';
import {
    fetchGetProductById,
    fetchGetRelatedProducts,
} from '../../services/productFetch';

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
    DetailContainer,
    SizeContainer,
    QuantityContainer,
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

const Product = () => {
    const { codeProduct } = useParams();

    const [currentProduct, setCurrentProduct] = useState({
        loading: true,
        product: null,
        error: false,
    });
    const [relatedProducts, setRelatedProducts] = useState([]);
    // const {
    //     _id,
    //     stateCode,
    //     productName,
    //     productDescription,
    //     price,
    //     newPrice,
    //     colors,
    //     primaryImages,
    //     secondaryImages,
    // } = !!!currentProduct;

    useEffect(() => {
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

    console.log(currentProduct.product);

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
                                        <div>{color.valueColor}</div>
                                    </Link>
                                );
                            } else {
                                return (
                                    <div key={index}>{color.valueColor}</div>
                                );
                            }
                        })}
                    </ColorContainer>
                    <DetailContainer>
                        <SizeContainer>Size</SizeContainer>
                        <QuantityContainer>Quantity</QuantityContainer>
                    </DetailContainer>
                    <ButtonContainer>
                        <ButtonCart>Add to cart</ButtonCart>
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
