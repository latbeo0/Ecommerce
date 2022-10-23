import ModeEditIcon from "@mui/icons-material/ModeEdit";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import WorkspacesIcon from '@mui/icons-material/Workspaces';

export const types = {
    SHOW_SORT: "SHOW_SORT",
    SHOW_SEARCH_BAR: "SHOW_SEARCH_BAR",
    SHOW_EDIT: "SHOW_EDIT",
    SHOW_GROUP: "SHOW_GROUP",
    SHOW_SELECT: "SHOW_SELECT",
}
export const ListButton = [
    { 
        key: "E1",
        ariaLabel: "Edit",
        size: "medium",
        type: types.SHOW_EDIT,
        fontSize: "inherit",
        icon: <ModeEditIcon/>
    },
    {
        key: "F1",
        ariaLabel: "Filter",
        size: "medium",
        type: types.SHOW_SORT,
        fontSize: "inherit",
        icon: <FilterAltIcon/>
    },
    { 
        key: "S3",
        ariaLabel: "Searchbar",
        size: "medium",
        type: types.SHOW_SEARCH_BAR,
        fontSize: "inherit",
        icon: <SearchIcon/>
    },
    { 
        key: "S4",
        ariaLabel: "Select",
        size: "medium",
        type: types.SHOW_SELECT,
        fontSize: "inherit",
        icon : <CheckBoxOutlineBlankIcon/>
    },
    { 
        key:"G5",
        ariaLabel: "Group",
        size: "medium",
        type: types.SHOW_GROUP,
        fontSize: "inherit",
        icon: <WorkspacesIcon/>
    }
]

