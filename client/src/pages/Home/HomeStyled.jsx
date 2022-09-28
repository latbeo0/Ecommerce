import styled, { css } from 'styled-components';

const Section = styled.section`
    max-width: 80rem;
    margin: 3.125rem auto;

    @media only screen and (max-width: 1024px) and (min-width: 768px) {
        margin: 2rem 1rem;
    }

    @media only screen and (max-width: 767px) {
        margin: 1rem 0.5rem;
    }
`;

const LayoutBanner = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 1.875rem;

    @media only screen and (max-width: 1024px) {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
`;

const LayoutCards = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;

    @media only screen and (max-width: 1024px) and (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
`;

const Services = styled.div`
    margin: 6.25rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2rem;

    @media only screen and (max-width: 1024px) and (min-width: 601px) {
        gap: 1rem;
        grid-template-columns: 1fr 1fr;
    }

    @media only screen and (max-width: 600px) {
        grid-template-columns: 1fr 1fr;
        gap: 0.5rem;
    }
`;

const Service = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 1rem;
    font-weight: 500;
    padding: 1rem;
    color: var(--white-color);
    background-color: var(--primary-color);

    & > svg {
        color: var(--white-color);
        width: 3.125rem;
        height: 3.125rem;
    }

    @media only screen and (max-width: 767px) {
        font-size: 0.875rem;

        & > svg {
            width: 2.5rem;
            height: 2.5rem;
        }
    }
`;

const HeaderSection = styled.div`
    ${(props) =>
        props.type === 'categories' &&
        css`
            display: flex;
            align-items: baseline;
            justify-content: space-between;

            @media only screen and (max-width: 1280px) and (min-width: 1025px) {
                padding: 0 1rem;
            }
        `}
`;

const Title = styled.h1`
    font-size: 2rem;
    font-weight: 600;

    @media only screen and (max-width: 1024px) and (min-width: 768px) {
        font-size: 1.75rem;
    }

    @media only screen and (max-width: 767px) {
        font-size: 1.5625rem;
    }
`;

const ViewAll = styled.a`
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 0.9375rem;
    font-weight: 500;
    color: var(--primary-color);
    cursor: pointer;
    margin-bottom: 2rem;

    @media only screen and (max-width: 1024px) and (min-width: 768px) {
        font-size: 0.875rem;
    }

    @media only screen and (max-width: 767px) {
        font-size: 0.8125rem;
    }
`;

const Description = styled.span``;

const ContentSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    cursor: pointer;

    @media only screen and (max-width: 1024px) and (min-width: 601px) {
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }

    @media only screen and (max-width: 600px) {
        grid-template-columns: 1fr;
        gap: 0.5rem;
    }
`;

const CategoryCard = styled.div`
    height: 500px;
    position: relative;
    border-radius: 1rem;
    overflow: hidden;

    @media only screen and (max-width: 1024px) and (min-width: 601px) {
        height: 450px;
    }

    @media only screen and (max-width: 600px) {
        height: 400px;
    }
`;

const ImageCategory = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`;

const TitleCategory = styled.h1`
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    color: var(--white-color);
`;

const BodySection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;
`;
const Product = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    overflow: hidden;
    position: relative;

    --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
        0 8px 10px -6px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color),
        0 8px 10px -6px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

    &:hover > div:nth-child(3) {
        display: flex;
    }
`;
const ProductImage = styled.div`
    height: 300px;
    position: relative;
    overflow: hidden;
`;
const HeartContainer = styled.div`
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    padding: 0.5rem;
    /* border: 1px solid #ff696a; */
    border-radius: 12px;
    /* background-color: #fff0f1; */

    & > img {
        /* color: #ff696a;
        color: #fff0f1; */
        width: 25px;
        height: 25px;
    }
`;
const Image = styled.img`
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
    object-position: center;
`;
const ProductContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
`;
const ProductContentHeader = styled.div``;
const ProductTitle = styled.h1`
    font-size: 1rem;
`;
const ProductStars = styled.div`
    display: flex;
    font-size: 0.875rem;
    font-weight: 500;
    color: gray;
    padding: 1rem 0;
`;
const ProductStar = styled.div`
    display: flex;
    margin-right: 0.5rem;
`;
const ProductContentBody = styled.div``;
const ProductSale = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.875rem;
    font-weight: 500;
    color: gray;
`;
const Sale = styled.div`
    padding: 0.2rem 0.5rem;
    background-color: rgba(128, 128, 128, 0.3);
    border-radius: 3px;
`;
const ProductPrice = styled.div`
    margin-top: 0.5rem;
    display: flex;
    flex-direction: column;
`;
const PriceOld = styled.div`
    font-size: 0.875rem;
    font-weight: 500;
    color: rgba(128, 128, 128, 0.5);
    text-decoration: line-through;
`;
const PriceNew = styled.div`
    font-size: 1rem;
    font-weight: 500;
    color: rgb(255, 122, 122);
`;
const ProductContentFooter = styled.div`
    position: absolute;
    top: 232px;
    height: 60px;
    left: 0;
    right: 0;
    margin: 0 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: var(--primary-color-border);
    color: var(--white-color);
    display: none;
    z-index: 1;
`;
const ProductButton = styled.span``;
const Footer = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 2fr;
`;
const GetInTouch = styled.div`
    display: flex;
    flex-direction: column;
`;
const TitleFooter = styled.h1``;

export {
    Section,
    LayoutBanner,
    LayoutCards,
    Services,
    Service,
    HeaderSection,
    Title,
    ViewAll,
    Description,
    ContentSection,
    CategoryCard,
    ImageCategory,
    TitleCategory,
    BodySection,
    Product,
    ProductImage,
    HeartContainer,
    Image,
    ProductContent,
    ProductContentHeader,
    ProductTitle,
    ProductStars,
    ProductStar,
    ProductContentBody,
    ProductSale,
    Sale,
    ProductPrice,
    PriceOld,
    PriceNew,
    ProductContentFooter,
    ProductButton,
    Footer,
    GetInTouch,
    TitleFooter,
};
