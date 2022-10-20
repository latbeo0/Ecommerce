import styled from 'styled-components';

const Container = styled.footer`
    background-color: var(--secondary-color);
`;

const Wrapper = styled.div`
    max-width: 80rem;
    margin: 0 auto;
    padding: 0 2rem;
`;

const SectionsContainer = styled.div`
    padding: 5rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 2fr;
    border-bottom: 1px solid var(--gray-color-light);
`;

const NewsletterContainer = styled.div``;

const NewsletterWrapper = styled.div`
    max-width: fit-content;
    margin-left: auto;
`;

const Title = styled.p`
    font-size: 0.875rem;
    font-weight: 500;
    color: rgb(17 24 39);
    margin-bottom: 1rem;
`;

const Description = styled.p`
    font-size: 0.875rem;
    line-height: 1.5rem;
    color: rgb(107 114 128);
`;

const InputButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 1rem 0;
`;

const Input = styled.input`
    font-size: 0.875rem;
    line-height: 1.5rem;
    border: 1px solid var(--gray-color-light);
    border-radius: 0.3rem;
    min-width: 300px;
    padding: 0.5rem;
`;

const Button = styled.button`
    font-size: 0.875rem;
    line-height: 1.5rem;
    border-radius: 0.3rem;
    padding: 0.5rem 1.5rem;
    background-color: var(--primary-color);
    color: var(--white-color);
    margin-left: 1rem;
`;

const TitleFollowUs = styled.p`
    font-size: 0.875rem;
    font-weight: 500;
    color: rgb(17 24 39);
    margin-bottom: 1rem;
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
`;

export {
    Container,
    Wrapper,
    SectionsContainer,
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
