import React, { useEffect } from 'react';
import { useState } from 'react';
import {
    SubContainer,
    ImageContainer,
    Image,
    Content,
    Wrapper,
    Name,
    Code,
    Price,
    Color,
    CommentContainer,
    ArrowContainer,
    CommentWrapper,
    RatingContainer,
    WriteContainer,
    Title,
    Button,
    Textarea,
    Star,
} from './OrderProductStyled';
import { BiRightArrow } from 'react-icons/bi';
import Rating from 'react-rating';
import star from '../../../assets/img/star.png';
import starfull from '../../../assets/img/starfull.png';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/userSlice';
import { fetchComment, fetchGetComment } from '../../../services/commentFetch';

const OrderProduct = (props) => {
    const { item, orderCode } = props;

    const { currentUser } = useSelector(selectUser);

    const [isOpen, setIsOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    useEffect(() => {
        const fetchGetData = async () => {
            try {
                const res = await fetchGetComment(
                    currentUser._id,
                    item.product._id,
                    orderCode
                );

                const comment = res?.data?.comment?.comment || '';
                const rating = res?.data?.comment?.rating || 0;
                const productId = res?.data?.comment?.productId || '';
                // const { comment, rating, productId } = res?.data?.comment;
                const orderRes = res?.data?.comment?.orderCode || '';

                if (item.product._id === productId && orderCode === orderRes) {
                    setRating(rating);
                    setComment(comment);
                }
            } catch (err) {
                console.log(err);
            }
        };
        fetchGetData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const openComment = () => {
        setIsOpen((prev) => !prev);
    };

    const handleSave = () => {
        if (!currentUser) {
            return toast.error('Please login before rating', {
                position: 'top-right',
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else if (rating === 0 || comment === '') {
            return toast.error('Please rating and comment before submit form', {
                position: 'top-right',
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            const callApi = async () => {
                await fetchComment(
                    currentUser.access_token,
                    currentUser._id,
                    item.product._id,
                    orderCode,
                    rating,
                    comment
                );
            };
            callApi();
        }
    };

    return (
        <SubContainer>
            <ImageContainer>
                <Image src={item.product.primaryImages[0].img} alt='img' />
            </ImageContainer>
            <Content>
                <Name>{item.product.productName}</Name>
                <Code>{item.product._id}</Code>
                <span>Size: {item.size}</span>
                <span>
                    Color:{' '}
                    <Color
                        background={item.product.color.valueColor}
                        selected
                    ></Color>
                </span>
            </Content>
            <CommentContainer isOpen={isOpen}>
                {isOpen ? (
                    <CommentWrapper>
                        <RatingContainer>
                            <Title>Rating</Title>
                            <Rating
                                initialRating={rating}
                                emptySymbol={
                                    <Star
                                        src={star}
                                        alt='star'
                                        className='icon'
                                    />
                                }
                                fullSymbol={
                                    <Star
                                        src={starfull}
                                        alt='starfull'
                                        className='icon'
                                    />
                                }
                                onChange={(e) => setRating(e)}
                            />
                            <Button onClick={handleSave}>Save</Button>
                        </RatingContainer>
                        <WriteContainer>
                            <Title>Comment</Title>
                            <Textarea
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                            ></Textarea>
                        </WriteContainer>
                    </CommentWrapper>
                ) : null}
                <ArrowContainer onClick={openComment}>
                    <BiRightArrow />
                </ArrowContainer>
            </CommentContainer>
        </SubContainer>
    );
};

export default OrderProduct;
