import React, { useState } from "react";
import DataGrid from "../../../../../components/Basic/DataGrid";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
// import { ProductHeader, ProductTitle } from "./DetailStyle";
import * as data from "../data";
import PopupEdit from "../../../../../components/CMS/Product/Detail/PopupEdit";
import { fetchGetProductByIdMaster } from "../../../../../services/productFetch";
import { DetailHeader, DetailTitle } from "./DetailStyle";
import { useParams } from "react-router-dom";

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
const Detail = () => {
  const { id } = useParams();
  const [option, setOption] = useState({
    isshowSort: false,
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

  const getQuantity = (data) => {
    let quantity = 0;
    if (data) {
      data.forEach((item) => {
        quantity += item.quantity;
      });
    }
    return quantity;
  };
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
              quantity: getQuantity(item?.color?.details).toString(),
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
        setProductDetail(rows[selection[selection.length - 1]]);
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
            master={id}
            row={productDetail}
            open={isOpen}
            onClose={() => setOpen(false)}
          />
        );
      }, [isOpen])}

      <DetailHeader>
        <DetailTitle>Product Detail</DetailTitle>
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
      </DetailHeader>
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
            tableColumnExtensions={tableColumnExtensions}
          />
        );
      }, [rows, columns, selection, option])}
    </>
  );
};

export default Detail;
