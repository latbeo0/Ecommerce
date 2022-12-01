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
import clearImage from "../../../assets/img/broken-heart-png-clipart-2.png";
import uploadImage from "../../../assets/img/plus.png";
import ImageUploading from "react-images-uploading";

const Modal = (props) => {
    const {
        product,
        allProduct,
        wishList,
        avatar,
        maxNumber,
        onCancel,
        onChange,
        onConfirm,
    } = props;
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

    if (avatar)
        return (
            <Background>
                <Container ref={ref}>
                    <Header variant="change">Change avatar</Header>
                    <Content>
                        <ImageUploading
                            value={avatar}
                            onChange={onChange}
                            maxNumber={maxNumber}
                            dataURLKey="data_url"
                            acceptType={["jpg", "png"]}
                        >
                            {({
                                imageList,
                                onImageUpload,
                                onImageRemoveAll,
                                onImageUpdate,
                                onImageRemove,
                                isDragging,
                                dragProps,
                            }) => (
                                // write your building UI
                                <>
                                    <ProductImageContainer
                                        avatar
                                        style={{
                                            marginTop: "2rem",
                                        }}
                                        onClick={onImageUpload}
                                        {...dragProps}
                                    >
                                        <ProductImage
                                            src={
                                                imageList.length !== 0
                                                    ? imageList[0].data_url
                                                    : uploadImage
                                            }
                                            alt="#"
                                        />
                                    </ProductImageContainer>
                                    {imageList.length !== 0 ? (
                                        <button
                                            onClick={() => onImageRemove(0)}
                                        >
                                            Clear image
                                        </button>
                                    ) : (
                                        <span>Click or Drop here</span>
                                    )}
                                    {/* <div className="upload__image-wrapper">
                                        {imageList.map((image, index) => (
                                            <div
                                                key={index}
                                                className="image-item"
                                            >
                                                <img
                                                    src={image.data_url}
                                                    alt=""
                                                    width="100"
                                                />
                                                <div className="image-item__btn-wrapper">
                                                    <button
                                                        onClick={() =>
                                                            onImageUpdate(index)
                                                        }
                                                    >
                                                        Update
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            onImageRemove(index)
                                                        }
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div> */}
                                </>
                            )}
                        </ImageUploading>
                        {/* <label htmlFor="mediaFile">
                            <ProductImageContainer
                                avatar
                                style={{ marginTop: "2rem" }}
                                id="avatar"
                            >
                                <ProductImage src={uploadImage} alt="#" />
                            </ProductImageContainer>
                        </label>
                        <input type="file" id="mediaFile" /> */}
                        <Ask>
                            Maximum file size: 1 MB <br /> Format: .JPG, .PNG
                        </Ask>
                    </Content>
                    <Footer>
                        <ButtonCancel type="button" onClick={onCancel}>
                            Cancel
                        </ButtonCancel>
                        <ButtonConfirm
                            variant="avatar"
                            type="button"
                            onClick={onConfirm}
                        >
                            Change
                        </ButtonConfirm>
                    </Footer>
                </Container>
            </Background>
        );

    if (wishList)
        return (
            <Background>
                <Container ref={ref}>
                    <Header>Clear all item</Header>
                    <Content>
                        <ProductImageContainer style={{ marginTop: "2rem" }}>
                            <ProductImage src={clearImage} alt="#" />
                        </ProductImageContainer>
                        <Ask>
                            Are you sure to clear all products in your wishlist
                            ?
                        </Ask>
                    </Content>
                    <Footer>
                        <ButtonCancel type="button" onClick={onCancel}>
                            Cancel
                        </ButtonCancel>
                        <ButtonConfirm type="button" onClick={onConfirm}>
                            Clear
                        </ButtonConfirm>
                    </Footer>
                </Container>
            </Background>
        );

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
