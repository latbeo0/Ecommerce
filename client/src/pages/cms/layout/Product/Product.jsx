import React, { useState } from "react";
import DataGrid from "../../../../components/Basic/DataGrid";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import { ProductHeader, ProductTitle } from "./ProductStyle";
import * as data from "./data";
import {
  generateRows,
  globalSalesValues,
} from "../../../../components/Basic/DataGrid/data/generator";

const sales = generateRows({ columnValues: globalSalesValues, length: 1000 });

const Product = () => {
  const [option, setOption] = useState({
    isShowFilter: false,
    isShowGroup: false,
    isShowEdit: false,
    isShowSearchBar: false,
    isShowSelect: false,
  });
  const [selection, setSelection] = React.useState([]);
  const [rows, setRows] = useState(sales);
  const handleClickOptionButton = (event, type) => {
    switch (type) {
      case data.types.SHOW_FILTER:
        setOption({ ...option, isShowFilter: !option.isShowFilter });
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
        setOption({ ...option, isShowEdit: !option.isShowEdit });
        break;
      default:
        break;
    }
  };
  const handleRowChange = (event) => {
    if (!option.isShowSelect) {
      let rowSelected = [];
      rowSelected.push(event[event.length - 1]);
      setSelection(rowSelected);
    } else setSelection(event);
  };
  const handleCommitChanges = ({ added, changed }) => {
    let changedRows;
    if (added) {
      const startingAddedId =
        rows.length > 0 ? rows[rows.length - 1].id + 1 : 0;
      changedRows = [
        ...rows,
        ...added.map((row, index) => ({
          id: startingAddedId + index,
          ...row,
        })),
      ];
    }
    if (changed) {
      changedRows = rows.map((row) =>
        changed[row.id] ? { ...row, ...changed[row.id] } : row
      );
    }
    setRows(changedRows);
  };
  return (
    <>
      <ProductHeader>
        <ProductTitle>Product</ProductTitle>
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
      </ProductHeader>
      <DataGrid
        rows={rows}
        columns={[
          { name: "product", title: "Product" },
          { name: "region", title: "Region" },
          { name: "amount", title: "Sale Amount" },
          { name: "saleDate", title: "Sale Date" },
          { name: "customer", title: "Customer" },
        ]}
        selection={selection}
        showFilter={option?.isShowFilter}
        showSelect={option?.isShowSelect}
        showGroup={option?.isShowGroup}
        showSearchBar={option?.isShowSearchBar}
        showEdit={option?.isShowEdit}
        onSelectionChange={handleRowChange}
        onCommitChanges={handleCommitChanges}
      />
    </>
  );
};

export default Product;
