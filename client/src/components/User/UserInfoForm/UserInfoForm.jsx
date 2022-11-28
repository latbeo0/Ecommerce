import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
    Container,
    Title,
    UserInfoContainer,
    UserInfoWrapper,
    Row,
    AddressShippingContainer,
} from "./UserInfoFormStyled";
import { InputGroup, SelectGroup } from "../../Basic";

const UserInfoForm = (props) => {
    const { inputs, userInfo, errorsForm, handleChange } = props;
    const location = useSelector((state) => state.location);

    const provinces = location?.province?.map((item) => ({
        value: item.code,
        label: item.name,
        name: "province",
    }));

    const [province, setProvince] = useState(
        userInfo.province
            ? provinces.find((item) => item.label === userInfo.province)
            : null
    );

    const handleChangeProvince = (selectOption) => {
        if (handleChange) {
            setProvince(selectOption);
            handleChange({
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

    const [district, setDistrict] = useState(
        userInfo.district !== ""
            ? districts.find((item) => item.label === userInfo.district)
            : null
    );

    const handleChangeDistrict = (selectOption) => {
        if (handleChange) {
            setDistrict(selectOption);
            handleChange({
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

    const [ward, setWard] = useState(
        userInfo.ward
            ? wards.find((item) => item.label === userInfo.ward)
            : null
    );

    const handleChangeWard = (selectOption) => {
        if (handleChange) {
            setWard(selectOption);
            handleChange({
                target: {
                    name: selectOption.name,
                    value: selectOption.label,
                },
            });
        }
    };

    useEffect(() => {
        setProvince(
            userInfo.province
                ? provinces.find((item) => item.label === userInfo.province)
                : null
        );
        setDistrict(
            userInfo.district !== ""
                ? districts.find((item) => item.label === userInfo.district)
                : null
        );
        setWard(
            userInfo.ward
                ? wards.find((item) => item.label === userInfo.ward)
                : null
        );
    }, [userInfo]);

    return (
        <Container>
            <UserInfoContainer>
                <Title>User information</Title>
                <UserInfoWrapper>
                    <Row>
                        {inputs.userInfo.slice(0, 2).map((input) => (
                            <InputGroup
                                key={input.id}
                                value={userInfo[input.name]}
                                onChange={(e) => handleChange(e)}
                                errorMessage={errorsForm[input.name][0]}
                                {...input}
                            />
                        ))}
                    </Row>
                    <Row>
                        {inputs.userInfo.slice(2, 3).map((input) => (
                            <InputGroup
                                key={input.id}
                                value={userInfo[input.name]}
                                onChange={(e) => handleChange(e)}
                                errorMessage={errorsForm[input.name][0]}
                                {...input}
                            />
                        ))}
                    </Row>
                </UserInfoWrapper>
            </UserInfoContainer>
            <AddressShippingContainer>
                <Title>Address Shipping</Title>
                <UserInfoWrapper>
                    <Row style={{ width: "calc(50% - 1rem)" }}>
                        {inputs.addressShipping.slice(0, 1).map((input) => (
                            <InputGroup
                                key={input.id}
                                value={userInfo[input.name]}
                                onChange={(e) => handleChange(e)}
                                errorMessage={errorsForm[input.name][0]}
                                {...input}
                            />
                        ))}
                    </Row>
                    <Row>
                        <SelectGroup
                            label="Province *"
                            placeholder="Select province ..."
                            options={provinces}
                            value={province}
                            onChange={handleChangeProvince}
                            errorMessage={errorsForm["province"][0]}
                        />
                        <SelectGroup
                            label="District *"
                            placeholder="Select district ..."
                            options={districts}
                            value={district}
                            onChange={handleChangeDistrict}
                            errorMessage={errorsForm["district"][0]}
                        />
                        <SelectGroup
                            label="Ward *"
                            placeholder="Select ward ..."
                            options={wards}
                            defaultValue={ward}
                            value={ward}
                            onChange={handleChangeWard}
                            errorMessage={errorsForm["ward"][0]}
                        />
                    </Row>
                    <Row>
                        {inputs.addressShipping.slice(4, 5).map((input) => (
                            <InputGroup
                                key={input.id}
                                value={userInfo[input.name]}
                                onChange={(e) => handleChange(e)}
                                errorMessage={errorsForm[input.name][0]}
                                {...input}
                            />
                        ))}
                    </Row>
                </UserInfoWrapper>
            </AddressShippingContainer>
        </Container>
    );
};

export default UserInfoForm;
