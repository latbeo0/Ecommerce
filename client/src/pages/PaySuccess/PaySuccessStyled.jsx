import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Header = styled.div`
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 30px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    margin-top: 40px;
`;

const Image = styled.img`
    width: 200px;
    height: 200px;
`;

const Title = styled.div`
    font-size: 1.875rem;
    color: #42b86e;
`;

const Body = styled.div`
    padding: 30px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const GroupItem = styled.div`
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`;

const Name = styled.div`
    font-size: 1rem;
`;

const Value = styled.div`
    font-size: 1.125rem;
`;

const Footer = styled.div`
    padding-top: 30px;
    margin-bottom: 40px;
`;

const Button = styled.button`
    width: 200px;
    height: 50px;
    border: none;
    background-color: var(--primary-color);
    border-radius: 10px;
    color: white;
    font-size: 1.4rem;
    cursor: pointer;
`;

const LinkR = styled(Link)`
    text-decoration: none;
    color: unset;
    cursor: pointer;
    & + & {
        margin-left: 50px;
    }
`;

export {
    Container,
    Header,
    Image,
    Title,
    Body,
    GroupItem,
    Name,
    Value,
    Footer,
    Button,
    LinkR,
};
