import styled from 'styled-components';

const WrapperImage = styled.div`
    position: relative;
    text-align: center;

    &:before {
        content: '';
        display: block;
        padding-top: 45%;
        height: 0;
        width: 100%;
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
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    color: #fff;
    pointer-events: none;
`;

const Title = styled.p`
    font-size: 5rem;
    font-weight: 500;
    line-height: 10rem;
`;

const Description = styled.p`
    font-size: 1.6rem;
    font-weight: 400;
`;

export { WrapperImage, LinkImage, Image, WrapperContent, Title, Description };
