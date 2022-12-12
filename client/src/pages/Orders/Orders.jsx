import React from "react";
import BreadCrumb from "../../components/Basic/BreadCrumb";
import {
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
} from "./OrdersStyled";

const Orders = () => {
    return (
        <Container>
            <BreadCrumb />
            <Content>
                <Header>Find your order</Header>
                <WrapperInputs>
                    <NavbarSearch>
                        <SearchInput
                            placeholder="Enter Id Order"
                            type="text"
                            id="idOrder"
                            name="idOrder"
                            // value={search.idOrder}
                            // onChange={handleChangeInput}
                        />
                    </NavbarSearch>
                    <NavbarSearch>
                        <SearchInput placeholder="Enter name or phone" />
                    </NavbarSearch>
                    <Button
                    // onClick={handleSearchById}
                    >
                        Search
                    </Button>
                </WrapperInputs>
                <WrapperOrders>
                    <TableContainer>
                        <Table>
                            <HeaderTable>
                                <RowHeaderTable>
                                    <ItemHeaderTable>Id</ItemHeaderTable>
                                    <ItemHeaderTable>Name</ItemHeaderTable>
                                    <ItemHeaderTable>Phone</ItemHeaderTable>
                                    <ItemHeaderTable>Address</ItemHeaderTable>
                                    <ItemHeaderTable>
                                        Total Price
                                    </ItemHeaderTable>
                                    <ItemHeaderTable>Date Buy</ItemHeaderTable>
                                </RowHeaderTable>
                            </HeaderTable>
                            <BodyTable>
                                {/* {orders &&
                                orders.map((order) => (
                                    <RowBodyTable key={order._id}>
                                        <ItemBodyTable
                                            style={{ minWidth: '250px' }}
                                        >
                                            {order._id}
                                        </ItemBodyTable>
                                        <ItemBodyTable
                                            style={{ minWidth: '150px' }}
                                        >
                                            {order.userName}
                                        </ItemBodyTable>
                                        <ItemBodyTable
                                            style={{ minWidth: '150px' }}
                                        >
                                            {order.addressShipping.phone}
                                        </ItemBodyTable>
                                        <ItemBodyTable
                                            style={{ minWidth: '150px' }}
                                        >
                                            {formatCash(
                                                order.totalPrice.toString()
                                            )}{' '}
                                            VNĐ
                                        </ItemBodyTable>
                                        <ItemBodyTable
                                            style={{ minWidth: '150px' }}
                                        >
                                            {new Date(
                                                order.createdAt
                                            ).toLocaleDateString()}
                                        </ItemBodyTable>
                                    </RowBodyTable>
                                ))} */}
                            </BodyTable>
                        </Table>
                    </TableContainer>
                </WrapperOrders>
            </Content>
        </Container>
    );
};

export default Orders;
