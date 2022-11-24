import React, { useEffect, useRef } from "react";
import {
    Background,
    Container,
    Header,
    Content,
    Ask,
    ProductImageContainer,
    ProductImage,
    ProductName,
    ProductCode,
    Footer,
    ButtonCancel,
    ButtonConfirm,
} from "./ModalStyled";
import deleteImage from "../../../assets/img/recycling-bin.png";

const Modal = (props) => {
    const { product, allProduct, onCancel, onConfirm } = props;
    const ref = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                onCancel && onCancel();
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, onCancel]);

    if (allProduct)
        return (
            <Background>
                <Container ref={ref}>
                    <Header>Delete all item</Header>
                    <Content>
                        <ProductImageContainer style={{ marginTop: "2rem" }}>
                            <ProductImage src={deleteImage} alt="#" />
                        </ProductImageContainer>
                        <Ask>
                            Are you sure to remove all products in your cart ?
                        </Ask>
                    </Content>
                    <Footer>
                        <ButtonCancel type="button" onClick={onCancel}>
                            Cancel
                        </ButtonCancel>
                        <ButtonConfirm type="button" onClick={onConfirm}>
                            Remove
                        </ButtonConfirm>
                    </Footer>
                </Container>
            </Background>
        );

    return (
        <Background>
            <Container ref={ref}>
                <Header>Delete item</Header>
                <Content>
                    <Ask>
                        Are you sure to remove this product from your cart ?
                    </Ask>
                    <ProductImageContainer>
                        <ProductImage
                            src={product?.product.primaryImages[0].img}
                            alt="#"
                        />
                    </ProductImageContainer>
                    <ProductName>{product?.product.productName}</ProductName>
                    <ProductCode>{`Code: ${product?.product._id}`}</ProductCode>
                </Content>
                <Footer>
                    <ButtonCancel type="button" onClick={onCancel}>
                        Cancel
                    </ButtonCancel>
                    <ButtonConfirm type="button" onClick={onConfirm}>
                        Remove
                    </ButtonConfirm>
                </Footer>
            </Container>
        </Background>
    );
};

export default Modal;
