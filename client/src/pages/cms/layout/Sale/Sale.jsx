import React, { useState } from "react";
import DataGrid from "../../../../components/Basic/DataGrid";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import { SaleHeader, SaleTitle } from "./SaleStyle";
import * as data from "./data";
// import PopupEdit from "../../../../components/CMS/Sale/PopupEdit";
import { fetchGetAllSale } from "../../../../services/saleFetch";

const defaultColumnWidths = [
  { columnName: "saleCode", width: 200 },
  { columnName: "saleName", width: 300 },
  { columnName: "saleDescription", width: 400 },
];

const Sale = () => {
  const [option, setOption] = useState({
    isshowSort: false,
    isShowGroup: false,
    isShowEdit: false,
    isShowSearchBar: false,
    isShowSelect: false,
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
      await fetchGetAllSale()
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
        setSaleDetail(rows[selection[selection.length - 1]]);
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
      {/* {React.useMemo(() => {
        return (
          <PopupEdit
            row={saleDetail}
            open={isOpen}
            onClose={() => setOpen(false)}
          />
        );
      }, [isOpen])} */}

      <SaleHeader>
        <SaleTitle>Sale</SaleTitle>
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
      </SaleHeader>
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
