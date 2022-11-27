import React from 'react';
import { useSelector } from 'react-redux';
import BreadCrumb from '../../components/Basic/BreadCrumb';
import { selectUser } from '../../redux/userSlice';
import {
    Container,
    Wrapper,
    LeftContainer,
    AvatarContainer,
    Avatar,
    Name,
    ToolContainer,
    Tool,
    RightContainer,
    RightWrapper,
    Title,
} from './ProfileStyled';

const Profile = () => {
    const user = useSelector(selectUser);

    return (
        <Container>
            <BreadCrumb />
            <Wrapper>
                <LeftContainer>
                    <AvatarContainer>
                        <Avatar src={user.currentUser.avatar} alt='avatar' />
                    </AvatarContainer>
                    <Name>{user.currentUser.fullName}</Name>
                    <ToolContainer>
                        <Tool>User information</Tool>
                        <Tool>Address Shipping</Tool>
                    </ToolContainer>
                </LeftContainer>
                <RightContainer>
                    <RightWrapper>
                        <Title>User Information</Title>
                    </RightWrapper>
                    <RightWrapper>
                        <Title>Address Shipping</Title>
                    </RightWrapper>
                </RightContainer>
            </Wrapper>
        </Container>
    );
};

export default Profile;
