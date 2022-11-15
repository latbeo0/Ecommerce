import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const UserInfoForm = (props) => {
    const { userInfo, handleChange } = props;
    const location = useSelector((state) => state.location);

    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);

    useEffect(() => {
        if (userInfo.district !== '') {
            let idProvince = 0;
            location.province.forEach((item) => {
                if (item.name === userInfo.province) {
                    idProvince = item.code;
                }
            });
            const newDistricts = location.district.filter(
                (item) => item.province_code === idProvince
            );
            setDistricts(newDistricts);
        }
        if (userInfo.ward !== '') {
            let idDistrict = 0;
            location.district.forEach((item) => {
                if (item.name === userInfo.district) {
                    idDistrict = item.code;
                }
            });

            const newWards = location.ward.filter(
                (item) => item.district_code === idDistrict
            );
            setWards(newWards);
        }
    }, [location, userInfo]);

    return (
        <>
            <h2
                style={{ textAlign: 'center', margin: 0, marginBottom: '2rem' }}
            >
                User Info Form
            </h2>
            <div
                style={{
                    display: 'flex',
                    gap: '1rem .5rem',
                }}
            >
                <div
                    style={{
                        flex: '1',
                        display: 'flex',
                        gap: '1rem .5rem',
                        flexDirection: 'column',
                    }}
                >
                    <label>First Name</label>
                    <input
                        autoFocus
                        required
                        name='firstName'
                        type='text'
                        value={userInfo.firstName}
                        onChange={(e) => handleChange(e)}
                    />
                    <label>Last Name</label>
                    <input
                        required
                        name='lastName'
                        type='text'
                        value={userInfo.lastName}
                        onChange={(e) => handleChange(e)}
                    />
                    <label>Email</label>
                    <input
                        required
                        name='email'
                        type='email'
                        value={userInfo.email}
                        onChange={(e) => handleChange(e)}
                    />
                    <label>Phone</label>
                    <input
                        required
                        name='phone'
                        type='text'
                        value={userInfo.phone}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div
                    style={{
                        flex: '1',
                        display: 'flex',
                        gap: '1rem .5rem',
                        flexDirection: 'column',
                    }}
                >
                    <label>Province</label>
                    <input
                        required
                        name='province'
                        type='text'
                        // value={password}
                        // onChange={(e) => updateFields({ password: e.target.value })}
                    />
                    <label>District</label>
                    <input
                        required
                        type='text'
                        // value={password}
                        // onChange={(e) => updateFields({ password: e.target.value })}
                    />
                    <label>Ward</label>
                    <input
                        required
                        type='text'
                        // value={password}
                        // onChange={(e) => updateFields({ password: e.target.value })}
                    />
                    <label>Address</label>
                    <input
                        required
                        type='text'
                        // value={password}
                        // onChange={(e) => updateFields({ password: e.target.value })}
                    />
                </div>
            </div>
        </>
    );
};

export default UserInfoForm;
