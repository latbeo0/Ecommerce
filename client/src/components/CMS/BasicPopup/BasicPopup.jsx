import { useState } from "react";
import * as React from "react";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import MuiGrid from "@mui/material/Grid";

import {
    fetchAddNewCategory,
    fetchUpdateCategory,
} from "../../../services/categoryFetch";
import {
    fetchAddNewCollection,
    fetchUpdateCollection,
} from "../../../services/collectionFetch";
import { fetchAddNewSale, fetchUpdateSale } from "../../../services/saleFetch";

import Slide from "@mui/material/Slide";

import Notification from "../../Basic/Notification/Notification";
import { NotificationType } from "../../Basic/Notification/type";
import { useSelector } from "react-redux";
import { selectUser } from "./../../../redux/userSlice";
import {
    fetchAddNewMaterial,
    fetchUpdateMaterial,
} from "../../../services/materialFetch";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const initialState = {
    code: "",
    name: "",
    description: "",
};
const categoryState = {
    cateCode: "",
    cateName: "",
    cateDescription: "",
};
const collectionState = {
    collectCode: "",
    collectName: "",
    collectDescription: "",
};
const saleState = {
    saleCode: "",
    saleName: "",
    saleDescription: "",
};
const materialState = {
    materialCode: "",
    materialName: "",
    materialDescription: "",
};
const BasicPopup = ({ type, open, row, onClose, onSubmit, collection }) => {
    const { currentUser } = useSelector(selectUser);

    const [data, setData] = useState();

    React.useEffect(() => {
        if (row) {
            setData(row);
        } else {
            switch (collection.toUpperCase()) {
                case "CATEGORY":
                    setData(categoryState);
                    break;
                case "COLLECTION":
                    setData(collectionState);
                    break;
                case "SALE":
                    setData(saleState);
                    break;
                case "MATERIAL":
                    setData(materialState);
                    break;
                default:
                    setData(initialState);
                    break;
            }
        }
    }, [row, collection]);

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = async () => {
        switch (collection?.toUpperCase()) {
            case "CATEGORY":
                if (type === "ADD") {
                    await fetchAddNewCategory(
                        data,
                        currentUser.access_token
                    ).then((response) => {
                        if (response.status === 200) {
                            Notification(
                                NotificationType.success,
                                response.data.msg
                            );
                            setData(categoryState);
                        } else
                            Notification(
                                NotificationType.error,
                                response.data.msg
                            );
                        onClose();
                    });
                } else if (type === "UPDATE" && row) {
                    await fetchUpdateCategory(
                        data,
                        row.id,
                        currentUser.access_token
                    )
                        .then((response) => {
                            if (response.status === 200) {
                                Notification(
                                    NotificationType.success,
                                    response.data.msg
                                );
                                setData(categoryState);
                            } else
                                Notification(
                                    NotificationType.error,
                                    response.data.msg
                                );
                            onClose();
                        })
                        .catch((error) =>
                            Notification(NotificationType.error, error)
                        );
                }
                break;
            case "COLLECTION":
                if (type === "ADD") {
                    await fetchAddNewCollection(
                        data,
                        currentUser.access_token
                    ).then((response) => {
                        if (response.status === 200) {
                            Notification(
                                NotificationType.success,
                                response.data.msg
                            );
                            setData(collectionState);
                        } else
                            Notification(
                                NotificationType.error,
                                response.data.msg
                            );
                        onClose();
                    });
                } else if (type === "UPDATE" && row) {
                    await fetchUpdateCollection(
                        data,
                        row.id,
                        currentUser.access_token
                    )
                        .then((response) => {
                            if (response.status === 200) {
                                Notification(
                                    NotificationType.success,
                                    response.data.msg
                                );
                                setData(collectionState);
                            } else
                                Notification(
                                    NotificationType.error,
                                    response.data.msg
                                );
                            onClose();
                        })
                        .catch((error) =>
                            Notification(NotificationType.error, error)
                        );
                }
                break;
            case "SALE":
                if (type === "ADD") {
                    await fetchAddNewSale(data, currentUser.access_token).then(
                        (response) => {
                            if (response.status === 200) {
                                Notification(
                                    NotificationType.success,
                                    response.data.msg
                                );
                                setData(saleState);
                            } else
                                Notification(
                                    NotificationType.error,
                                    response.data.msg
                                );
                            onClose();
                        }
                    );
                } else if (type === "UPDATE" && row) {
                    await fetchUpdateSale(
                        data,
                        row.id,
                        currentUser.access_token
                    )
                        .then((response) => {
                            if (response.status === 200) {
                                Notification(
                                    NotificationType.success,
                                    response.data.msg
                                );
                                setData(saleState);
                            } else
                                Notification(
                                    NotificationType.error,
                                    response.data.msg
                                );
                            onClose();
                        })
                        .catch((error) =>
                            Notification(NotificationType.error, error)
                        );
                }
                break;
            case "MATERIAL":
                if (type === "ADD") {
                    await fetchAddNewMaterial(
                        data,
                        currentUser.access_token
                    ).then((response) => {
                        if (response.status === 200) {
                            Notification(
                                NotificationType.success,
                                response.data.msg
                            );
                            setData(saleState);
                        } else
                            Notification(
                                NotificationType.error,
                                response.data.msg
                            );
                        onClose();
                    });
                } else if (type === "UPDATE" && row) {
                    await fetchUpdateMaterial(
                        data,
                        row.id,
                        currentUser.access_token
                    )
                        .then((response) => {
                            if (response.status === 200) {
                                Notification(
                                    NotificationType.success,
                                    response.data.msg
                                );
                                setData(saleState);
                            } else
                                Notification(
                                    NotificationType.error,
                                    response.data.msg
                                );
                            onClose();
                        })
                        .catch((error) =>
                            Notification(NotificationType.error, error)
                        );
                }
                break;
            default:
                break;
        }
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="form-dialog-title"
            maxWidth="lg"
            fullwidths
            TransitionComponent={Transition}
        >
            <DialogTitle id="form-dialog-title">
                {collection ? collection.toUpperCase() : "UNKNOWN"}
            </DialogTitle>
            <DialogContent>
                <MuiGrid>
                    <FormGroup> </FormGroup>
                </MuiGrid>
                <MuiGrid container spacing={6}>
                    <MuiGrid item xs={12}>
                        <FormGroup>
                            {data &&
                                Object.entries(data).map(([key, value]) => {
                                    return (
                                        <TextField
                                            key={key}
                                            margin="normal"
                                            name={key}
                                            label={key.toUpperCase()}
                                            value={data[key] || ""}
                                            onChange={handleChangeInput}
                                            sx={{ minWidth: 200 }}
                                        />
                                    );
                                })}
                            {/* <TextField
                margin="normal"
                name="code"
                label="Code"
                value={data.code || ""}
                onChange={handleChangeInput}
                sx={{ minWidth: 200 }}
              />
              <TextField
                margin="normal"
                value={data.name || ""}
                onChange={handleChangeInput}
                label="Name"
                name="name"
                sx={{ minWidth: 200 }}
              />
              <TextField
                margin="normal"
                value={data.description || ""}
                onChange={handleChangeInput}
                label="Description"
                name="description"
                sx={{ minWidth: 200 }}
              /> */}
                        </FormGroup>
                    </MuiGrid>
                </MuiGrid>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="secondary">
                    Cancel
                </Button>
                <Button onClick={handleSubmit} color="primary">
                    {type === "UPDATE" ? "Update" : "Create"}
                </Button>
            </DialogActions>
        </Dialog>
    );
};
export default BasicPopup;
