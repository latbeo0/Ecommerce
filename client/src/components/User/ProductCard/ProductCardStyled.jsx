import styled from 'styled-components';

const Container = styled.div`
    border-radius: 5px;
    overflow: hidden;
    position: relative;

    --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
        0 8px 10px -6px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color),
        0 8px 10px -6px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    &:hover > div:first-child > div:last-child {
        display: block;
    }
`;

const ImageContainer = styled.div`
    height: 0;
    padding-top: 100%;
    position: relative;
    overflow: hidden;
`;
const Image = styled.img`
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
    object-position: center;
    user-select: none;
`;

const HeartContainer = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
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
const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
`;
const Header = styled.div``;
const Title = styled.h1`
    font-size: 1rem;
`;
const StarsContainer = styled.div`
    display: flex;
    font-size: 0.875rem;
    font-weight: 500;
    color: gray;
    padding: 1rem 0;
`;
const StarsWrapper = styled.div`
    display: flex;
    margin-right: 0.5rem;
`;
const Body = styled.div``;
const SaleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.875rem;
    font-weight: 500;
    color: gray;
`;
const SaleTag = styled.div`
    padding: 0.2rem 0.5rem;
    background-color: rgba(128, 128, 128, 0.3);
    border-radius: 3px;
`;
const ProductPrice = styled.div`
    margin-top: 0.5rem;
    display: flex;
    flex-direction: column;
`;
const PriceNew = styled.div`
    font-size: 1rem;
    font-weight: 500;
    color: rgb(255, 122, 122);
`;
const PriceOld = styled.div`
    font-size: 0.875rem;
    font-weight: 500;
    color: rgba(128, 128, 128, 0.5);
    text-decoration: line-through;
`;
const Modal = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.5);
    z-index: 1;
    display: none;
`;

const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    height: 100%;

    & > svg {
        width: 55px;
        height: 55px;
        padding: 1rem;
        color: var(--black-color);
        border: 1px solid var(--black-color);
        border-radius: 1rem;
        cursor: pointer;
    }
`;

export {
    Container,
    Wrapper,
    ImageContainer,
    Image,
    HeartContainer,
    Heart,
    Content,
    Header,
    Title,
    StarsContainer,
    StarsWrapper,
    Body,
    SaleContainer,
    SaleTag,
    ProductPrice,
    PriceNew,
    PriceOld,
    Modal,
    ButtonsContainer,
};
