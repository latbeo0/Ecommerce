import React, { useState } from "react";
import DataGrid from "../../../../components/Basic/DataGrid";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import { SaleHeader, SaleTitle } from "./SaleStyle";
import * as data from "./data";
// import PopupEdit from "../../../../components/CMS/Sale/PopupEdit";
import { fetchGetAllSale } from "../../../../services/saleFetch";
import BasicPopup from "./../../../../components/CMS/BasicPopup/BasicPopup";
import Toolbar from './../../../../components/CMS/Toolbar/Toolbar';
import { selectUser } from './../../../../redux/userSlice';
import { useSelector } from 'react-redux';

const defaultColumnWidths = [
  { columnName: "saleCode", width: 200 },
  { columnName: "saleName", width: 300 },
  { columnName: "saleDescription", width: 400 },
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
const Sale = () => {
  const { currentUser } = useSelector(selectUser);
  const [option, setOption] = useState({
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
  const [isOpen, setOpen] = useState(false);
  const [saleDetail, setSaleDetail] = useState();
  const [selection, setSelection] = React.useState([]);
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([
    { name: "saleCode", title: "Code" },
    { name: "saleName", title: "Sale" },
    { name: "saleDescription", title: "Description" },
  ]);

  React.useEffect(() => {
    const fetchData = async () => {
      await fetchGetAllSale(currentUser.access_token)
        .then((response) => {
          let tempArr = [];
          response.data.sale.forEach((item) => {
            tempArr.push({
              id: item._id,
              saleCode: item.saleCode,
              saleName: item.saleName,
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
          <BasicPopup
            collection="SALE"
            type={action.type}
            row={action.payload}
            open={action.open}
            onClose={() => dispatchAction({ type: "" })}
          />
        );
      }, [action.open])}

     <SaleHeader>
        <SaleTitle>Sale</SaleTitle>
      </SaleHeader>
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
            tableColumnExtensions={[]}
          />
        );
      }, [rows, columns, selection, option])}
    </>
  );
};

export default Sale;
