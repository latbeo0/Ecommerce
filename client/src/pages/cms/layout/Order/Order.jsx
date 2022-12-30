import React, { useState } from "react";
import DataGrid from "../../../../components/Basic/DataGrid";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import { OrderHeader, OrderTitle } from "./OrderStyle";
import * as data from "./data";
// import PopupEdit from "../../../../components/CMS/Order/PopupEdit";
import { fetchGetAllOrder } from "../../../../services/orderFetch";
import BasicPopup from "../../../../components/CMS/BasicPopup/BasicPopup";
import Toolbar from "../../../../components/CMS/Toolbar/Toolbar";
import { selectUser } from "../../../../redux/userSlice";
import { useSelector } from "react-redux";
import PopupConfirm from "./../../../../components/CMS/Order/PopupConfirm/PopupConfirm";

const defaultColumnWidths = [
  { columnName: "orderCode", width: 200 },
  { columnName: "totalPrice", width: 200 },
  { columnName: "userId", width: 200 },
  { columnName: "stateOrder", width: 200 },
  { columnName: "deliveredAt", width: 200 },
];
const actionReducer = (state, action) => {
  switch (action.type) {
    case "VIEWDETAIL":
      return { ...state, type: "APPROVE", payload: action.payload, open: true };
    case "OPTION":
      return state;
    default:
      return { ...state, type: "", payload: null, open: false };
  }
};
const Order = () => {
  const { currentUser } = useSelector(selectUser);
  const [option, setOption] = useState({
    isShowSort: false,
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
  const [isOpen, setOpen] = useState(false);
  const [orderDetail, setOrderDetail] = useState();
  const [selection, setSelection] = React.useState([]);
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([
    { name: "orderCode", title: "Code" },
    { name: "totalPrice", title: "Total Price" },
    { name: "userId", title: "User" },
    { name: "stateOrder", title: "State" },
    { name: "deliveredAt", title: "Time" },
  ]);

  React.useEffect(() => {
    const fetchData = async () => {
      await fetchGetAllOrder(currentUser.access_token)
        .then((response) => {
          let tempArr = [];
          response?.data?.orders?.forEach((item) => {
            tempArr.push({
              id: item._id,
              orderCode: item.orderCode,
              totalPrice: item.totalPrice,
              userId: item.userId,
              stateOrder: item.stateOrder,
              addressShipping: item.addressShipping,
              listOderItems: item.listOderItems,
              deliveredAt:
                item.deliveredAt &&
                `${item.deliveredAt?.getDate()}/${item.deliveredAt?.getMonth()}/${item.deliveredAt?.getFullYear()}`,
            });
          });
          setRows(tempArr);
        })
        .catch((err) => {
          throw err;
        });
    };
    fetchData();
  }, []);

  const ListButtonCustomize = [
    {
      menuName: !option.isShowSelect ? "Show select box" : "Hide select box",
      onClick: () => {
        setOption({ ...option, isShowSelect: !option.isShowSelect });
      },
      backgroundColor: option.isShowSelect && "#1890ffc9",
      color: option.isShowSelect && "#FFF",
    },
    {
      menuName: !option.isShowSearchBar ? "Show search bar" : "Hide search bar",
      onClick: () => {
        setOption({
          ...option,
          isShowSearchBar: !option.isShowSearchBar,
        });
      },
      backgroundColor: option.isShowSearchBar && "#1890ffc9",
      color: option.isShowSearchBar && "#FFF",
    },
    {
      menuName: !option.isShowGroup ? "Show grouping" : "Hide grouping",
      onClick: () => {
        setOption({ ...option, isShowGroup: !option.isShowGroup });
      },
      backgroundColor: option.isShowGroup && "#1890ffc9",
      color: option.isShowGroup && "#FFF",
    },
    {
      menuName: !option.isShowSort ? "Show sorting" : "Hide sorting",
      onClick: () => {
        setOption({ ...option, isShowSort: !option.isShowSort });
      },
      backgroundColor: option.isShowSort && "#1890ffc9",
      color: option.isShowSort && "#FFF",
    },
  ];
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
          <PopupConfirm
            collection="SALE"
            type={action.type}
            row={action.payload}
            open={action.open}
            onClose={() => dispatchAction({ type: "" })}
          />
        );
      }, [action.open])}

      <OrderHeader>
        <OrderTitle>Order</OrderTitle>
      </OrderHeader>
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
            showSort={option.isShowSort}
            showSelect={option.isShowSelect}
            showGroup={option.isShowGroup}
            showSearchBar={option.isShowSearchBar}
            onSelectionChange={handleRowChange}
            defaultColumnWidth={defaultColumnWidths}
            tableColumnExtensions={[]}
          />
        );
      }, [rows, columns, selection, option])}
    </>
  );
};

export default Order;
