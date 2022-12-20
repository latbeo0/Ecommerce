import React, { useState } from "react";
import DataGrid from "../../../../components/Basic/DataGrid";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import { CategoryHeader, CategoryTitle } from "./CategoryStyle";
import * as data from "./data";
// import PopupEdit from "../../../../components/CMS/Category/PopupEdit";
import { fetchGetAllCategory } from "../../../../services/categoryFetch";
import BasicPopup from "../../../../components/CMS/BasicPopup/BasicPopup";
import Toolbar from "./../../../../components/CMS/Toolbar/Toolbar";

const defaultColumnWidths = [
    { columnName: "cateCode", width: 200 },
    { columnName: "cateName", width: 300 },
    { columnName: "cateDescription", width: 400 },
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
        default:
            return { ...state, type: "", payload: null, open: false };
    }
};
const Category = () => {
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

    const [selection, setSelection] = React.useState([]);
    const [rows, setRows] = useState([]);
    const [columns, setColumns] = useState([
        { name: "cateCode", title: "Code" },
        { name: "cateName", title: "Category" },
        { name: "cateDescription", title: "Description" },
    ]);

    React.useEffect(() => {
        const fetchData = async () => {
            await fetchGetAllCategory()
                .then((response) => {
                    let tempArr = [];
                    response.data.category.forEach((item) => {
                        tempArr.push({
                            id: item._id,
                            cateCode: item.cateCode,
                            cateName: item.cateName,
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
                    <BasicPopup
                        collection="CATEGORY"
                        type={action.type}
                        row={action.payload}
                        open={action.open}
                        onClose={() => dispatchAction({ type: "" })}
                    />
                );
            }, [action.open])}

            <CategoryHeader>
                <CategoryTitle>Category</CategoryTitle>
            </CategoryHeader>
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

export default Category;
