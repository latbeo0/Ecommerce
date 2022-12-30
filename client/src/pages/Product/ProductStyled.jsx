import styled, { css } from 'styled-components';

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
    gap: 1rem;
`;

const Color = styled.div`
    width: 2rem;
    height: 2rem;
    position: relative;
    background: ${(props) => props?.background};
    border-radius: 50%;

    ${(props) =>
        props.selected
            ? css`
                  border: 1px solid var(--black-color);
                  background: transparent;

                  &::before {
                      content: '';
                      position: absolute;
                      top: 50%;
                      left: 50%;
                      transform: translate(-50%, -50%);
                      width: 80%;
                      height: 80%;
                      border: 1px solid var(--black-color);
                      border-radius: 50%;
                      background: ${(props) => props?.background};
                  }
              `
            : undefined}
`;

const DetailContainer = styled.div``;

const SizeContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const Size = styled.button`
    padding: 0.5rem 1.5rem;
    border: ${(props) =>
        props.selected
            ? '1px solid var(--primary-color)'
            : '1px solid var(--gray-color-light)'};
    background: ${(props) =>
        props.selected || props.disabled
            ? 'var(--secondary-color)'
            : 'transparent'};
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    /* background: ${(props) =>
        props.disabled ? 'var(--secondary-color)' : 'transparent'}; */

    &:hover {
        border: ${(props) =>
            props.disabled ? undefined : '1px solid var(--primary-color)'};
    }
`;

const QuantityContainer = styled.div`
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const Quantity = styled.div`
    display: flex;
    border: 1px solid var(--gray-color-light);
    border-radius: 2rem;
    overflow: hidden;
`;

const Input = styled.input.attrs({
    type: 'number',
})`
    padding: 0.5rem;
    min-width: 2rem;
    max-width: 4rem;
    color: var(--black-color);
    text-align: center;
    border-left: 1px solid var(--gray-color-light);
    border-right: 1px solid var(--gray-color-light);
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    background: ${(props) =>
        props.disabled ? 'var(--gray-color-light)' : 'transparent'};
    transition: all 200ms linear;

    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
        -webkit-appearance: none;
    }
`;

const Arrow = styled.div`
    color: var(--black-color);
    padding: 1rem 1.5rem;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    background: ${(props) =>
        props.disabled ? 'var(--gray-color-light)' : 'transparent'};
    user-select: none;
    transition: all 200ms linear;
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 1rem;
`;

const ButtonCart = styled.button`
    flex: 1;
    padding: 1rem 3rem;
    background: var(--primary-color);
    border-radius: 0.5rem;
    color: var(--white-color);
    font-size: 1rem;
    font-weight: 400;
`;

const ButtonCheckout = styled.button`
    flex: 1;
    padding: 1rem 3rem;
    background: var(--primary-color);
    border-radius: 0.5rem;
    color: var(--white-color);
    font-size: 1rem;
    font-weight: 400;
`;

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

const ReviewContainer = styled.div``;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding: 1rem;
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
    ReviewContainer,
    Wrapper,
};
