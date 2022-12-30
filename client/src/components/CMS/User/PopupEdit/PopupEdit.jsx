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
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import MenuItem from "@mui/material/MenuItem";

import { checkFile } from "../../../../helpers/validate";
import Slide from "@mui/material/Slide";
import * as data from "./data";
import Notification from "../../../Basic/Notification/Notification";
import { NotificationType } from "../../../Basic/Notification/type";
import { UserAvatarCard, Avatar } from "./PopupEditStyle";
import {
  fetchAllCity,
  fetchCityByCode,
} from "../../../../services/regionFetch";
import {
  fetchAddNewUser,
  fetchGetAllUser,
  fetchUpdateUser,
} from "../../../../services/userFetch";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "./../../../../redux/userSlice";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const PopupEdit = ({ type, open, row, onClose, onSubmit }) => {
  const { currentUser } = useSelector(selectUser);
  const [listCity, setListCity] = useState([]);
  const [citySelected, setCitySelected] = useState([]);

  const [user, setUserData] = useState(data.user);
  const [focus, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  React.useEffect(() => {
    fetchAllCity().then((response) => {
      setListCity(response.data);
    });
    if (user.address?.city) {
      fetchCityByCode(user.address.city, 3).then((response) => {
        setCitySelected(response.data);
      });
    }
  }, [user?.address?.city]);

  React.useEffect(() => {
    if (row) {
      setUserData(row);
    } else {
      setUserData(data.user);
    }
  }, [row]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    if (e.target.name === "isActive") {
      setUserData({ ...user, isActive: e.target.checked });
    } else setUserData({ ...user, [name]: value });
  };
  const handleChangeAddress = (e) => {
    const { name, value } = e.target;
    setUserData({ ...user, address: { ...user.address, [name]: value } });
  };
  const handleSubmit = async () => {
    if (type === "ADD") {
      await fetchAddNewUser(user, currentUser.access_token)
        .then((response) => {
          if (response.status === 200) {
            Notification(NotificationType.success, response.data.msg);
            setUserData(data.user);
          } else {
            Notification(NotificationType.warning, response.data.msg);
          }
          onClose();
        })
        .catch((error) => {
          Notification(NotificationType.error, error?.response?.data?.msg)
          onClose();
        }

        );
    } else if (type === "UPDATE" && row) {
      await fetchUpdateUser(user, row.id, currentUser.access_token)
        .then((response) => {
          if (response.status === 200) {
            Notification(NotificationType.success, response.data.msg);
          } else Notification(NotificationType.error, response.data.msg);
          onClose();
        })
        .catch((error) => {
          Notification(NotificationType.error, error?.response?.data?.msg)
          onClose();
        });
    }
  };
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="form-dialog-title"
      maxWidth="md"
      fullWidth={true}
      TransitionComponent={Transition}
    >
      <DialogTitle id="form-dialog-title">User Details</DialogTitle>
      <DialogContent>
        <FormControlLabel
          control={<Switch checked={user.isActive} />}
          label={user.isActive ? "Enable" : "Disable"}
          name="isActive"
          onChange={handleChangeInput}
        />
        <UserAvatarCard>
          <Avatar
            src={
              user?.avatar
                ? user.avatar
                : "https://scr.vn/wp-content/uploads/2020/07/Avatar-Facebook-tr%E1%BA%AFng.jpg"
            }
          />
        </UserAvatarCard>
        <MuiGrid container spacing={2}>
          <MuiGrid item xs={6}>
            <FormGroup>
              <TextField
                margin="normal"
                name="firstName"
                label="First name"
                value={user.firstName || ""}
                onChange={handleChangeInput}
                sx={{ minWidth: 200 }}
              />
              <TextField
                margin="normal"
                value={user.birthDate || ""}
                onChange={handleChangeInput}
                onFocus={onFocus}
                onBlur={onBlur}
                // onChange={(e) => {
                //   if (e.target.value) setHasValue(true);
                //   else setHasValue(false);
                // }}
                type={hasValue || focus ? "date" : "text"}
                label="Birthday"
                name="birthDate"
                sx={{ minWidth: 200 }}
              />
              <TextField
                margin="normal"
                value={user.email || ""}
                onChange={handleChangeInput}
                label="Email"
                name="email"
                sx={{ minWidth: 200 }}
              />
              <TextField
                margin="normal"
                value={user.phone || ""}
                onChange={handleChangeInput}
                label="Phone"
                name="phone"
                sx={{ minWidth: 200 }}
              />
            </FormGroup>
          </MuiGrid>
          <MuiGrid item xs={6}>
            <FormGroup>
              <TextField
                margin="normal"
                value={user.lastName || ""}
                onChange={handleChangeInput}
                label="Last name"
                name="lastName"
                sx={{ minWidth: 200 }}
              ></TextField>
              <TextField
                margin="normal"
                value={user.gender || ""}
                onChange={handleChangeInput}
                select
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
              <TextField
                margin="normal"
                value={user.password || ""}
                onChange={handleChangeInput}
                type="password"
                label="Password"
                name="password"
                sx={{ minWidth: 200 }}
              />
              <TextField
                margin="normal"
                value={user.roleCode || ""}
                onChange={handleChangeInput}
                select
                label="Role"
                name="roleCode"
                sx={{ minWidth: 200 }}
              >
                <MenuItem key="ROLE" value="">
                  None
                </MenuItem>
                {data.roles.map((item) => (
                  <MenuItem key={item.roleCode} value={item.roleCode}>
                    {item.roleName}
                  </MenuItem>
                ))}
              </TextField>
            </FormGroup>
          </MuiGrid>
        </MuiGrid>
        <MuiGrid container spacing={2}>
          <MuiGrid item xs={4}>
            <FormGroup>
              <TextField
                margin="normal"
                value={user.address?.city || ""}
                onChange={handleChangeAddress}
                select
                label="City"
                name="city"
                sx={{ minWidth: 200 }}
              >
                <MenuItem key="CITY" value="">
                  None
                </MenuItem>
                {listCity &&
                  listCity.length > 0 &&
                  listCity.map((item) => (
                    <MenuItem key={item?.codename} value={item?.code}>
                      {item?.name}
                    </MenuItem>
                  ))}
              </TextField>
            </FormGroup>
          </MuiGrid>
          <MuiGrid item xs={4}>
            <FormGroup>
              <TextField
                margin="normal"
                value={user.address?.district ? user.address.district : ""}
                onChange={handleChangeAddress}
                select
                label="District"
                name="district"
                sx={{ minWidth: 200 }}
              >
                <MenuItem key="DISTRICT" value="">
                  None
                </MenuItem>
                {citySelected?.districts?.length > 0 &&
                  citySelected.districts.map((item) => (
                    <MenuItem key={item?.codename} value={item?.code}>
                      {item?.name}
                    </MenuItem>
                  ))}
              </TextField>
            </FormGroup>
          </MuiGrid>
          <MuiGrid item xs={4}>
            <FormGroup>
              <TextField
                margin="normal"
                value={user.address?.ward ? user.address.ward : ""}
                onChange={handleChangeAddress}
                select
                label="Ward"
                name="ward"
                sx={{ minWidth: 200 }}
              >
                <MenuItem key="WARD" value="">
                  None
                </MenuItem>
                {citySelected?.districts?.length > 0 &&
                  citySelected.districts
                    .filter(
                      (district) => district.code === user.address.district
                    )[0]
                    ?.wards.map((item) => (
                      <MenuItem key={item?.codename} value={item?.code}>
                        {item?.name}
                      </MenuItem>
                    ))}
              </TextField>
            </FormGroup>
          </MuiGrid>
        </MuiGrid>
        <MuiGrid container>
          <MuiGrid item xs={12}>
            <FormGroup>
              <TextField
                margin="normal"
                value={user.address?.other || ""}
                onChange={handleChangeAddress}
                label="Apartment number, Street name, ..."
                name="other"
                sx={{ minWidth: 200 }}
              />
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
export default PopupEdit;
