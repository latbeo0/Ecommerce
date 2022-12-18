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
import MenuItem from "@mui/material/MenuItem";
import {
  fetchAddNewProductMaster,
  fetchUpdateProductMaster,
} from "../../../../services/productFetch";

import * as data from "./data";
import Slide from "@mui/material/Slide";

import Notification from "../../../Basic/Notification/Notification";
import { NotificationType } from "../../../Basic/Notification/type";
import { useSelector } from "react-redux";
import { selectUser } from "./../../../../redux/userSlice";
import { fetchGetAllMaterial } from "./../../../../services/materialFetch";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const PopupEdit = ({ type, open, row, onClose, onSubmit }) => {
  const { currentUser } = useSelector(selectUser);
  const [productMaster, setProductMaster] = useState(data.productMaster);
  const [materialOptions, setMaterialOptions] = useState([]);
  React.useEffect(() => {
    fetchGetAllMaterial().then((result) => {
      setMaterialOptions(result?.data?.materials);
    });
  }, []);
  React.useEffect(() => {
    if (row) {
      setProductMaster(row);
    } else {
      setProductMaster(data.productMaster);
    }
  }, [row]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setProductMaster({ ...productMaster, [name]: value });
  };

  const handleSubmit = async () => {
    if (type === "ADD") {
      await fetchAddNewProductMaster(productMaster)
        .then((response) => {
          if (response.status === 200) {
            Notification(NotificationType.success, response.data.msg);
            setProductMaster(data.productMaster);
          } else Notification(NotificationType.error, response.data.msg);
          onClose();
        })
        .catch((error) => Notification(NotificationType.error, error));
    } else if (type === "UPDATE" && row) {
      await fetchUpdateProductMaster(
        productMaster,
        row.id,
        currentUser.access_token
      )
        .then((response) => {
          if (response.status === 200) {
            Notification(NotificationType.success, response.data.msg);
          } else Notification(NotificationType.error, response.data.msg);
          onClose();
        })
        .catch((error) => Notification(NotificationType.error, error));
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
      <DialogTitle id="form-dialog-title">Product</DialogTitle>
      <DialogContent>
        <MuiGrid container spacing={6}>
          <MuiGrid item xs={6}>
            <FormGroup>
              <TextField
                margin="normal"
                name="productName"
                label="Name"
                value={productMaster.productName || ""}
                onChange={handleChangeInput}
                sx={{ minWidth: 200 }}
              />
            </FormGroup>
          </MuiGrid>
          <MuiGrid item xs={6}>
            <FormGroup>
              <TextField
                margin="normal"
                value={productMaster.materialCode || ""}
                onChange={handleChangeInput}
                select // tell TextField to render select
                label="Material"
                name="materialCode"
                sx={{ minWidth: 200 }}
              >
                <MenuItem key="MATERIAL" value="">
                  <em>None</em>
                </MenuItem>
                {materialOptions?.map((item) => (
                  <MenuItem key={item.materialCode} value={item.materialCode}>
                    {item.materialName}
                  </MenuItem>
                ))}
              </TextField>
            </FormGroup>
          </MuiGrid>
        </MuiGrid>
        <MuiGrid container spacing={6}>
          <MuiGrid item xs={4}>
            <FormGroup>
              <TextField
                margin="normal"
                value={productMaster.cateCode || ""}
                onChange={handleChangeInput}
                select // tell TextField to render select
                label="Category"
                name="cateCode"
                sx={{ minWidth: 200 }}
              >
                <MenuItem key="CATEGORY0" value="">
                  <em>None</em>
                </MenuItem>
                {data.categories.map((item) => (
                  <MenuItem key={item.cateCode} value={item.cateCode}>
                    {item.cateName}
                  </MenuItem>
                ))}
              </TextField>
            </FormGroup>
          </MuiGrid>
          <MuiGrid item xs={4}>
            <FormGroup>
              <TextField
                margin="normal"
                value={productMaster.gender || ""}
                onChange={handleChangeInput}
                select // tell TextField to render select
                label="Gender"
                name="gender"
                sx={{ minWidth: 200 }}
              >
                <MenuItem key="GENDER" value="">
                  <em>None</em>
                </MenuItem>
                {data.gender.map((item) => (
                  <MenuItem key={item.id} value={item.name}>
                    {item.name}
                  </MenuItem>
                ))}
              </TextField>
            </FormGroup>
          </MuiGrid>
          <MuiGrid item xs={4}>
            <FormGroup>
              <TextField
                margin="normal"
                value={productMaster.collectCode || ""}
                onChange={handleChangeInput}
                select // tell TextField to render select
                label="Collection"
                name="collectCode"
                sx={{ minWidth: 200 }}
              >
                <MenuItem key="COLLECTION" value="">
                  <em>None</em>
                </MenuItem>
                {data.collections.map((item) => (
                  <MenuItem key={item.collectCode} value={item.collectCode}>
                    {item.collectName}
                  </MenuItem>
                ))}
              </TextField>
            </FormGroup>
          </MuiGrid>
        </MuiGrid>
        <MuiGrid>
          <FormGroup>
            <TextField
              margin="normal"
              name="productDescription"
              label="Description"
              value={productMaster.productDescription || ""}
              onChange={handleChangeInput}
              multiline
            />
          </FormGroup>
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
export default PopupEdit;
