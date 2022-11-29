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
    Header,
    Title,
    Content,
    Row,
    LocationImageContainer,
    LocationImage,
} from './ProfileStyled';
import { RiUser3Fill } from 'react-icons/ri';
import { MdLocationOn } from 'react-icons/md';
import { BsFillHeartFill } from 'react-icons/bs';
import { Button, InputGroup, SelectGroup } from '../../components/Basic';
import imgNoLocation from '../../assets/img/noLocation.jpeg';
import { Link } from 'react-router-dom';

const inputs = [
    {
        id: 1,
        type: 'text',
        name: 'firstName',
        patterns: ['required'],
        label: 'First name',
    },
    {
        id: 2,
        type: 'text',
        name: 'lastName',
        patterns: ['required'],
        label: 'Last name',
    },
    {
        id: 3,
        type: 'email',
        name: 'email',
        patterns: ['required', 'email'],
        label: 'Email',
    },
    {
        id: 4,
        type: 'phone',
        name: 'phone',
        patterns: ['required'],
        label: 'Phone',
    },
    {
        id: 5,
        name: 'province',
        patterns: ['required'],
    },
    {
        id: 6,
        name: 'district',
        patterns: ['required'],
    },
    {
        id: 7,
        name: 'ward',
        patterns: ['required'],
    },
    {
        id: 8,
        type: 'text',
        name: 'address',
        patterns: ['required'],
        label: 'Address',
    },
];

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
                        <Tool>
                            <RiUser3Fill />
                            User information
                        </Tool>
                        <Tool>
                            <MdLocationOn />
                            Address shipping
                        </Tool>
                        <Link to='/wish_list'>
                            <Tool>
                                <BsFillHeartFill />
                                Wish list
                            </Tool>
                        </Link>
                    </ToolContainer>
                </LeftContainer>
                <RightContainer>
                    <RightWrapper>
                        <Header>
                            <Title>User Information</Title>
                            <Button variant='contained'>Update</Button>
                        </Header>
                        <Content>
                            <Row>
                                {inputs.slice(0, 2).map((input) => (
                                    <InputGroup
                                        key={input.id}
                                        // value={userInfo[input.name]}
                                        // onChange={(e) => handleChange(e)}
                                        // errorMessage={errorsForm[input.name][0]}
                                        {...input}
                                    />
                                ))}
                            </Row>
                            <Row>
                                {inputs.slice(2, 3).map((input) => (
                                    <InputGroup
                                        key={input.id}
                                        // value={userInfo[input.name]}
                                        // onChange={(e) => handleChange(e)}
                                        // errorMessage={errorsForm[input.name][0]}
                                        {...input}
                                        disabled
                                    />
                                ))}
                            </Row>
                            <Row style={{ width: 'calc(50% - 0.5rem)' }}>
                                {inputs.slice(3, 4).map((input) => (
                                    <InputGroup
                                        key={input.id}
                                        // value={userInfo[input.name]}
                                        // onChange={(e) => handleChange(e)}
                                        // errorMessage={errorsForm[input.name][0]}
                                        {...input}
                                    />
                                ))}
                            </Row>
                        </Content>
                    </RightWrapper>
                    <RightWrapper>
                        <Header>
                            <Title>Address Shipping</Title>
                            <Button variant='contained'>Add</Button>
                        </Header>
                        <Content>
                            <Row>
                                <SelectGroup
                                    label='Province'
                                    placeholder='Select province ...'
                                    // options={provinces}
                                    // value={province}
                                    // onChange={handleChangeProvince}
                                    // errorMessage={errorsForm['province'][0]}
                                />
                                <SelectGroup
                                    label='District'
                                    placeholder='Select district ...'
                                    // options={districts}
                                    // value={district}
                                    // onChange={handleChangeDistrict}
                                    // errorMessage={errorsForm['district'][0]}
                                />
                                <SelectGroup
                                    label='Ward'
                                    placeholder='Select ward ...'
                                    // options={wards}
                                    // defaultValue={ward}
                                    // value={ward}
                                    // onChange={handleChangeWard}
                                    // errorMessage={errorsForm['ward'][0]}
                                />
                            </Row>
                            <Row>
                                {inputs.slice(7, 8).map((input) => (
                                    <InputGroup
                                        key={input.id}
                                        // value={userInfo[input.name]}
                                        // onChange={(e) => handleChange(e)}
                                        // errorMessage={errorsForm[input.name][0]}
                                        {...input}
                                    />
                                ))}
                            </Row>
                            <LocationImageContainer>
                                You don't have any address shipping
                                <LocationImage
                                    src={imgNoLocation}
                                    alt='no-location'
                                />
                            </LocationImageContainer>
                        </Content>
                    </RightWrapper>
                </RightContainer>
            </Wrapper>
        </Container>
    );
};

export default Profile;
