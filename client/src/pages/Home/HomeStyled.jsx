import styled, { css } from 'styled-components';

const Section = styled.section`
    max-width: 80rem;
    margin: 3.125rem auto 6.25rem;

    @media only screen and (max-width: 1024px) and (min-width: 768px) {
        margin: 2.5rem 1rem 5rem;
    }

    @media only screen and (max-width: 767px) {
        margin: 1.875rem 0.5rem 3.75rem;
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

const ServicesContainer = styled.div`
    padding: 3rem 0;
    margin-bottom: 6.25rem;
    background: var(--secondary-color);
`;

const ServicesWrapper = styled.div`
    max-width: 80rem;
    margin: 0 auto;
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
            flex-wrap: wrap;

            @media only screen and (max-width: 1280px) and (min-width: 1025px) {
                padding: 0 1rem;
            }
        `}
`;

const Title = styled.h1`
    font-size: 2rem;
    font-weight: 600;
    padding: 0 2rem;
    position: relative;

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

const ViewAll = styled.div`
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
    font-size: 2rem;
`;

const BodySection = styled.div`
    display: grid;
    grid-template-columns: ${(props) =>
        props.isLoading ? '1fr' : '1fr 1fr 1fr 1fr'};
    gap: 1rem;

    @media only screen and (max-width: 1024px) and (min-width: 769px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media only screen and (max-width: 768px) and (min-width: 516px) {
        grid-template-columns: 1fr 1fr;
    }

    @media only screen and (max-width: 515px) {
        grid-template-columns: 1fr;
    }
`;

const Footer = styled.footer`
    background-color: var(--secondary-color);
`;

const FooterWrapper = styled.div`
    max-width: 80rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 2fr;
`;

const SectionFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export {
    LayoutCards,
    LayoutBanner,
    Section,
    ServicesContainer,
    ServicesWrapper,
    Service,
    HeaderSection,
    Title,
    Decor,
    ViewAll,
    ContentSection,
    CategoryCard,
    ImageCategory,
    TitleCategory,
    BodySection,
    Footer,
    FooterWrapper,
    SectionFooter,
};
