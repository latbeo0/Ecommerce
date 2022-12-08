import React from "react";
import DataGrid from "../../../../components/Basic/DataGrid";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import { UserHeader, UserTitle } from "./UserStyle";
import * as data from "./data";
import { fetchGetAllUser } from "../../../../services/userFetch";
import PopupEdit from "../../../../components/CMS/User/PopupEdit";
import { fetchCityByCode } from "../../../../services/regionFetch";
import Toolbar from "./../../../../components/CMS/Toolbar/Toolbar";
import { useSelector } from 'react-redux';
import { selectUser } from './../../../../redux/userSlice';
import { useParams } from 'react-router-dom';

const defaultColumnWidths = [
  { columnName: "avatar", width: 100 },
  { columnName: "firstName", width: 200 },
  { columnName: "lastName", width: 200 },
  { columnName: "gender", width: 100 },
  { columnName: "birthDateString", width: 250 },
  { columnName: "addressString", width: 450 },
  { columnName: "email", width: 250 },
  // { columnName: "newPrice", width: 180 },
  { columnName: "phone", width: 200 },
  { columnName: "roleName", width: 100 },
  { columnName: "isActiveString", width: 100 },
  { columnName: "createdAtConvert", width: 250 },
];
const actionReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, type: "ADD", payload: "", open: true };
    case "UPDATE":
      return { ...state, type: "UPDATE", payload: action.payload, open: true };
    case "DELETE":
      return state;
    case "FILTER":
      return state;
    case "OPTION":
      return state;
    default:
      return { ...state, type: "", payload: null, open: false };
  }
};
const User = () => {
  const { currentUser } = useSelector(selectUser);
  const { token } = useParams();

  const [rows, setRows] = React.useState([]);
  const [selection, setSelection] = React.useState([]);
  const [columns] = React.useState([
    { name: "avatar", title: "Avatar" },
    { name: "firstName", title: "First name" },
    { name: "lastName", title: "Last name" },
    { name: "gender", title: "Gender" },
    { name: "birthDateString", title: "Birthday" },
    { name: "addressString", title: "Address" },
    { name: "email", title: "Email (Account)" },
    { name: "phone", title: "Phone" },
    { name: "roleName", title: "Role" },
    { name: "isActiveString", title: "Active" },
    { name: "createdAtConvert", title: "Created At" },
  ]);

  const [option, setOption] = React.useState({
    isshowSort: false,
    isShowGroup: false,
    isShowEdit: false,
    isShowSearchBar: false,
    isShowSelect: false,
  });

  const [action, dispatchAction] = React.useReducer(actionReducer, {
    type: "",
    payload: null,
    open: false,
  });

  React.useEffect(() => {
    fetchGetAllUser(currentUser.access_token)
      .then((response) => {
        let tempArr = [];
        response.data.user.forEach((item, index) => {
          if (item.address) {
            fetchCityByCode(item.address?.city, 3).then((address) => {
              const adr = {
                ...address.data,
                districts: address.data.districts
                  .filter(
                    (districtFiltered) =>
                      districtFiltered.code === item.address?.district
                  )
                  .map((district) => {
                    return {
                      ...district,
                      wards: district.wards.filter(
                        (wardFiltered) =>
                          wardFiltered.code === item.address?.ward
                      ),
                    };
                  }),
              };
              tempArr.push({
                id: item._id,
                firstName: item.firstName,
                lastName: item.lastName,
                gender: item.gender,
                birthDateString:
                  item.birthDate &&
                  item.birthDate.toLocaleString("vi-VN", {
                    timeZone: "UTC",
                  }),
                birthDate: item.birthDate,
                addressString: item.address
                  ? `${
                      adr.districts[0].wards[0].name &&
                      adr.districts[0].wards[0].name + ", "
                    }${adr.districts[0].name && adr.districts[0].name + ", "}${
                      adr.name && adr.name
                    }`
                  : "Unknown",
                address: item.address,
                email: item.email,
                phone: item.phone,
                roleCode: item.roleCode,
                roleName: item.vRole[0]?.roleName,
                isActive: item.isActive,
                isActiveString: item.isActive ? "Enable" : "Disable",
                createdAt: item.createdAt,
                createdAtConvert: item.createdAt.toLocaleString("vi-VN", {
                  timeZone: "UTC",
                }),
              });
              setRows(tempArr.slice());
            });
          } else {
            tempArr.push({
              id: item._id,
              firstName: item.firstName,
              lastName: item.lastName,
              gender: item.gender,
              birthDateString:
                item.birthDate &&
                item.birthDate.toLocaleString("vi-VN", {
                  timeZone: "UTC",
                }),
              birthDate: item.birthDate,
              addressString: "Unknown",
              address: item.address,
              email: item.email,
              phone: item.phone,
              roleCode: item.roleCode,
              roleName: item.vRole[0]?.roleName,
              isActive: item.isActive,
              isActiveString: item.isActive ? "Enable" : "Disable",
              createdAt: item.createdAt,
              createdAtConvert: item.createdAt.toLocaleString("vi-VN", {
                timeZone: "UTC",
              }),
            });
            setRows(tempArr);
          }
          // tempArr.push({
          //   id: item._id,
          //   firstName: item.firstName,
          //   lastName: item.lastName,
          //   gender: item.gender,
          //   birthDateString:
          //     item.birthDate &&
          //     item.birthDate.toLocaleString("vi-VN", {
          //       timeZone: "UTC",
          //     }),
          //   birthDate: item.birthDate,
          //   addressString: item.address
          //     ? convertAddress(
          //         item.address?.city,
          //         item.address?.district,
          //         item.address?.ward,
          //         item.address?.other
          //       )
          //     : "Unknown",
          //   address: item.address,
          //   email: item.email,
          //   phone: item.phone,
          //   role: item.roleCode,
          //   // roleName: item.vRole[0]?.name,
          //   isActive: item.isActive,
          //   isActiveString: item.isActive ? "Enable" : "Disable",
          //   createdAt: item.createdAt,
          //   createdAtConvert: item.createdAt.toLocaleString("vi-VN", {
          //     timeZone: "UTC",
          //   }),
          // });
        });
      })
      .catch((err) => {
        throw err;
      });
  }, []);
  const ListButtonCustomize = [
    {
      menuName: !option.isShowSelect ? "Show select box" : "Hide select box",
      onClick: () => {
        setOption({ ...option, isShowSelect: !option.isShowSelect });
      },
      backgroundColor: option.isShowSelect && "#1890ffc9",
      color: option.isShowSelect && "#FFF"
    },
    {
      menuName: !option.isShowSearchBar ? "Show search bar" : "Hide search bar",
      onClick: () => {
        setOption({ ...option, isShowSearchBar: !option.isShowSearchBar });
      },
      backgroundColor: option.isShowSearchBar && "#1890ffc9",
      color: option.isShowSearchBar && "#FFF"

    },
    {
      menuName: !option.isShowGroup ? "Show grouping" : "Hide grouping",
      onClick: () => {
        setOption({ ...option, isShowGroup: !option.isShowGroup });
      },
      backgroundColor: option.isShowGroup && "#1890ffc9",
      color: option.isShowGroup && "#FFF"

    },
    {
      menuName: !option.isShowSort ? "Show sorting" : "Hide sorting",
      onClick: () => {
        setOption({ ...option, isShowSort: !option.isShowSort });
      },
      backgroundColor: option.isShowSort && "#1890ffc9",
      color: option.isShowSort && "#FFF"

    },
  ];

  const convertAddress = (cityCode, districtCode, wardCode, other) => {
    // let address = "Unknown";
    const address = fetchCityByCode(cityCode, 3).then((response) => {
      return {
        ...response.data,
        districts: response.data.districts
          .filter((districtFiltered) => districtFiltered.code === districtCode)
          .map((district) => {
            return {
              ...district,
              wards: district.wards.filter(
                (wardFiltered) => wardFiltered.code === wardCode
              ),
            };
          }),
      };
    });
    // .then((response) => {
    //   return {
    //     ...response.data,
    //     districts: response.data.districts
    //       .filter((districtFiltered) => districtFiltered.code === districtCode)
    //       .map((district) => {
    //         return {
    //           ...district,
    //           wards: district.wards.filter(
    //             (wardFiltered) => wardFiltered.code === wardCode
    //           ),
    //         };
    //       }),
    //   };
    // });
    return address ? address.data.name : "Unknown";
  };

  const handleRowChange = (index) => {
    if (!option.isShowSelect) {
      let rowSelected = [];
      rowSelected.push(index[index.length - 1]);
      setSelection(rowSelected);
    } else setSelection(index);
  };
  return (
    <>
      {React.useMemo(() => {
        return (
          <PopupEdit
            type={action.type}
            row={action.payload}
            open={action.open}
            onClose={() => dispatchAction({ type: "" })}
          />
        );
      }, [action.open])}

      <UserHeader>
        <UserTitle>User</UserTitle>
      </UserHeader>
      <Toolbar
        activeItem={selection[0] >= 0 ? true : false}
        listButton={data.ListButton}
        listButtonCustom={ListButtonCustomize}
        onClickItem={(button, buttonType) => {
          dispatchAction({
            type: buttonType,
            payload: rows[selection[selection.length - 1]],
          });
        }}
      />
      {React.useMemo(() => {
        return (
          <DataGrid
            rows={rows}
            columns={columns}
            selection={selection}
            showSort={option.isshowSort}
            showSelect={option.isShowSelect}
            showGroup={option.isShowGroup}
            showSearchBar={option.isShowSearchBar}
            onSelectionChange={handleRowChange}
            defaultColumnWidth={defaultColumnWidths}
            // tableColumnExtensions={tableColumnExtensions}
          />
        );
      }, [rows, columns, selection, option])}
    </>
  );
};

export default User;
