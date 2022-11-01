import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const ProductDetailContainer = styled.div`
    max-width: 80rem;
    margin: 1rem auto 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
`;

const ImageContainer = styled.div`
    display: flex;
    /* align-items: center; */
    justify-content: center;
    flex-direction: column;
    position: relative;
    gap: 2rem;
    margin: 0 1rem 1rem;
`;

const ImagePrimaryContainer = styled.div`
    position: relative;
    height: 33em;
    border-radius: 1rem;
    overflow: hidden;
`;

const Image = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const ImageSecondary = styled.div`
    height: 15em;
    background: var(--gray-color-light);
`;

const InformationContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 1.5rem;
`;

const Title = styled.h1`
    font-size: 1.875rem;
    line-height: 1.4em;
`;

const HeaderInformationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    line-height: 1.4em;
`;
const CodeProduct = styled.div``;
const StateProduct = styled.div``;
const PriceContainer = styled.div``;
const PriceNew = styled.p``;
const PriceOld = styled.p``;
const DescriptionContainer = styled.div``;
const ColorContainer = styled.div``;
const DetailContainer = styled.div``;
const SizeContainer = styled.div``;
const QuantityContainer = styled.div``;
const ButtonContainer = styled.div``;
const ButtonCart = styled.button``;
const ButtonCheckout = styled.button``;
const SubInformationContainer = styled.div``;
const CommentContainer = styled.div``;
const RelatedProductsContainer = styled.div``;
const RecentlyViewedProducts = styled.div``;

export {
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
};
