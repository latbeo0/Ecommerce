import React from "react";
import BreadCrumb from "../../components/Basic/BreadCrumb";
import ListProducts from "../../components/User/ListProducts";
import {
    Container,
    ProductDetailContainer,
    ImageContainer,
    ImagePrimaryContainer,
    Image,
    ImageSecondary,
    InformationContainer,
    Title,
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
} from "./ProductStyled";

const Product = () => {
    return (
        <Container>
            <BreadCrumb />
            <ProductDetailContainer>
                <ImageContainer>
                    <ImagePrimaryContainer>
                        <Image
                            alt="img"
                            src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        />
                    </ImagePrimaryContainer>
                    <ImageSecondary></ImageSecondary>
                </ImageContainer>
                <InformationContainer>
                    <Title>Product Detail 1</Title>
                    <HeaderInformationContainer>
                        <CodeProduct>
                            Mã sản phẩm:{" "}
                            <strong style={{ fontWeight: "bold" }}>
                                A12345
                            </strong>
                        </CodeProduct>
                        <StateProduct>
                            Tình trạng:{" "}
                            <strong style={{ fontWeight: "bold" }}>
                                Sale off
                            </strong>
                        </StateProduct>
                    </HeaderInformationContainer>
                    <PriceContainer>
                        <PriceNew>123.456.789 vnđ</PriceNew>
                        <PriceOld>987.654.321 vnđ</PriceOld>
                    </PriceContainer>
                    <DescriptionContainer>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nostrum voluptatibus vitae laudantium ullam ab
                        omnis quaerat odit, repellat accusantium suscipit esse
                        quod officiis nobis consectetur, magnam ipsa magni?
                        Deleniti, velit.
                    </DescriptionContainer>
                    <ColorContainer>Color</ColorContainer>
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
            <RelatedProductsContainer style={{ margin: "0 1rem" }}>
                <h1>Related Products</h1>
                <ListProducts listProducts={[1, 1, 1, 1, 1, 1, 1, 1]} />
            </RelatedProductsContainer>
            <RecentlyViewedProducts>
                <h1>Recently Viewed Products</h1>
                <ListProducts listProducts={[1, 1, 1, 1, 1, 1, 1, 1]} />
            </RecentlyViewedProducts>
        </Container>
    );
};

export default Product;
