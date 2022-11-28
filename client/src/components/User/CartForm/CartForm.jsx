import React, { useEffect, useState } from "react";
import {
    ListProductsContainer,
    ListProducts,
    HeaderList,
    CheckAll,
    ButtonClearAll,
} from "./CartFormStyled";
import ItemCart from "../ItemCart";
import { FiCheck } from "react-icons/fi";
import { useDispatch } from "react-redux";
import {
    fetchClearCart,
    fetchSelectAllItem,
    fetchUnSelectAllItem,
} from "../../../services/cartFetch";
import Modal from "../Modal";

const CartForm = (props) => {
    const dispatch = useDispatch();

    const { listProducts } = props;

    const checkAll = listProducts.find(
        (item) => !item.isError && !item.isSelected
    );

    const [isChecked, setIsChecked] = useState(checkAll ? false : true);
    const [isOpened, setIsOpened] = useState(false);

    useEffect(() => {
        if (checkAll) {
            setIsChecked(false);
        } else {
            setIsChecked(true);
        }
    }, [checkAll]);

    const handleCheckAll = async () => {
        if (checkAll) {
            try {
                await dispatch(fetchSelectAllItem());
            } catch (error) {
                console.log("error", error);
            }
        } else {
            try {
                await dispatch(fetchUnSelectAllItem());
            } catch (error) {
                console.log("error", error);
            }
        }
    };

    const handleClearCart = async () => {
        try {
            await dispatch(fetchClearCart());
        } catch (error) {
            console.log("error", error);
        }
    };

    const handleOpenModal = () => {
        setIsOpened((prev) => !prev);
    };

    return listProducts?.length > 0 ? (
        <ListProductsContainer>
            <h1 style={{ marginBottom: "2rem" }}>My Cart</h1>
            <HeaderList>
                <CheckAll onClick={handleCheckAll} checked={isChecked}>
                    {isChecked ? <FiCheck /> : null}
                </CheckAll>
                <ButtonClearAll onClick={handleOpenModal}>
                    Clear cart
                </ButtonClearAll>
            </HeaderList>
            <ListProducts>
                {listProducts.map((product) => (
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
    ) : (
        <div>No thing in cart</div>
    );
};

export default CartForm;
