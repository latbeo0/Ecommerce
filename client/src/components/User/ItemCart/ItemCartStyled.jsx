import styled from 'styled-components';

const Container = styled.div`
    /* display: grid;
    grid-template-columns: 1fr 2fr 2fr;
    border: 1px solid var(--gray-color-light);
    border: 1px solid var(--primary-color-border);
    border-radius: 1rem;
    overflow: hidden;
    width: 100%; */
    display: flex;
    /* border: 1px solid var(--gray-color-light); */
    border: ${(props) =>
        props.isSelect
            ? '1px solid var(--primary-color-border)'
            : '1px solid var(--gray-color-light)'};
    border-radius: 0.5rem;
    overflow: hidden;
    position: relative;
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
    user-select: none;
`;

const HeartContainer = styled.div`
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    padding: 0.5rem;
    border-radius: 12px;
    cursor: pointer;
    /* border: 1px solid rgba(255, 107, 108, 0.1); */
    background-color: ${(props) => props.isHeart && '#fff0f1'};

    & > img {
        width: 25px;
        height: 25px;
    }

    &:hover {
        background-color: #fff0f1;
    }
`;

const Heart = styled.img`
    user-select: none;
    /* position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%; */
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

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2rem 2rem 0 0;
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
    padding: 0.25rem;
    min-width: 2rem;
    max-width: 3rem;
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

const ToolContainer = styled.div`
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    right: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    pointer-events: none;
`;

const CheckContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    padding: 0.5rem;
    border: ${(props) =>
        props.isSelect
            ? '1px solid var(--primary-color-border)'
            : '1px solid var(--gray-color-light)'};
    border-radius: 50%;
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    pointer-events: auto;

    & > svg {
        width: 1rem;
        height: 1rem;
        /* color: var(--gray-color-light); */
        color: var(--primary-color-border);
        user-select: none;
    }
`;

const DeleteContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    padding: 0.5rem;
    border-radius: 12px;
    background-color: rgba(255, 0, 0, 0.05);
    cursor: pointer;
    pointer-events: auto;

    & > svg {
        width: 25px;
        height: 25px;
        color: var(--red-color);
        user-select: none;
    }

    &:hover {
        background-color: rgba(255, 0, 0, 0.1);
    }
`;

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    /* width: 500px;
    height: 500px; */
    background: rgba(0, 0, 0, 0.2);
    z-index: 1000;
`;

const Modal = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 500px;
    background: red;
`;

const Content = styled.div``;

export {
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
    Background,
    Modal,
};
