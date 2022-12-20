import React, { useState } from "react";
import DataGrid from "../../../../../components/Basic/DataGrid";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
// import { ProductHeader, ProductTitle } from "./DetailStyle";
import * as data from "./data";
import PopupEdit from "../../../../../components/CMS/Product/Detail/PopupEdit";
import { fetchGetProductByIdMaster } from "../../../../../services/productFetch";
import { DetailHeader, DetailTitle } from "./DetailStyle";
import { useParams } from "react-router-dom";
import Toolbar from "./../../../../../components/CMS/Toolbar/Toolbar";

const defaultColumnWidths = [
    { columnName: "primaryImages", width: 250 },
    { columnName: "color", width: 150 },
    { columnName: "saleName", width: 150 },
    { columnName: "stateName", width: 150 },
    { columnName: "price", width: 150 },
    { columnName: "quantity", width: 150 },
    { columnName: "stock", width: 150 },
];
const tableColumnExtensions = [
    { columnName: "stateName", align: "center" },
    { columnName: "quantity", align: "right" },
    { columnName: "price", align: "right" },
    { columnName: "color", align: "center" },
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
const Detail = () => {
    const { id } = useParams();
    const [option, setOption] = useState({
        isShowSort: false,
        isShowGroup: false,
        isShowEdit: false,
        isShowSearchBar: false,
        isShowSelect: false,
    });
    const [isOpen, setOpen] = useState(false);
    const [productDetail, setProductDetail] = useState();
    const [selection, setSelection] = React.useState([]);
    const [rows, setRows] = useState([]);
    const [columns, setColumns] = useState([
        { name: "primaryImages", title: "Photo" },
        { name: "color", title: "Color" },
        { name: "saleName", title: "Sale" },
        { name: "stateName", title: "State" },
        { name: "price", title: "Price" },
        { name: "quantity", title: "Quantity" },
        { name: "stock", title: "Stock" },
    ]);

    const [action, dispatchAction] = React.useReducer(actionReducer, {
        type: "",
        payload: null,
        open: false,
    });
    const getQuantity = (data) => {
        let quantity = 0;
        if (data) {
            data.forEach((item) => {
                quantity += item.quantity;
            });
        }
        return quantity;
    };
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
    React.useEffect(() => {
        const fetchData = async () => {
            await fetchGetProductByIdMaster(id)
                .then((response) => {
                    let tempArr = [];
                    response.data.product.forEach((item) => {
                        tempArr.push({
                            id: item._id,
                            productMasterId: item.productMasterId,
                            primaryImages: item.primaryImages,
                            color: item.color,
                            saleCode: item.saleCode,
                            saleName: item.vSale[0]?.saleName,
                            stateCode: item.stateCode,
                            stateName: item.vState[0]?.stateName,
                            price: item.price,
                            quantity: getQuantity(
                                item?.color?.details
                            ).toString(),
                            isStock: item.isStock,
                            stock: item.isStock ? "In" : "Out",
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
                        master={id}
                        row={action.payload}
                        open={action.open}
                        onClose={() => dispatchAction({ type: "" })}
                    />
                );
            }, [action.open])}

            <DetailHeader>
                <DetailTitle>Product Detail</DetailTitle>
            </DetailHeader>
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
                        tableColumnExtensions={tableColumnExtensions}
                    />
                );
            }, [rows, columns, selection, option])}
        </>
    );
};

export default Detail;
