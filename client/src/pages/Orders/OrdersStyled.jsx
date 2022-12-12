import styled from "styled-components";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const Container = styled.div`
    max-width: 80rem;
    margin: 1rem auto;
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
    flex-direction: column;
`;

const Content = styled.div`
    padding: 2rem;
`;

const Header = styled.h1`
    font-size: 1.5rem;
    margin-bottom: 2.5rem;
`;

const WrapperInputs = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const NavbarSearch = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

const SearchInput = styled.input`
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    outline: none;
    font-size: 14px;
    height: 36px;
    width: 230px;
    padding-left: 10px;
    &:focus {
        box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%),
            0 0 8px rgb(102 175 233 / 60%);
        border-color: #66afe9;
    }
    @media only screen and (max-width: 1199px) {
        width: unset;
    }
`;

const Button = styled.button`
    height: 40px;
    width: 100px;
    border: none;
    color: white;
    font-size: 1.8rem;
    background-color: #f15e2c;
    border-radius: 10px;
    cursor: pointer;
`;

const WrapperOrders = styled.div`
    width: 100%;
`;

const TableContainer = styled.div`
    width: 100%;
    /* overflow-x: scroll; */
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

const HeaderTable = styled.thead``;

const RowHeaderTable = styled.tr`
    height: 70px;
`;

const ItemHeaderTable = styled.th`
    font-size: 1.5rem;
`;

const BodyTable = styled.tbody``;

const RowBodyTable = styled.tr``;

const ItemBodyTable = styled.td`
    font-size: 1.5rem;
    height: 80px;
    text-align: center;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const ItemBodyWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ImageProduct = styled.img`
    width: 50px;
    height: 50px;
    margin: 0 10px;
`;

const TitleProduct = styled.span`
    font-size: 1.5rem;
    width: 200px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
`;

const ColorContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

const Color = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin: 2px;
    border: 1px solid rgba(0, 0, 0, 0.2);
`;

const Stock = styled.span`
    font-size: 1.5rem;
`;

const StockFalse = styled(Stock)`
    color: #ff0000;
`;

const StockTrue = styled(Stock)`
    color: #0f0;
`;

const ActionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ActionItem = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.5);
`;

const EditIcon = styled(FiEdit2)`
    font-size: 1.5rem;
    cursor: pointer;
`;

const DeleteEdit = styled(AiOutlineDelete)`
    font-size: 1.5rem;
    cursor: pointer;
`;

const LinkR = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

export {
    Container,
    Content,
    Header,
    WrapperInputs,
    NavbarSearch,
    SearchInput,
    Button,
    WrapperOrders,
    TableContainer,
    Table,
    HeaderTable,
    RowHeaderTable,
    ItemHeaderTable,
    BodyTable,
    RowBodyTable,
    ItemBodyTable,
    ItemBodyWrapper,
    ImageProduct,
    TitleProduct,
    ColorContainer,
    Color,
    Stock,
    StockFalse,
    StockTrue,
    ActionContainer,
    ActionItem,
    EditIcon,
    DeleteEdit,
    LinkR,
};
