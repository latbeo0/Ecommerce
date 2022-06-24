import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
`;

const WrapperUser = styled.div`
    display: none;

    @media only screen and (min-width: 1024px) {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
`;

const UserFunc = styled.a`
    font-size: 1.4rem;
    line-height: 2rem;
    font-weight: 500;
    color: #000;
`;

const Separate = styled.span`
    width: 1px;
    height: 2.4rem;
    margin: 0 3.2rem;

    background-color: rgb(229 231 235 / 1);
`;

const WrapperLanguage = styled.div`
    display: none;

    @media only screen and (min-width: 1024px) {
        display: flex;
        margin-left: 3.2rem;
    }
`;

const Language = styled.a`
    display: flex;
    align-items: center;
    color: #000;
`;

const Flag = styled.img`
    flex-shrink: 0;
    display: block;
    width: 2rem;
    height: auto;
`;

const LanguageName = styled.span`
    display: block;
    font-size: 1.4rem;
    line-height: 2rem;
    font-weight: 500;
    color: #000;
    margin-left: 1.2rem;
`;

const WrapperSearch = styled.div`
    display: flex;

    @media only screen and (min-width: 1024px) {
        margin-left: 2.4rem;
    }
`;

const Search = styled.a`
    padding: 0.8rem;
    color: rgb(156 163 175 / 1);

    &:hover {
        color: rgb(107 114 128 / 1);
    }
`;

const SearchTool = styled.span`
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

const WrapperCart = styled.div`
    display: flex;
    margin-left: 1.6rem;

    @media only screen and (min-width: 1024px) {
        margin-left: 2.4rem;
    }
`;

const Cart = styled.a`
    display: flex;
    align-items: center;
    padding: 0.8rem;
`;

const CartCount = styled.span`
    font-size: 1.4rem;
    line-height: 2rem;
    font-weight: 500;
    color: rgb(55 65 81 / 1);
    margin-left: 0.8rem;
`;

const CartTool = styled.span`
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

export {
    Container,
    WrapperUser,
    UserFunc,
    Separate,
    WrapperLanguage,
    Language,
    Flag,
    LanguageName,
    WrapperSearch,
    WrapperCart,
    Search,
    SearchTool,
    Cart,
    CartCount,
    CartTool,
};
