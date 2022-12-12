import React from 'react';
import BreadCrumb from '../../components/Basic/BreadCrumb';
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
} from './OrdersStyled';
import { useDispatch, useSelector } from 'react-redux';
import { selectOrders } from './../../redux/orderSlice';
import OrderItem from '../../components/User/OrderItem';
import { useState } from 'react';
import { fetchOrderByCode } from '../../services/orderFetch';
import img from '../../assets/img/questions_jpg_lofQZuuf-e1602569646116.jpg';

const Orders = () => {
    const dispatch = useDispatch();

    const { listOrders } = useSelector(selectOrders);

    const [orders, setOrders] = useState([]);
    const [search, setSearch] = useState('');

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setSearch(value);
    };

    const handleSearchByCode = async () => {
        try {
            const res = await fetchOrderByCode(search);
            const temp = res.data.orders.filter(
                (item) => item.orderCode === search
            );
            setOrders((prev) => [...prev, ...temp]);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container>
            <BreadCrumb />
            <Content>
                <WrapperInputs>
                    <Header>Find your order</Header>
                    <div style={{ display: 'flex' }}>
                        <NavbarSearch>
                            <SearchInput
                                placeholder='Enter Order Code'
                                type='text'
                                id='orderCode'
                                name='orderCode'
                                value={search}
                                onChange={handleChangeInput}
                            />
                        </NavbarSearch>
                        <Button onClick={handleSearchByCode}>Search</Button>
                    </div>
                </WrapperInputs>
                <WrapperOrders>
                    <TableContainer>
                        <Table>
                            <HeaderTable>
                                <RowHeaderTable>
                                    <ItemHeaderTable>
                                        Order Code
                                    </ItemHeaderTable>
                                    <ItemHeaderTable>Full Name</ItemHeaderTable>
                                    <ItemHeaderTable>State</ItemHeaderTable>
                                    <ItemHeaderTable>
                                        Total Price
                                    </ItemHeaderTable>
                                    <ItemHeaderTable>Date Buy</ItemHeaderTable>
                                </RowHeaderTable>
                            </HeaderTable>
                            <BodyTable>
                                {orders.length > 0 ? (
                                    orders.map((order) => (
                                        <OrderItem
                                            order={order}
                                            key={order._id}
                                        />
                                    ))
                                ) : listOrders.length > 0 ? (
                                    listOrders.map((order) => (
                                        <OrderItem
                                            order={order}
                                            key={order._id}
                                        />
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan='5'
                                            style={{
                                                textAlign: 'center',
                                                fontSize: '1rem',
                                            }}
                                        >
                                            You don't any order yet
                                            <img
                                                src={img}
                                                alt='img'
                                                style={{ margin: 'auto' }}
                                            />
                                        </td>
                                    </tr>
                                )}
                            </BodyTable>
                        </Table>
                    </TableContainer>
                </WrapperOrders>
            </Content>
        </Container>
    );
};

export default Orders;
