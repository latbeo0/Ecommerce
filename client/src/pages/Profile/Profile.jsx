import React from "react";
import { useSelector } from "react-redux";
import BreadCrumb from "../../components/Basic/BreadCrumb";
import { selectUser } from "../../redux/userSlice";
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
    Content,
    Row,
} from "./ProfileStyled";
import { RiUser3Fill } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";
import { InputGroup, SelectGroup } from "../../components/Basic";

const Profile = () => {
    const user = useSelector(selectUser);

    return (
        <Container>
            <BreadCrumb />
            <Wrapper>
                <LeftContainer>
                    <AvatarContainer>
                        <Avatar src={user.currentUser.avatar} alt="avatar" />
                    </AvatarContainer>
                    <Name>{user.currentUser.fullName}</Name>
                    <ToolContainer>
                        <Tool>
                            <RiUser3Fill />
                            User information
                        </Tool>
                        <Tool>
                            <MdLocationOn />
                            Address shipping
                        </Tool>
                    </ToolContainer>
                </LeftContainer>
                <RightContainer>
                    <RightWrapper>
                        <Title>User Information</Title>
                        <Content>
                            <Row>
                                <InputGroup />
                                <InputGroup />
                            </Row>
                            <Row>
                                <InputGroup />
                            </Row>
                            <Row style={{ width: "calc(50% - 0.5rem)" }}>
                                <InputGroup />
                            </Row>
                        </Content>
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
