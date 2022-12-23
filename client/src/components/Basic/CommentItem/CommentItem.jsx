import moment from 'moment';
import React from 'react';
import Rating from 'react-rating';
import styled from 'styled-components';
import star from '../../../assets/img/star.png';
import starfull from '../../../assets/img/starfull.png';

const Container = styled.div`
    max-width: 50rem;
    display: flex;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
`;

const AvatarContainer = styled.div`
    width: 50px;
    height: 50px;
`;

const Avatar = styled.img``;

const InformationContainer = styled.div`
    margin-left: 2rem;
`;

const Name = styled.div`
    font-size: 1rem;
    color: var(--black-color);
`;

const Date = styled.div``;

const RatingContainer = styled.div`
    margin: 1rem 0;
`;

const Star = styled.img`
    width: 1rem;
    height: 1rem;
`;

const Comment = styled.div``;

const CommentItem = (props) => {
    const { user, comment, rating, date } = props.item;

    const getFullName = (firstName, lastName) => {
        if (firstName && lastName) {
            return `${firstName} ${lastName}`;
        }

        if (firstName) return firstName;
        if (lastName) return lastName;

        return 'New User';
    };

    return (
        <Container>
            <AvatarContainer>
                <Avatar src={user.avatar} alt='avatar' />
            </AvatarContainer>
            <InformationContainer>
                <Name>{getFullName(user.firstName, user.lastName)}</Name>
                <Date>{moment(date).format('DD/MM/YYYY')}</Date>
                <RatingContainer>
                    <Rating
                        initialRating={Math.floor(rating)}
                        emptySymbol={
                            <Star src={star} alt='star' className='icon' />
                        }
                        placeholderSymbol={
                            <Star
                                src={starfull}
                                alt='starfull'
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
                        readonly
                    />
                </RatingContainer>
                <Comment>{comment}</Comment>
            </InformationContainer>
        </Container>
    );
};

export default CommentItem;
