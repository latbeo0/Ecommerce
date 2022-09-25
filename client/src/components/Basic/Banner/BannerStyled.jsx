import styled from 'styled-components';

const WrapperImage = styled.div`
    position: relative;
    text-align: center;
    height: 430px;

    &:before {
        content: '';
        display: block;
        padding-top: 45%;
        height: 0;
        width: 100%;
    }

    @media only screen and (max-width: 767px) and (min-width: 601px) {
        height: 300px;
    }

    @media only screen and (max-width: 600px) {
        height: 225px;
    }
`;

const LinkImage = styled.a``;

const Image = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const WrapperContent = styled.div`
    width: 75%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -55%);
    color: #fff;
    pointer-events: none;
`;

const Title = styled.p`
    font-size: 3.125rem;
    font-weight: 500;
    line-height: 6.25rem;

    @media only screen and (max-width: 767px) {
        font-size: 2.5rem;
        font-weight: 500;
        line-height: 3rem;
    }
`;

const Description = styled.p`
    font-size: 1rem;
    font-weight: 400;

    @media only screen and (max-width: 767px) {
        font-size: 0.875rem;
    }
`;

export { WrapperImage, LinkImage, Image, WrapperContent, Title, Description };
