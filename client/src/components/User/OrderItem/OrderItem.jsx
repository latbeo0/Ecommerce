import moment from 'moment';
import React from 'react';
import { useState } from 'react';
import { formatCurrencyVND } from '../../../utils/format';
import {
    RowBodyTable,
    ItemBodyTable,
    ItemBodyFull,
    Cover,
    Dot,
    SubContainer,
    ImageContainer,
    Image,
    Content,
    Wrapper,
    Name,
    Code,
    Price,
    Color,
    AddressShippingWrapper,
    ImageLocationContainer,
    ImageLocation,
    ContentLocationContainer,
    TitleLocation,
    DescriptionLocation,
} from './OrderItemStyled';
import imgLocation from '../../../assets/img/pexels-photo-1051077.jpeg';
import OrderProduct from '../../Basic/OrderProduct';

const OrderItem = (props) => {
    const { order } = props;

    const [isOpened, setIsOpened] = useState(false);

    const handleOpened = () => {
        setIsOpened((prev) => !prev);
    };

    return (
        <>
            <RowBodyTable onClick={handleOpened} open={isOpened}>
                <ItemBodyTable style={{ minWidth: '100px' }}>
                    {order.orderCode}
                </ItemBodyTable>
                <ItemBodyTable style={{ minWidth: '150px' }}>
                    {order.addressShipping.lastName +
                        ' ' +
                        order.addressShipping.firstName}
                </ItemBodyTable>
                <ItemBodyTable style={{ minWidth: '50px' }}>
                    {order.stateOrder}
                </ItemBodyTable>
                <ItemBodyTable style={{ minWidth: '150px' }}>
                    {formatCurrencyVND(order.totalPrice)}
                </ItemBodyTable>
                <ItemBodyTable style={{ minWidth: '100px' }}>
                    {moment(order.createdAt).format('DD/MM/YYYY')}
                </ItemBodyTable>
            </RowBodyTable>
            {isOpened ? (
                <RowBodyTable sub>
                    <ItemBodyFull colSpan='5'>
                        <Dot />
                        <Cover>
                            <span>Address Shipping</span>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                <AddressShippingWrapper>
                                    <ImageLocationContainer>
                                        <ImageLocation
                                            src={imgLocation}
                                            alt='imageLocation'
                                        />
                                    </ImageLocationContainer>
                                    <ContentLocationContainer>
                                        <TitleLocation>
                                            {order.addressShipping.province}
                                        </TitleLocation>
                                        <DescriptionLocation>
                                            {`${order.addressShipping.address}, ${order.addressShipping.ward}, ${order.addressShipping.district}, ${order.addressShipping.province}`}
                                        </DescriptionLocation>
                                    </ContentLocationContainer>
                                </AddressShippingWrapper>
                            </div>
                            <span>List products</span>
                            <Wrapper>
                                {order.listOderItems.map((item) => (
                                    <OrderProduct
                                        key={item.product._id + item.size}
                                        item={item}
                                        orderCode={order.orderCode}
                                    />
                                ))}
                            </Wrapper>
                        </Cover>
                    </ItemBodyFull>
                </RowBodyTable>
            ) : null}
        </>
    );
};

export default OrderItem;
