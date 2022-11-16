import React from "react";
import DataGrid from "../../../../components/Basic/DataGrid";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import { UserHeader, UserTitle } from "./UserStyle";
import * as data from "./data";
import { fetchGetAllUser } from "../../../../services/userFetch";
import PopupEdit from "../../../../components/CMS/User/PopupEdit";
import { fetchCityByCode } from "../../../../services/regionFetch";

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
const User = () => {
  const [rows, setRows] = React.useState([]);
  const [selection, setSelection] = React.useState([]);
  const [isOpen, setOpen] = React.useState(false);
  const [columns, setColumns] = React.useState([
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
  const [userDetail, setUserDetail] = React.useState();

  React.useEffect(() => {
    fetchGetAllUser()
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
  const handleClickOptionButton = (event, type) => {
    switch (type) {
      case data.types.SHOW_SORT:
        setOption({ ...option, isshowSort: !option.isshowSort });
        break;
      case data.types.SHOW_GROUP:
        setOption({ ...option, isShowGroup: !option.isShowGroup });
        break;
      case data.types.SHOW_SELECT:
        setOption({ ...option, isShowSelect: !option.isShowSelect });
        break;
      case data.types.SHOW_SEARCH_BAR:
        setOption({ ...option, isShowSearchBar: !option.isShowSearchBar });
        break;
      case data.types.SHOW_EDIT:
        setUserDetail(rows[selection[selection.length - 1]]);
        setOpen(true);
        break;
      default:
        break;
    }
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
            row={userDetail}
            open={isOpen}
            onClose={() => setOpen(false)}
          />
        );
      }, [isOpen])}
      <UserHeader>
        <UserTitle>User</UserTitle>
        <Stack direction="row" alignItems="center" spacing={1}>
          {data.ListButton.map((item) => (
            <IconButton
              key={item.key}
              aria-label={item.ariaLabel}
              size={item.size}
              onClick={(event) => handleClickOptionButton(event, item.type)}
            >
              {item.icon}
            </IconButton>
          ))}
        </Stack>
      </UserHeader>
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
