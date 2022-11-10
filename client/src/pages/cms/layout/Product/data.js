import ModeEditIcon from "@mui/icons-material/ModeEdit";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const types = {
  BACK: "BACK", 
  SHOW_SORT: "SHOW_SORT",
  SHOW_SEARCH_BAR: "SHOW_SEARCH_BAR",
  SHOW_EDIT: "SHOW_EDIT",
  SHOW_GROUP: "SHOW_GROUP",
  SHOW_SELECT: "SHOW_SELECT",
  SHOW_DETAIL: "SHOW_DETAIL",
  SHOW_CUSTOM: "SHOW_CUSTOM",

};
export const ListButton = [
  // {
  //   key: "B0",
  //   ariaLabel: "Back",
  //   size: "medium",
  //   type: types.BACK,
  //   fontSize: "inherit",
  //   icon: <ArrowBackIcon />,
  // },
  {
    key: "C1",
    ariaLabel: "CRUD",
    size: "medium",
    type: types.SHOW_EDIT,
    fontSize: "inherit",
    icon: <ModeEditIcon />,
  },
  {
    key: "D2",
    ariaLabel: "Detail",
    size: "medium",
    type: types.SHOW_DETAIL,
    fontSize: "inherit",
    icon: <BorderColorIcon />,
  },
  // {
  //   key: "C3",
  //   ariaLabel: "Custom",
  //   size: "medium",
  //   type: types.SHOW_CUSTOM,
  //   fontSize: "inherit",
  //   icon: <KeyboardArrowDownIcon />,
  // },
//   {
//     key: "F1",
//     ariaLabel: "Sort",
//     size: "medium",
//     type: types.SHOW_SORT,
//     fontSize: "inherit",
//     icon: <SortIcon />,
//   },
//   {
//     key: "S3",
//     ariaLabel: "Searchbar",
//     size: "medium",
//     type: types.SHOW_SEARCH_BAR,
//     fontSize: "inherit",
//     icon: <SearchIcon />,
//   },
//   {
//     key: "S4",
//     ariaLabel: "Select",
//     size: "medium",
//     type: types.SHOW_SELECT,
//     fontSize: "inherit",
//     icon: <CheckBoxOutlineBlankIcon />,
//   },
//   {
//     key: "G5",
//     ariaLabel: "Group",
//     size: "medium",
//     type: types.SHOW_GROUP,
//     fontSize: "inherit",
//     icon: <WorkspacesIcon />,
//   },
];
