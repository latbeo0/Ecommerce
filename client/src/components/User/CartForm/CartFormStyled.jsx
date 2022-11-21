import styled from 'styled-components';

const ListProductsContainer = styled.div`
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
`;

const ListProducts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    gap: 2rem;
`;

const ItemCart = styled.div`
    /* display: grid;
    grid-template-columns: 1fr 2fr 2fr;
    border: 1px solid var(--gray-color-light);
    border: 1px solid var(--primary-color-border);
    border-radius: 1rem;
    overflow: hidden;
    width: 100%; */
    display: flex;
    border: 1px solid var(--gray-color-light);
    border-radius: 0.5rem;
    overflow: hidden;
    /* align-items: stretch;
    justify-content: stretch; */
`;

const ImageContainer = styled.div`
    position: relative;
    /* padding-top: 100%; */
    width: 12.5rem;
    height: 12.5rem;
    border-radius: 0.5rem;
    overflow: hidden;
`;

const Image = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const BodyContainer = styled.div`
    flex: 1;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const Name = styled.h1`
    font-size: 1.25rem;
    font-weight: 500;
`;

const Code = styled.p`
    font-size: 0.875rem;
    font-weight: 400;
`;

const Detail = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    font-weight: 400;
`;

const Color = styled.div`
    width: 2rem;
    height: 2rem;
    position: relative;
    border-radius: 50%;
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
`;

const PriceContainer = styled.div`
    display: inline-flex;
    align-items: baseline;
    gap: 0.5rem;
    font-size: 0.875rem;
    font-weight: 400;
`;

const PriceOld = styled.p`
    font-size: 0.875rem;
    font-weight: 300;
    color: var(--gray-color);
    text-decoration: line-through;
`;

const PriceNew = styled.p`
    font-size: 0.875rem;
    font-weight: 400;
    color: var(--black-color);
`;

const FooterContainer = styled.div``;

const QuantityContainer = styled.div`
    margin-top: 0.5rem;
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
    padding: 0.5rem 1rem;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    background: ${(props) =>
        props.disabled ? 'var(--gray-color-light)' : 'transparent'};
    user-select: none;
    transition: all 200ms linear;
    align-self: center;
`;

const ItemPrice = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: var(--black-color);
    margin-top: 0.5rem;
`;

export {
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
};
