import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DataGrid from "../../../../components/Basic/DataGrid";
import Stack from "@mui/material/Stack";
import { ProductHeader, ProductTitle, ProductToolbar } from "./ProductStyle";
import * as data from "./data";
import PopupEdit from "../../../../components/CMS/Product/PopupEdit";
import { fetchGetAllProductMaster } from "../../../../services/productFetch";
import Button from "@mui/material/Button";
import Toolbar from "../../../../components/CMS/Toolbar/Toolbar";

const defaultColumnWidths = [
    { columnName: "productName", width: 300 },
    { columnName: "gender", width: 130 },
    { columnName: "productDescription", width: 450 },
    { columnName: "cateName", width: 200 },
    { columnName: "collectName", width: 200 },
    { columnName: "colors", width: 250 },
    { columnName: "quantity", width: 150 },
    { columnName: "stock", width: 150 },
];
const tableColumnExtensions = [
    { columnName: "quantity", align: "right" },
    { columnName: "cateName", align: "center" },
    { columnName: "collectName", align: "center" },
    { columnName: "colors", align: "center" },
    { columnName: "stock", align: "center" },
];

const actionReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return { ...state, type: "ADD", payload: "", open: true };
        case "UPDATE":
            return {
                ...state,
                type: "UPDATE",
                payload: action.payload,
                open: true,
            };
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
const Product = () => {
    const navigate = useNavigate();
    const [selection, setSelection] = React.useState([]);
    const [rows, setRows] = useState([]);
    const [columns, setColumns] = useState([
        { name: "productName", title: "Product" },
        { name: "gender", title: "Gender" },
        { name: "productDescription", title: "Description" },
        { name: "cateName", title: "Category" },
        { name: "collectName", title: "Collection" },
        { name: "colors", title: "Colors" },
        { name: "quantity", title: "Quantity" },
        { name: "stock", title: "Stock" },
    ]);

    const [action, dispatchAction] = React.useReducer(actionReducer, {
        type: "",
        payload: null,
        open: false,
    });
    const [option, setOption] = useState({
        isShowSort: false,
        isShowGroup: false,
        isShowEdit: false,
        isShowSearchBar: false,
        isShowSelect: false,
    });

    const getQuantity = (colors) => {
        let quantity = 0;
        colors.forEach((color) => {
            color.details.forEach((detail) => {
                quantity += detail.quantity;
            });
        });
        return quantity;
    };
    React.useEffect(() => {
        const fetchData = async () => {
            await fetchGetAllProductMaster()
                .then((response) => {
                    let tempArr = [];
                    response.data?.productMaster?.forEach((item) => {
                        tempArr.push({
                            id: item._id,
                            productName: item.productName,
                            productDescription: item.productDescription,
                            gender: item.gender,
                            cateCode: item.cateCode,
                            cateName: item.vCategory[0]?.cateName,
                            collectCode: item.collectCode,
                            collectName: item.vCollection[0]?.collectName,
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
            menuName: !option.isShowSelect
                ? "Show select box"
                : "Hide select box",
            onClick: () => {
                setOption({ ...option, isShowSelect: !option.isShowSelect });
            },
            backgroundColor: option.isShowSelect && "#1890ffc9",
            color: option.isShowSelect && "#FFF",
        },
        {
            menuName: !option.isShowSearchBar
                ? "Show search bar"
                : "Hide search bar",
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
                    <PopupEdit
                        type={action.type}
                        row={action.payload}
                        open={action.open}
                        onClose={() => dispatchAction({ type: "" })}
                    />
                );
            }, [action.open])}

            <ProductHeader>
                <ProductTitle>Product</ProductTitle>
            </ProductHeader>
            <Toolbar
                activeItem={selection[0] >= 0 ? true : false}
                listButton={data.ListButton}
                listButtonCustom={ListButtonCustomize}
                onClickItem={(button, buttonType) => {
                    buttonType === "DETAIL"
                        ? navigate(
                              `detail${
                                  rows[selection[selection.length - 1]].id
                              }`
                          )
                        : dispatchAction({
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
                        tableColumnExtensions={tableColumnExtensions}
                    />
                );
            }, [rows, columns, selection, option])}
        </>
    );
};

export default Product;
