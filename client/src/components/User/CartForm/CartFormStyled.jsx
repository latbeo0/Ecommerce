import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 2rem;
`;

const ListProductsContainer = styled.div`
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
`;

const ListProducts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2rem;
`;

const ItemCart = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 2fr;
    border: 1px solid var(--gray-color-light);
    /* border: 1px solid var(--primary-color-border); */
    border-radius: 1rem;
    overflow: hidden;
    width: 100%;
`;

const ImageContainer = styled.div`
    position: relative;
    padding-top: 100%;
    border-radius: 1rem;
    overflow: hidden;
`;

const Image = styled.img`
    position: absolute;
    top: 0;
    left: 0;
`;

const BodyContainer = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const Name = styled.h1``;

const Code = styled.p``;

const Detail = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

const Color = styled.div`
    width: 2rem;
    height: 2rem;
    position: relative;
    background: ${(props) => props?.background};
    border-radius: 50%;
`;

const PriceContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const PriceOld = styled.p`
    font-size: 14px;
    font-weight: 300;
    color: var(--gray-color);
    text-decoration: line-through;
`;

const PriceNew = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: var(--black-color);
`;

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

const SummaryContainer = styled.div`
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    height: fit-content;
`;

export {
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
};
