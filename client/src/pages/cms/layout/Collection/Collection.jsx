import React, { useState } from "react";
import DataGrid from "../../../../components/Basic/DataGrid";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import { CollectionHeader, CollectionTitle } from "./CollectionStyle";
import * as data from "./data";
// import PopupEdit from "../../../../components/CMS/Collection/PopupEdit";
import { fetchGetAllCollection } from "../../../../services/collectionFetch";

const defaultColumnWidths = [
  { columnName: "cateCode", width: 200 },
  { columnName: "cateName", width: 300 },
  { columnName: "cateDescription", width: 400 },
];

const Collection = () => {
  const [option, setOption] = useState({
    isshowSort: false,
    isShowGroup: false,
    isShowEdit: false,
    isShowSearchBar: false,
    isShowSelect: false,
  });
  const [isOpen, setOpen] = useState(false);
  const [collectionDetail, setCollectionDetail] = useState();
  const [selection, setSelection] = React.useState([]);
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([
    { name: "cateCode", title: "Code" },
    { name: "cateName", title: "Collection" },
    { name: "cateDescription", title: "Description" },
  ]);

  React.useEffect(() => {
    const fetchData = async () => {
      await fetchGetAllCollection()
        .then((response) => {
          let tempArr = [];
          response.data.collection.forEach((item) => {
            tempArr.push({
              id: item._id,
              cateCode: item.cateCode,
              cateName: item.cateName,
            });
          });
          console.log(tempArr);
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
        setCollectionDetail(rows[selection[selection.length - 1]]);
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
            row={collectionDetail}
            open={isOpen}
            onClose={() => setOpen(false)}
          />
        );
      }, [isOpen])} */}

      <CollectionHeader>
        <CollectionTitle>Collection</CollectionTitle>
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
      </CollectionHeader>
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

export default Collection;
