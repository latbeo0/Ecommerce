import styled from "styled-components";
import Section from "../../Basic/Section";

const Container = styled.footer`
    background-color: var(--secondary-color);
`;

const Wrapper = styled.div`
    max-width: 80rem;
    margin: 0 auto;
    padding: 0 2rem;

    @media only screen and (max-width: 1024px) and (min-width: 768px) {
        padding: 0 1.5rem;
    }

    @media only screen and (max-width: 767px) {
        padding: 0 1rem;
    }
`;

const Content = styled.div`
    padding: 5rem 0;
    border-bottom: 1px solid var(--gray-color-light);
    display: grid;
    grid-template-columns: 3fr 2fr;

    @media only screen and (max-width: 1024px) {
        grid-template-columns: unset;
        gap: 4rem;
        padding: 4rem 0;
    }
`;

const SectionsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    @media only screen and (max-width: 768px) {
        display: none;
    }
`;

const SectionItem = styled(Section)``;

const MobileSection = styled.div`
    display: none;

    @media only screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`;

const MobileSectionItem = styled.div`
    /* border: 1px solid var(--gray-color-light);
    border-radius: 0.5rem;
    padding: 1rem;
    background: var(--white-color); */
`;

const Header = styled.div`
    border: 1px solid var(--gray-color-light);
    border-radius: 0.5rem;
    padding: 1rem;
    background: var(--white-color);
    position: relative;
    cursor: pointer;
`;

const Text = styled.p`
    font-size: 1rem;
    font-weight: 500;
`;

const IconContainer = styled.div`
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;

    & > * {
        width: 100%;
        height: 100%;
    }
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
    margin-top: 0.5rem;

    border: 1px solid var(--gray-color-light);
    border-radius: 0.5rem;
    background: var(--white-color);
    position: relative;

    opacity: 0;
    max-width: 0;
    padding: 0;
    margin-top: 0;
    display: none;
`;

const ItemSub = styled.div`
    padding: 0 1rem;
    border-radius: 0.5rem;
    display: flex;

    &:hover {
        cursor: pointer;
        background: var(--gray-color-light);
    }

    & > * {
        padding: 0.2rem 0;
        flex: 1;
    }
`;

const NewsletterContainer = styled.div``;

const NewsletterWrapper = styled.div`
    max-width: fit-content;
    margin-left: auto;

    @media only screen and (max-width: 1024px) {
        max-width: 100%;
        margin-left: unset;
    }
`;

const Title = styled.p`
    font-size: 0.875rem;
    font-weight: 500;
    color: rgb(17 24 39);
    margin-bottom: 1rem;

    @media only screen and (max-width: 1024px) {
        font-size: 1rem;
    }
`;

const Description = styled.p`
    font-size: 0.875rem;
    line-height: 1.5rem;
    color: rgb(107 114 128);

    @media only screen and (max-width: 1024px) {
        font-size: 1rem;
    }
`;

const InputButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
    margin: 1rem 0;

    @media only screen and (max-width: 1024px) {
        justify-content: flex-start;
        flex-wrap: wrap;
    }
`;

const Input = styled.input`
    font-size: 0.875rem;
    line-height: 1.5rem;
    border: 1px solid var(--gray-color-light);
    border-radius: 0.3rem;
    min-width: 265px;
    padding: 0.5rem;

    @media only screen and (max-width: 1024px) {
        min-width: 200px;
        flex: 1;
        font-size: 1rem;
    }
`;

const Button = styled.button`
    font-size: 0.875rem;
    line-height: 1.5rem;
    border-radius: 0.3rem;
    padding: 0.5rem 1.5rem;
    background-color: var(--primary-color);
    color: var(--white-color);
    /* display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap; */
`;

const TitleFollowUs = styled.p`
    font-size: 0.875rem;
    font-weight: 500;
    color: rgb(17 24 39);
    margin: 1rem 0;

    @media only screen and (max-width: 1024px) {
        font-size: 1rem;
        margin: 3rem 0 1rem;
    }
`;

const ButtonsSocialContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
`;

const LinkButton = styled.a``;

const ButtonIconSocial = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary-color);
    padding: 0.5rem;
    border-radius: 0.3rem;

    @media only screen and (max-width: 1024px) {
        padding: 0.7rem;
    }
`;

const ImageSocial = styled.img`
    width: 1rem;
    height: 1rem;
    object-fit: cover;
`;

const CopyRight = styled.div`
    font-size: 0.9375rem;
    font-weight: 400;
    color: var(--black-color);
    padding: 2rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export {
    Container,
    Wrapper,
    Content,
    SectionsContainer,
    SectionItem,
    MobileSection,
    MobileSectionItem,
    Header,
    Text,
    IconContainer,
    Body,
    ItemSub,
    NewsletterContainer,
    NewsletterWrapper,
    Title,
    Description,
    InputButton,
    Input,
    Button,
    TitleFollowUs,
    ButtonsSocialContainer,
    LinkButton,
    ImageSocial,
    ButtonIconSocial,
    CopyRight,
};
