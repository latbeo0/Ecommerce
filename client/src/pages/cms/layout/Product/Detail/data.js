import FilterAltIcon from "@mui/icons-material/FilterAlt";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

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
    {
        key: "B1",
        ariaLabel: "Add",
        size: "medium",
        type: "ADD",
        fontSize: "inherit",
        icon: <AddCircleOutlineIcon />,
        disabled: false,
        level: 2,
    },
    {
        key: "B2",
        ariaLabel: "Update",
        size: "medium",
        type: "UPDATE",
        fontSize: "inherit",
        icon: <EditIcon />,
        disabled: true,
        level: 2,
    },
    {
        key: "B3",
        ariaLabel: "Delete",
        size: "medium",
        type: "DELETE",
        fontSize: "inherit",
        icon: <DeleteIcon />,
        disabled: true,
        level: 1,
    },
];
