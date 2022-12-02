import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BreadCrumb from "../../components/Basic/BreadCrumb";
import { selectUser } from "../../redux/userSlice";
import {
    Container,
    Wrapper,
    LeftContainer,
    AvatarContainer,
    ButtonEditAvatar,
    Avatar,
    Name,
    ToolContainer,
    Tool,
    RightContainer,
    RightWrapper,
    Header,
    Title,
    Content,
    WrapperRow,
    Row,
    LocationImageContainer,
    LocationImage,
    AddressShippingItem,
    AddressShippingWrapper,
    ButtonEdit,
    ButtonDelete,
    ImageLocationContainer,
    ImageLocation,
    ContentLocationContainer,
    TitleLocation,
    DescriptionLocation,
    DefaultLocation,
} from "./ProfileStyled";
import { RiUser3Fill } from "react-icons/ri";
import {
    MdLocationOn,
    MdEdit,
    MdOutlineEditLocationAlt,
    MdOutlineWrongLocation,
} from "react-icons/md";
import { BsFillHeartFill } from "react-icons/bs";
import { Button, InputGroup, SelectGroup } from "../../components/Basic";
import imgNoLocation from "../../assets/img/noLocation.jpeg";
import { Link } from "react-router-dom";
import Loading from "../../helpers/Loading";
import {
    fetchAddAddressShipping,
    fetchChangeAvatar,
    fetchChangeDefaultAddressShipping,
    fetchChangeUserInfo,
    fetchDeleteAddressShipping,
} from "../../services/userFetch";
import { toast } from "react-toastify";
import { useEffect } from "react";
import Modal from "../../components/User/Modal";
import imgLocation from "../../assets/img/pexels-photo-1051077.jpeg";

const inputs = [
    {
        id: 1,
        type: "text",
        name: "firstName",
        patterns: ["required"],
        label: "First name",
    },
    {
        id: 2,
        type: "text",
        name: "lastName",
        patterns: ["required"],
        label: "Last name",
    },
    {
        id: 3,
        type: "email",
        name: "email",
        patterns: ["required", "email"],
        label: "Email",
    },
    {
        id: 4,
        type: "phone",
        name: "phone",
        patterns: ["required"],
        label: "Phone",
    },
    {
        id: 5,
        name: "province",
        patterns: ["required"],
    },
    {
        id: 6,
        name: "district",
        patterns: ["required"],
    },
    {
        id: 7,
        name: "ward",
        patterns: ["required"],
    },
    {
        id: 8,
        type: "text",
        name: "address",
        patterns: ["required"],
        label: "Address",
    },
];

const inputsNewLocation = [
    {
        id: 5,
        name: "province",
        patterns: ["required"],
    },
    {
        id: 6,
        name: "district",
        patterns: ["required"],
    },
    {
        id: 7,
        name: "ward",
        patterns: ["required"],
    },
    {
        id: 8,
        type: "text",
        name: "address",
        patterns: ["required"],
        label: "Address",
    },
];

const inputsUserInfo = [
    {
        id: 1,
        type: "text",
        name: "firstName",
        patterns: ["required"],
        label: "First name",
    },
    {
        id: 2,
        type: "text",
        name: "lastName",
        patterns: ["required"],
        label: "Last name",
    },
    {
        id: 3,
        type: "email",
        name: "email",
        patterns: ["required", "email"],
        label: "Email",
    },
    {
        id: 4,
        type: "phone",
        name: "phone",
        patterns: ["required"],
        label: "Phone",
    },
];

const Profile = () => {
    const dispatch = useDispatch();

    const { currentUser } = useSelector(selectUser);

    const [dataTemp, setDataTemp] = useState({
        firstName: "",
        lastName: "",
        phone: "",
    });

    const [isOpened, setIsOpened] = useState(false);

    const handleOpenModal = () => {
        setIsOpened((prev) => !prev);
    };

    useEffect(() => {
        const { firstName, lastName, phone } = currentUser;
        setDataTemp({ firstName, lastName, phone });
    }, [currentUser]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDataTemp({ ...dataTemp, [name]: value });
    };

    const getFullName = (firstName, lastName) => {
        if (firstName && lastName) {
            return `${firstName} ${lastName}`;
        }

        if (firstName) return firstName;
        if (lastName) return lastName;

        return "New User";
    };

    const handleChangeUserInfo = async () => {
        try {
            const id = currentUser._id;
            const token = currentUser.access_token;
            const data = {};
            inputsUserInfo
                .filter(
                    (input) => input.id !== 3 && dataTemp[input.name] !== ""
                )
                .map((item) => (data[item.name] = dataTemp[item.name]));
            await dispatch(fetchChangeUserInfo({ id, token, data })).unwrap();
            return toast.success("Update user info successful", {
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
    };

    // Change avatar
    const [images, setImages] = React.useState([]);

    const maxNumber = 69;

    const checkFile = (file) => {
        if (!file) return { msg: "No files were uploaded." };

        if (file.size > 1024 * 1024) return { msg: "Size too large." };

        if (file.type !== "image/jpeg" && file.type !== "image/png")
            return { msg: "File format is incorrect." };
    };

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit

        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    const handleChangeAvatar = async () => {
        const file = images[0]?.file;

        const check = checkFile(file);

        if (!check) {
            const formData = new FormData();
            formData.append("file", file);

            const token = currentUser.access_token;
            const id = currentUser._id;

            try {
                await dispatch(
                    fetchChangeAvatar({ formData, token, id, dispatch })
                ).unwrap();
                setIsOpened(false);
                setImages([]);
                toast.success(`Update avatar successful`, {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } catch (error) {}
        } else {
            toast.error(`${check.msg}`, {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    //Location
    const location = useSelector((state) => state.location);

    const [newLocation, setNewLocation] = useState({
        province: "",
        district: "",
        ward: "",
        address: "",
    });

    const handleChangeLocation = (e) => {
        const { name, value } = e.target;
        if (name === "province") {
            setNewLocation({
                ...newLocation,
                [name]: value,
                district: "",
                ward: "",
            });
        } else if (name === "district") {
            setNewLocation({
                ...newLocation,
                [name]: value,
                ward: "",
            });
        } else {
            setNewLocation({
                ...newLocation,
                [name]: value,
            });
        }
    };

    const provinces = location?.province?.map((item) => ({
        value: item.code,
        label: item.name,
        name: "province",
    }));

    const [province, setProvince] = useState(null);

    const handleChangeProvince = (selectOption) => {
        if (handleChangeLocation) {
            setProvince(selectOption);
            setDistrict("");
            setWard("");
            handleChangeLocation({
                target: {
                    name: selectOption.name,
                    value: selectOption.label,
                },
            });
        }
    };

    const districts = province
        ? location?.district
              ?.filter(
                  (item) =>
                      Number(item?.province_code) === Number(province.value)
              )
              ?.map((item) => ({
                  value: item.code,
                  label: item.name,
                  name: "district",
              }))
        : [];

    const [district, setDistrict] = useState(null);

    const handleChangeDistrict = (selectOption) => {
        if (handleChangeLocation) {
            setDistrict(selectOption);
            setWard("");
            handleChangeLocation({
                target: {
                    name: selectOption.name,
                    value: selectOption.label,
                },
            });
        }
    };

    const wards = district
        ? location?.ward
              ?.filter(
                  (item) =>
                      Number(item?.district_code) === Number(district.value)
              )
              ?.map((item) => ({
                  value: item.code,
                  label: item.name,
                  name: "ward",
              }))
        : [];

    const [ward, setWard] = useState(null);

    const handleChangeWard = (selectOption) => {
        if (handleChangeLocation) {
            setWard(selectOption);
            handleChangeLocation({
                target: {
                    name: selectOption.name,
                    value: selectOption.label,
                },
            });
        }
    };

    const handleAddNewLocation = async () => {
        const check = inputsNewLocation.find(
            (item) => newLocation[item.name] === ""
        );

        if (!check) {
            const token = currentUser.access_token;
            await dispatch(
                fetchAddAddressShipping({ token, ...newLocation })
            ).unwrap();
            setProvince(null);
            setDistrict(null);
            setWard(null);
            setIsOpenAddNew(false);
            setNewLocation((prev) => ({ ...prev, address: "" }));
            toast.success(`Add new address shipping successful`, {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            toast.error(`Please fill all required field`, {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    // Add new address shipping
    const [isOpenAddNew, setIsOpenAddNew] = useState(false);

    const handleOpenAddNew = () => {
        setIsOpenAddNew((prev) => !prev);
    };

    const handleChangeDefault = async (id, isSelected) => {
        if (!isSelected)
            try {
                const token = currentUser.access_token;

                await dispatch(
                    fetchChangeDefaultAddressShipping({
                        token,
                        id,
                    })
                ).unwrap();

                toast.success(`Change default address shipping successful`, {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } catch (error) {}
    };

    const handleDeleteAddress = async (id, isSelected) => {
        if (!isSelected) {
            try {
                const token = currentUser.access_token;

                await dispatch(
                    fetchDeleteAddressShipping({
                        token,
                        id,
                    })
                ).unwrap();

                toast.success(`Delete address shipping successful`, {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } catch (error) {}
        } else {
            toast.error(`You need to change default address shipping first!`, {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return (
        <Container>
            <BreadCrumb />
            <Wrapper>
                <LeftContainer>
                    <AvatarContainer>
                        <ButtonEditAvatar onClick={handleOpenModal}>
                            <MdEdit />
                        </ButtonEditAvatar>
                        <Avatar src={currentUser.avatar} alt="avatar" />
                        {isOpened ? (
                            <Modal
                                avatar={images}
                                maxNumber={maxNumber}
                                onChange={onChange}
                                onCancel={handleOpenModal}
                                onConfirm={handleChangeAvatar}
                            />
                        ) : null}
                    </AvatarContainer>
                    <Name>
                        {getFullName(
                            currentUser.firstName,
                            currentUser.lastName
                        )}
                    </Name>
                    <ToolContainer>
                        <Tool>
                            <RiUser3Fill />
                            User information
                        </Tool>
                        <Tool>
                            <MdLocationOn />
                            Address shipping
                        </Tool>
                        <Link to="/wish_list">
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
                            <Button
                                variant="contained"
                                onClick={handleChangeUserInfo}
                            >
                                Update
                            </Button>
                        </Header>
                        <Content>
                            <Row>
                                {inputsUserInfo.slice(0, 2).map((input) => (
                                    <InputGroup
                                        key={input.id}
                                        value={dataTemp[input.name]}
                                        onChange={(e) => handleChange(e)}
                                        {...input}
                                    />
                                ))}
                            </Row>
                            <Row>
                                {inputsUserInfo.slice(2, 3).map((input) => (
                                    <InputGroup
                                        key={input.id}
                                        value={currentUser?.[input.name]}
                                        onChange={() => {}}
                                        // errorMessage={errorsForm[input.name][0]}
                                        {...input}
                                        disabled
                                    />
                                ))}
                            </Row>
                            <Row style={{ width: "calc(50% - 0.5rem)" }}>
                                {inputsUserInfo.slice(3, 4).map((input) => {
                                    return (
                                        <InputGroup
                                            key={input.id}
                                            value={dataTemp[input.name] || ""}
                                            onChange={(e) => handleChange(e)}
                                            {...input}
                                        />
                                    );
                                })}
                            </Row>
                        </Content>
                    </RightWrapper>
                    <RightWrapper>
                        <Header>
                            <Title>Address Shipping</Title>
                            <Button
                                variant="contained"
                                onClick={handleOpenAddNew}
                            >
                                New
                            </Button>
                        </Header>
                        <Content>
                            {isOpenAddNew ? (
                                <WrapperRow>
                                    <Row>
                                        <SelectGroup
                                            label="Province"
                                            placeholder="Select province ..."
                                            options={provinces}
                                            value={province}
                                            onChange={handleChangeProvince}
                                            // errorMessage={errorsForm['province'][0]}
                                        />
                                        <SelectGroup
                                            label="District"
                                            placeholder="Select district ..."
                                            options={districts}
                                            value={district}
                                            onChange={handleChangeDistrict}
                                            // errorMessage={errorsForm['district'][0]}
                                        />
                                        <SelectGroup
                                            label="Ward"
                                            placeholder="Select ward ..."
                                            options={wards}
                                            value={ward}
                                            onChange={handleChangeWard}
                                            // errorMessage={errorsForm['ward'][0]}
                                        />
                                    </Row>
                                    <Row>
                                        {inputs.slice(7, 8).map((input) => (
                                            <InputGroup
                                                key={input.id}
                                                value={newLocation[input.name]}
                                                onChange={(e) =>
                                                    handleChangeLocation(e)
                                                }
                                                // errorMessage={errorsForm[input.name][0]}
                                                {...input}
                                            />
                                        ))}
                                    </Row>
                                    <Button
                                        variant="contained"
                                        onClick={handleAddNewLocation}
                                    >
                                        Add
                                    </Button>
                                </WrapperRow>
                            ) : null}
                            {currentUser?.addressShipping.length > 0 ? (
                                currentUser.addressShipping.map((item) => {
                                    const location = `${item.address}, ${item.ward}, ${item.district}, ${item.province}`;
                                    return (
                                        <AddressShippingItem key={item.id}>
                                            <AddressShippingWrapper
                                                onClick={() =>
                                                    handleChangeDefault(
                                                        item.id,
                                                        item.isSelected
                                                    )
                                                }
                                            >
                                                <ImageLocationContainer>
                                                    <ImageLocation
                                                        src={imgLocation}
                                                        alt="imageLocation"
                                                    />
                                                </ImageLocationContainer>
                                                <ContentLocationContainer>
                                                    <TitleLocation>
                                                        {item.province}
                                                    </TitleLocation>
                                                    <DescriptionLocation>
                                                        {location}
                                                    </DescriptionLocation>
                                                </ContentLocationContainer>
                                                {item.isSelected ? (
                                                    <DefaultLocation>
                                                        Default
                                                    </DefaultLocation>
                                                ) : null}
                                            </AddressShippingWrapper>
                                            <ButtonEdit>
                                                <MdOutlineEditLocationAlt />
                                            </ButtonEdit>
                                            <ButtonDelete
                                                onClick={() =>
                                                    handleDeleteAddress(
                                                        item.id,
                                                        item.isSelected
                                                    )
                                                }
                                            >
                                                <MdOutlineWrongLocation />
                                            </ButtonDelete>
                                        </AddressShippingItem>
                                    );
                                })
                            ) : (
                                <LocationImageContainer>
                                    You don't have any address shipping
                                    <LocationImage
                                        src={imgNoLocation}
                                        alt="no-location"
                                    />
                                </LocationImageContainer>
                            )}
                        </Content>
                    </RightWrapper>
                </RightContainer>
            </Wrapper>
        </Container>
    );
};

export default Profile;
