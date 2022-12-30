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
import { fetchApproveOrder } from "../../../../services/orderFetch";
import {
  OrderCard,
  OrderCardHeader,
  OrderCardText,
  OrderCardContent,
  OrderCardContentCard,
} from "./PopupConfirmStyle";
import * as data from "./data";
import Slide from "@mui/material/Slide";

import Notification from "../../../Basic/Notification/Notification";
import { useSelector } from "react-redux";
import { selectUser } from "./../../../../redux/userSlice";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const PopupConfirm = ({ type, open, row, onClose, onSubmit }) => {
  const { currentUser } = useSelector(selectUser);
  const [order, setOrder] = useState(data.order);

  React.useEffect(() => {
    if (row) {
      setOrder(row);
    } else {
      setOrder(data.order);
    }
  }, [row]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };

  const handleSubmit = async () => {
    await fetchApproveOrder(row.id, currentUser.access_token)
      .then((res) => {
        Notification("success", res.data.msg);
        onClose();
      })
      .catch((err) => {
        Notification("error", err);
        onClose();
      });
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="form-dialog-title"
      fullwidths
      maxWidth="lg"
      TransitionComponent={Transition}
    >
      <DialogTitle id="form-dialog-title">Order Detail</DialogTitle>
      <DialogContent>
        <MuiGrid container spacing={4}>
          <MuiGrid item xs={4}>
            <FormGroup>
              <TextField
                margin="normal"
                name="orderCode"
                label="Order Code"
                value={order.orderCode || ""}
                onChange={handleChangeInput}
                sx={{ minWidth: 200 }}
                disabled
              />
            </FormGroup>
            <FormGroup>
              <TextField
                margin="normal"
                name="userId"
                label="Customer"
                value={
                  order?.addressShipping?.firstName &&
                  order?.addressShipping?.firstName
                    ? `${order?.addressShipping?.firstName} ${order?.addressShipping?.lastName}`
                    : ""
                }
                onChange={handleChangeInput}
                sx={{ minWidth: 200 }}
                disabled
              />
            </FormGroup>
            <FormGroup>
              <TextField
                margin="normal"
                name="Phone"
                label="Phone"
                value={
                  order?.addressShipping?.phone
                  ? order?.addressShipping?.phone
                  : ""
                }
                onChange={handleChangeInput}
                sx={{ minWidth: 200 }}
                disabled
              />
            </FormGroup>
            <FormGroup>
              <TextField
                margin="normal"
                name="payment"
                label="Payment Type"
                value={order?.payment?.type || ""}
                onChange={handleChangeInput}
                sx={{ minWidth: 200 }}
                disabled
              />
            </FormGroup>
          </MuiGrid>
          <MuiGrid item xs={4}>
            <FormGroup>
              <TextField
                margin="normal"
                name="Province"
                label="Province"
                value={
                  order?.addressShipping?.province
                    ? order?.addressShipping?.province
                    : ""
                }
                onChange={handleChangeInput}
                sx={{ minWidth: 200 }}
                disabled
              />
            </FormGroup>
            <FormGroup>
              <TextField
                margin="normal"
                name="District"
                label="District"
                value={
                  order?.addressShipping?.district
                    ? order?.addressShipping?.district
                    : ""
                }
                onChange={handleChangeInput}
                sx={{ minWidth: 200 }}
                disabled
              />
            </FormGroup>
            <FormGroup>
              <TextField
                margin="normal"
                name="Ward"
                label="Ward"
                value={
                  order?.addressShipping?.ward
                    ? order?.addressShipping?.ward
                    : ""
                }
                onChange={handleChangeInput}
                sx={{ minWidth: 200 }}
                disabled
              />
            </FormGroup>
            <FormGroup>
              <TextField
                margin="normal"
                name="Address"
                label="Address"
                value={
                  order?.addressShipping?.address
                    ? order?.addressShipping?.address
                    : ""
                }
                onChange={handleChangeInput}
                sx={{ minWidth: 200 }}
                disabled
              />
            </FormGroup>
          </MuiGrid>
          <MuiGrid item xs={4}>
          <FormGroup>
                <TextField
                  margin="normal"
                  name="totalPrice"
                  label="State"
                  value={order.stateOrder ? order.stateOrder : ""}
                  onChange={handleChangeInput}
                  sx={{ minWidth: 200 }}
                  disabled
                />
              </FormGroup>
            <FormGroup>
              <TextField
                margin="normal"
                name="subPrice"
                label="Sub Price"
                value={order.subPrice || 0}
                onChange={handleChangeInput}
                sx={{ minWidth: 200 }}
                disabled
              />
            </FormGroup>
            <FormGroup>
              <TextField
                margin="normal"
                name="shippingPrice"
                label="Shipping Price"
                value={order.shippingPrice || 0}
                onChange={handleChangeInput}
                sx={{ minWidth: 200 }}
                disabled
              />
              <FormGroup>
                <TextField
                  margin="normal"
                  name="totalPrice"
                  label="Total Price"
                  value={order.totalPrice || 0}
                  onChange={handleChangeInput}
                  sx={{ minWidth: 200 }}
                  disabled
                />
              </FormGroup>
            </FormGroup>
          </MuiGrid>
          <MuiGrid item xs={12}>
            <FormGroup>
              {order?.listOderItems?.length > 0 &&
                order.listOderItems.map((item) => (
                  <OrderCard>
                    <OrderCardHeader>
                      <OrderCardText>
                        Size: {item?.size ? item.size : ""}
                      </OrderCardText>
                      <OrderCardText>
                        Amount: {item?.count ? item.count : ""}
                      </OrderCardText>
                    </OrderCardHeader>
                    <OrderCardContent>
                      {item?.product && (
                        <OrderCardContentCard>
                          <img
                            src={item?.product?.primaryImages[0]?.img}
                            alt={item?.product?.productName}
                            style={{ width: "256px", height: "256px" }}
                          />
                          <b>
                            {item?.product?.productName}: {item?.product?.price}{" "}
                            VND
                          </b>
                        </OrderCardContentCard>
                      )}
                    </OrderCardContent>
                  </OrderCard>
                ))}
            </FormGroup>
          </MuiGrid>
        </MuiGrid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Approve
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default PopupConfirm;
