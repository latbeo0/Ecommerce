import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BreadCrumb from "../../components/Basic/BreadCrumb";
import ProductCard from "../../components/User/ProductCard";
import { selectUser } from "../../redux/userSlice";
import { fetchClearWishList, fetchGetWishList } from "../../services/userFetch";
import {
    Container,
    Wrapper,
    Header,
    Title,
    ButtonClearAll,
    Content,
} from "./WishListStyled";
import Loading from "../../helpers/Loading";
import Modal from "../../components/User/Modal";
import { toast } from "react-toastify";
import wishListEmpty from "../../assets/img/empty-wishlist@2x.webp";

const WishList = () => {
    const user = useSelector(selectUser);

    const dispatch = useDispatch();

    const [products, setProducts] = useState({
        isLoading: true,
        listProducts: [],
        isError: false,
    });

    useEffect(() => {
        const handleGetWishList = async () => {
            const id = user.currentUser?._id;
            const token = user.currentUser?.access_token;
            if (token) {
                try {
                    const res = await dispatch(
                        fetchGetWishList({ id, token })
                    ).unwrap();
                    return setProducts({
                        ...products,
                        isLoading: false,
                        listProducts: res.listProducts,
                    });
                } catch (error) {
                    console.log("error", error);
                    return setProducts({
                        ...products,
                        isLoading: false,
                        isError: true,
                    });
                }
            }
        };
        handleGetWishList();
    }, [user]);

    const checkEmpty = products.listProducts.length === 0;

    const [isOpened, setIsOpened] = useState(false);

    const handleOpenModal = () => {
        setIsOpened((prev) => !prev);
    };

    const handleClearWishList = async () => {
        const id = user.currentUser?._id;
        const token = user.currentUser?.access_token;
        if (token) {
            try {
                await dispatch(fetchClearWishList({ id, token })).unwrap();
                handleOpenModal();
                return toast.success("You just clear your wishlist", {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } catch (error) {
                console.log("error", error);
            }
        }
    };

    return (
        <Container>
            <BreadCrumb />
            <Wrapper>
                <Header>
                    <Title>My wishlist</Title>
                    {!checkEmpty ? (
                        <ButtonClearAll onClick={handleOpenModal}>
                            Clear wishlist
                        </ButtonClearAll>
                    ) : null}
                </Header>
                {products.isLoading ? (
                    <Loading />
                ) : (
                    <Content empty={checkEmpty}>
                        {checkEmpty ? (
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    gap: "2rem",
                                }}
                            >
                                <div>
                                    You don't have any product in wishlist
                                </div>
                                <img
                                    src={wishListEmpty}
                                    alt="wish_list_empty"
                                />
                            </div>
                        ) : (
                            products.listProducts.map((product) => (
                                <ProductCard
                                    key={product._id}
                                    product={product}
                                />
                            ))
                        )}
                    </Content>
                )}
            </Wrapper>
            {isOpened ? (
                <Modal
                    wishList
                    onCancel={handleOpenModal}
                    onConfirm={handleClearWishList}
                />
            ) : null}
        </Container>
    );
};

export default WishList;
