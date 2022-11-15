import React from 'react';
import {
    Container,
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
    QuantityContainer,
    Quantity,
    Input,
    Arrow,
    ItemPrice,
    SummaryContainer,
} from './CartFormStyled';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const CartForm = (props) => {
    const { listProducts, subtotal } = props;

    return (
        <>
            <h2
                style={{ textAlign: 'center', margin: 0, marginBottom: '2rem' }}
            >
                Check Form
            </h2>
            {listProducts?.length > 0 ? (
                <Container>
                    <ListProductsContainer>
                        <h1 style={{ marginBottom: '2rem' }}>My Cart</h1>
                        <ListProducts>
                            {listProducts.map((product) => (
                                <ItemCart
                                    key={product.product._id + product.size}
                                >
                                    <ImageContainer>
                                        <Image
                                            src={
                                                product?.product
                                                    .primaryImages[0].img
                                            }
                                            alt='#'
                                        />
                                    </ImageContainer>
                                    <BodyContainer>
                                        <Name>
                                            {product?.product.productName}
                                        </Name>
                                        <Code>
                                            {`Code: ${product?.product._id}`}
                                        </Code>
                                        <Detail>
                                            Color
                                            <Color
                                                background={
                                                    product?.product.color
                                                        .valueColor
                                                }
                                            ></Color>
                                            Size: {product?.size}
                                        </Detail>
                                    </BodyContainer>
                                    <PriceContainer>
                                        {product?.product.newPrice ? (
                                            <>
                                                <PriceNew>
                                                    {product?.product.newPrice}{' '}
                                                    vnd
                                                </PriceNew>
                                                <PriceOld>
                                                    {product?.product.price} vnd
                                                </PriceOld>
                                            </>
                                        ) : (
                                            <PriceNew>
                                                {product?.product.price} vnd
                                            </PriceNew>
                                        )}
                                        <QuantityContainer
                                        // onClick={handleClick}
                                        >
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
                                        have only{' '}
                                        {
                                            product?.product.color.details.find(
                                                (item) =>
                                                    item.size === product?.size
                                            ).quantity
                                        }{' '}
                                        in stock
                                        <ItemPrice>
                                            {product?.product.newPrice
                                                ? product?.product.newPrice *
                                                  product?.count
                                                : product?.product.price *
                                                  product?.count}
                                        </ItemPrice>
                                    </PriceContainer>
                                </ItemCart>
                            ))}
                        </ListProducts>
                    </ListProductsContainer>
                    <SummaryContainer>
                        <h1 style={{ marginBottom: '2rem' }}>Summary</h1>
                        <p>Subtotal: {subtotal}</p>
                        <p>Deliver: </p>
                        <p>Discounts: </p>
                        <p>Total: {subtotal}</p>
                    </SummaryContainer>
                </Container>
            ) : (
                <div>No thing in cart</div>
            )}
        </>
    );
};

export default CartForm;
