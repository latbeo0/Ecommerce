import styled from 'styled-components';

const Container = styled.a`
    /* width: 100%; */
    height: 100%;
    display: flex;
    align-items: center;
    color: rgb(156 163 175);
    padding: ${(props) => props.padding && '0.8rem'};

    &:hover {
        color: rgb(107 114 128);
    }
`;

const Image = styled.img`
    flex-shrink: 0;
    display: block;
    width: 2rem;
    height: auto;
`;

const Content = styled.span`
    font-size: 1.4rem;
    line-height: 2rem;
    font-weight: 500;
    color: rgb(31 41 55);
    margin-left: ${(props) => props.marginLeft && '0.8rem'};
`;

const Tool = styled.span`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
`;

export { Container, Image, Content, Tool };
