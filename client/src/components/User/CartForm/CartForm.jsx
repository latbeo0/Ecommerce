import React, { useEffect, useState } from 'react';
import {
    ListProductsContainer,
    ListProducts,
    HeaderList,
    CheckAll,
    ButtonClearAll,
} from './CartFormStyled';
import ItemCart from '../ItemCart';
import { FiCheck } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import {
    fetchClearCart,
    fetchSelectAllItem,
    fetchUnSelectAllItem,
} from '../../../services/cartFetch';
import Modal from '../Modal';

const CartForm = (props) => {
    const dispatch = useDispatch();

    const { currentUser, listProducts } = props;

    const checkAll = listProducts?.find(
        // (item) => !item.isError && !item.isSelected
        (item) => !item.isSelected
    );

    // console.log(checkAll);

    const checkError = listProducts?.find((item) => item.isError);

    // console.log(checkError);

    const [isChecked, setIsChecked] = useState(checkAll ? false : true);
    const [isOpened, setIsOpened] = useState(false);

    useEffect(() => {
        if (checkAll) {
            setIsChecked(false);
        } else {
            setIsChecked(true);
        }
    }, [checkAll]);

    const countErrorProductSelect = listProducts?.filter(
        (item) => item.isError && item.isSelected
    ).length;

    const handleCheckAll = async () => {
        if (checkAll) {
            try {
                await dispatch(
                    fetchSelectAllItem({ user: currentUser })
                ).unwrap();
            } catch (error) {
                console.log('error', error);
            }
        } else {
            try {
                await dispatch(
                    fetchUnSelectAllItem({ user: currentUser })
                ).unwrap();
            } catch (error) {
                console.log('error', error);
            }
        }
    };

    const handleClearCart = async () => {
        try {
            await dispatch(fetchClearCart({ user: currentUser })).unwrap();
        } catch (error) {
            console.log('error', error);
        }
    };

    const handleOpenModal = () => {
        setIsOpened((prev) => !prev);
    };

    return (
        <ListProductsContainer>
            <h1 style={{ marginBottom: '2rem' }}>My Cart</h1>
            <HeaderList>
                <div
                    style={{
                        display: 'flex',
                        gap: '2.5rem',
                    }}
                >
                    <CheckAll onClick={handleCheckAll} checked={isChecked}>
                        {isChecked ? <FiCheck /> : null}
                    </CheckAll>
                    {countErrorProductSelect > 0 ? (
                        <span style={{ fontStyle: 'italic' }}>
                            {`(have ${countErrorProductSelect} error product)`}
                        </span>
                    ) : null}
                </div>
                <ButtonClearAll onClick={handleOpenModal}>
                    Clear cart
                </ButtonClearAll>
            </HeaderList>
            <ListProducts>
                {listProducts?.map((product) => (
                    <ItemCart
                        key={product.product._id + product.size}
                        product={product}
                    />
                ))}
            </ListProducts>
            {isOpened ? (
                <Modal
                    allProduct
                    onCancel={handleOpenModal}
                    onConfirm={handleClearCart}
                />
            ) : null}
        </ListProductsContainer>
    );
};

export default CartForm;
