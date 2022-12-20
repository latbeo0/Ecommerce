import VisibilityIcon from "@mui/icons-material/Visibility";

export const types = {
    SHOW_SORT: "SHOW_SORT",
    SHOW_SEARCH_BAR: "SHOW_SEARCH_BAR",
    SHOW_EDIT: "SHOW_EDIT",
    SHOW_GROUP: "SHOW_GROUP",
    SHOW_SELECT: "SHOW_SELECT",
};
export const ListButton = [
    {
        key: "B1",
        ariaLabel: "DETAIL",
        size: "medium",
        type: "VIEWDETAIL",
        fontSize: "inherit",
        icon: <VisibilityIcon />,
        disabled: false,
        level: 2,
    },
];
