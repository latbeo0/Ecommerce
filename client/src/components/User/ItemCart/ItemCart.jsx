import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FiCheck } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { formatCurrencyVND } from "../../../utils/format";
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
} from "./ItemCartStyled";
import heartIcon1 from "../../../assets/img/heart (1).png";
import heartIcon2 from "../../../assets/img/heart (2).png";

const ItemCart = (props) => {
    const { product } = props;

    const selectQuantity = product?.count;

    const quantityBySelectedSize = product?.product.color.details.find(
        (item) => item.size === product?.size
    ).quantity;

    const [isHeart, setIsHeart] = useState(false);

    const handlePlusQuantity = () => {
        if (selectQuantity < quantityBySelectedSize) {
            // setSelectQuantity((prev) => prev + 1);
            console.log("plus");
        }
    };

    const handleMinusQuantity = () => {
        if (selectQuantity > 1) {
            // setSelectQuantity((prev) => prev - 1);
            console.log("minus");
        }
    };

    return (
        <Container key={product.product._id + product.size}>
            <ImageContainer>
                <Image src={product?.product.primaryImages[0].img} alt="#" />
                <HeartContainer
                    isHeart={isHeart}
                    onClick={() => setIsHeart(!isHeart)}
                >
                    <Heart src={isHeart ? heartIcon1 : heartIcon2} alt="img" />
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
                have only{" "}
                {
                    product?.product.color.details.find(
                        (item) => item.size === product?.size
                    ).quantity
                }{" "}
                in stock
                <QuantityContainer>
                    <Quantity>
                        <Arrow
                            onClick={handleMinusQuantity}
                            disabled={selectQuantity <= 1}
                        >
                            <AiOutlineMinus />
                        </Arrow>
                        <Input
                            value={selectQuantity}
                            // value={product?.count}
                            onChange={() => {}}
                        />
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
                <CheckContainer>
                    <FiCheck style={{ fontSize: "1rem" }} />
                </CheckContainer>
                <DeleteContainer>
                    <IoClose />
                </DeleteContainer>
            </ToolContainer>
        </Container>
    );
};

export default ItemCart;
