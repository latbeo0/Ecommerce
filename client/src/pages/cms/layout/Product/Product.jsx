import React, { useState } from "react";
import DataGrid from "../../../../components/Basic/DataGrid";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import { ProductHeader, ProductTitle } from "./ProductStyle";
import * as data from "./data";
import PopupEdit from "../../../../components/CMS/Product/PopupEdit";
import { fetchGetAllProducts } from "../../../../services/productFetch";

const defaultColumnWidths = [
  { columnName: "productName", width: 300 },
  { columnName: "primaryImages", width: 200 },
  { columnName: "gender", width: 130 },
  { columnName: "productDescription", width: 450 },
  { columnName: "secondaryImages", width: 500 },
  { columnName: "cateName", width: 200 },
  { columnName: "price", width: 200 },
  // { columnName: "newPrice", width: 180 },
  { columnName: "collectName", width: 200 },
  { columnName: "saleName", width: 200 },
  { columnName: "stateName", width: 200 },
  { columnName: "colors", width: 250 },
  { columnName: "quantity", width: 150 },
  { columnName: "stock", width: 150 },
];
const tableColumnExtensions = [
  { columnName: "price", align: "right" },
  { columnName: "newPrice", align: "right" },
  { columnName: "quantity", align: "right" },
  { columnName: "cateName", align: "center" },
  { columnName: "collectName", align: "center" },
  { columnName: "colors", align: "center" },
  { columnName: "stateName", align: "center" },
  { columnName: "saleName", align: "center" },
  { columnName: "stock", align: "center" },
]
const Product = () => {
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
    { name: "productName", title: "Product" },
    { name: "primaryImages", title: "Primary Images" },
    { name: "gender", title: "Gender" },
    { name: "productDescription", title: "Description" },
    // { name: "secondaryImages", title: "Secondary Images" },
    { name: "price", title: "Price" },
    // { name: "newPrice", title: "Price (Updated)" },
    { name: "cateName", title: "Category" },
    { name: "collectName", title: "Collection" },
    { name: "colors", title: "Colors" },
    { name: "quantity", title: "Quantity" },
    { name: "stateName", title: "State" },
    { name: "saleName", title: "Sale" },
    { name: "stock", title: "Stock" },
  ]);
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
      await fetchGetAllProducts()
        .then((response) => {
          let tempArr = [];
          response.data.product.forEach((item) => {
            tempArr.push({
              id: item._id,
              productName: item.productName,
              primaryImages: item.primaryImages,
              secondaryImages: item.secondaryImages,
              productDescription: item.productDescription,
              gender: item.gender,
              price: item.newPrice > 0 ? item.newPrice : item.price,
              // newPrice: item.newPrice,
              colors: item.colors,
              quantity: getQuantity(item.colors),
              stateCode: item.stateCode,
              stateName: item.vState[0]?.stateName,
              cateCode: item.cateCode,
              cateName: item.vCategory[0]?.cateName,
              collectCode: item.collectCode,
              collectName: item.vCollection[0]?.collectName,
              saleCode: item.saleCode,
              saleName: item.vSale[0]?.saleName,
              stock: item.isStock ? "In" : "Out",
              isStock: item.isStock,
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
            row={productDetail}
            open={isOpen}
            onClose={() => setOpen(false)}
          />
        );
      }, [isOpen])}

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

export default Product;
