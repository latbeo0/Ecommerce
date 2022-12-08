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
const Product = () => {
  const navigate = useNavigate();

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
    { name: "gender", title: "Gender" },
    { name: "productDescription", title: "Description" },
    { name: "cateName", title: "Category" },
    { name: "collectName", title: "Collection" },
    { name: "colors", title: "Colors" },
    { name: "quantity", title: "Quantity" },
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
      case data.types.SHOW_DETAIL:
        if (selection) {
          navigate(
            `/list-product/detail${rows[selection[selection.length - 1]].id}`
          );
        }
        break;
      case data.types.SHOW_CUSTOM:
        setOption({ ...option, isShowSearchBar: !option.isShowSearchBar });
        break;
      default:
        navigate(-1);
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
        {/* <Stack direction="row" alignItems="center" spacing={1}>
          {data.ListButton.map((item) => (
            <ProductToolbarButtonCard
              key={item.key}
            >
              <Button
                type="primary"
                shape="round"
                icon={item.icon}
                size="medium"
                onClick={(event) => handleClickOptionButton(event, item.type)}
              >
                Download
              </Button>
            </ProductToolbarButtonCard>
          ))}
        </Stack> */}
      </ProductHeader>
      {/* {React.useMemo(() => {
        <Toolbar
          listButton={data.ListButton}
          onClickItem={handleClickOptionButton}
        />;
      }, [data.ListButton])} */}
        <Toolbar
          listButton={data.ListButton}
          listButtonCustom={data.ListButtonCustomize}
          onClickItem={handleClickOptionButton}
        />
      {/* <ProductToolbar>
        <Stack direction="row" alignItems="center" spacing={1}>
          {data.ListButton.map((item) => (
            <Button
              key={item.key}
              variant="outlined"
              startIcon={item.icon}
              size="medium"
              onClick={(event) => handleClickOptionButton(event, item.type)}
            >
              {item.ariaLabel}
            </Button>
          ))}
        </Stack>
      </ProductToolbar> */}
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
