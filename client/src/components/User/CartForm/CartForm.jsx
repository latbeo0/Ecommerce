import React from 'react';
import {
    ListProductsContainer,
    ListProducts,
    ItemCart,
    ImageContainer,
    Image,
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
} from './CartFormStyled';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { formatCurrencyVND } from './../../../utils/format';

const CartForm = (props) => {
    const { listProducts } = props;

    return listProducts?.length > 0 ? (
        <ListProductsContainer>
            <h1 style={{ marginBottom: '2rem' }}>My Cart</h1>
            <ListProducts>
                {listProducts.map((product) => (
                    <ItemCart key={product.product._id + product.size}>
                        <ImageContainer>
                            <Image
                                src={product?.product.primaryImages[0].img}
                                alt='#'
                            />
                        </ImageContainer>
                        <BodyContainer>
                            <Name>{product?.product.productName}</Name>
                            <Code>{`Code: ${product?.product._id}`}</Code>
                            <PriceContainer>
                                Price:
                                {product?.product.newPrice ? (
                                    <>
                                        <PriceNew>
                                            {formatCurrencyVND(
                                                product?.product.newPrice
                                            )}
                                        </PriceNew>
                                        <PriceOld>
                                            {formatCurrencyVND(
                                                product?.product.price
                                            )}
                                        </PriceOld>
                                    </>
                                ) : (
                                    <PriceNew>
                                        {formatCurrencyVND(
                                            product?.product.price
                                        )}
                                    </PriceNew>
                                )}
                            </PriceContainer>
                            <Detail>
                                Color
                                <Color
                                    background={
                                        product?.product.color.valueColor
                                    }
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
                                    <Arrow
                                    // onClick={handleMinusQuantity}
                                    // disabled={
                                    //     selectSize === null ||
                                    //     selectQuantity <= 1
                                    // }
                                    >
                                        <AiOutlineMinus />
                                    </Arrow>
                                    <Input
                                        value={product?.count}
                                        onChange={() => {}}
                                        // disabled={selectSize === null}
                                    />
                                    <Arrow
                                    // onClick={handlePlusQuantity}
                                    // disabled={
                                    //     selectSize === null ||
                                    //     selectQuantity >= quantityBySelectedSize
                                    // }
                                    >
                                        <AiOutlinePlus />
                                    </Arrow>
                                </Quantity>
                            </QuantityContainer>
                            <ItemPrice>
                                {product?.product.newPrice
                                    ? formatCurrencyVND(
                                          product?.product.newPrice *
                                              product?.count
                                      )
                                    : formatCurrencyVND(
                                          product?.product.price *
                                              product?.count
                                      )}
                            </ItemPrice>
                        </FooterContainer>
                    </ItemCart>
                ))}
            </ListProducts>
        </ListProductsContainer>
    ) : (
        <div>No thing in cart</div>
    );
};

export default CartForm;
