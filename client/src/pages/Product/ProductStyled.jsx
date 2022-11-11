import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 80rem;
    margin: 1rem auto;
    gap: 1rem;
`;

const ProductDetailContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 5rem;
`;

const ImageContainer = styled.div`
    display: flex;
    /* align-items: center; */
    justify-content: center;
    flex-direction: column;
    position: relative;
    gap: 2rem;
    margin: 0 1rem;
`;

const ImagePrimaryContainer = styled.div`
    position: relative;
    /* height: 33em; */
    border-radius: 1rem;
    overflow: hidden;
    padding-top: 100%;
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
    border-radius: 1rem;
    overflow: hidden;
    background: var(--gray-color-light);
`;

const InformationContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 1.5rem;
    margin: 0 1rem;
`;

const Name = styled.h1`
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
const ColorContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`;
const DetailContainer = styled.div``;
const SizeContainer = styled.div``;
const QuantityContainer = styled.div``;
const ButtonContainer = styled.div``;
const ButtonCart = styled.button``;
const ButtonCheckout = styled.button``;
const SubInformationContainer = styled.div``;
const CommentContainer = styled.div``;
const RelatedProductsContainer = styled.div`
    margin: 0 1rem 5rem;
`;
const RecentlyViewedProducts = styled.div``;

const Title = styled.h1`
    font-size: 2rem;
    font-weight: 600;
    padding: 0 2rem;
    position: relative;
    margin-bottom: 2rem;

    @media only screen and (max-width: 1024px) and (min-width: 768px) {
        font-size: 1.75rem;
    }

    @media only screen and (max-width: 767px) {
        font-size: 1.5625rem;
    }
`;

const Decor = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 0.8rem;
    height: 80%;
    background: linear-gradient(var(--primary-color), var(--secondary-color));
    border-radius: 4px;
`;

const Color = styled.div`
    width: 1rem;
    height: 1rem;
    background: ${(props) => props?.background};
    outline: ${(props) => (props.selected ? "2px solid black" : undefined)};
    padding: 0.5rem;
    border-radius: 50%;
`;

export {
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
    Color,
};
