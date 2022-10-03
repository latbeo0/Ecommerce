import { useState } from "react";
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
import ColorLensIcon from "@mui/icons-material/ColorLens";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";

import * as data from "./data";
const PopupEdit = ({
  row,
  onChange,
  onApplyChanges,
  onCancelChanges,
  open,
}) => {
  const [product, setProductData] = useState(data.product);
  return (
    <Dialog
      open={open}
      onClose={onCancelChanges}
      aria-labelledby="form-dialog-title"
      maxWidth="md"
    >
      <DialogTitle id="form-dialog-title">Product Details</DialogTitle>
      <DialogContent>
        <FormControlLabel
          control={<Switch defaultChecked={true} />}
          label="Enable"
        />
        <MuiGrid container spacing={4}>
          <MuiGrid item xs={4}>
            <FormGroup>
              <TextField
                margin="normal"
                name="productName"
                label="Name"
                value={row.productName || ""}
                onChange={onChange}
                sx={{ width: 200 }}
              />
              <TextField
                margin="normal"
                name="price"
                label="Price"
                value={row.price || ""}
                onChange={onChange}
                sx={{ width: 200 }}
              />
            </FormGroup>
          </MuiGrid>
          <MuiGrid item xs={4}>
            <FormGroup>
              <TextField
                margin="normal"
                value={row.categoryID || ""}
                onChange={onChange}
                select // tell TextField to render select
                label="Category"
                name="categoryID"
                sx={{ width: 200 }}
              >
                <MenuItem key="CATEGORY0" value="">
                  <em>None</em>
                </MenuItem>
                {data.categories.map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.categoryName}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                margin="normal"
                name="newPrice"
                label="New Price"
                value={row.newPrice || ""}
                onChange={onChange}
                sx={{ width: 200 }}
              />
            </FormGroup>
          </MuiGrid>
          <MuiGrid item xs={4}>
            <FormGroup>
              <TextField
                margin="normal"
                value={row.collectionID || ""}
                onChange={onChange}
                select // tell TextField to render select
                label="Collection"
                name="collectionID"
                sx={{ width: 200 }}
              >
                <MenuItem key={0} value="">
                  <em>None</em>
                </MenuItem>
                {data.collections.map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.collectionName}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                margin="normal"
                name="saleID"
                label="Sale"
                value={row.saleID || ""}
                select
                onChange={onChange}
                sx={{ width: 200 }}
              >
                <MenuItem key={0} value="">
                  <em>None</em>
                </MenuItem>
                {data.sales.map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.collectionName}
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
              value={row.productDescription || ""}
              onChange={onChange}
              multiline
            />
          </FormGroup>
        </MuiGrid>
        <MuiGrid>
          <Link
            onClick={() => {
              setProductData({
                ...product,
                colors: [...product.colors]?.concat(data.color),
              });
            }}
          >
            New Color
          </Link>

          {product.colors?.length > 0 &&
            product.colors.map((color, indexA) => {
              return (
                <MuiGrid container spacing={0} key={`A${indexA}`}>
                  <MuiGrid item xs={6}>
                    <FormGroup>
                      <TextField
                        margin="normal"
                        name="color"
                        value={color?.valueColor}
                        onChange={onChange}
                        type="color"
                      />
                    </FormGroup>
                    <Link
                      onClick={() => {
                        setProductData({
                          ...product,
                          colors: [...product.colors].map((color) => {
                            return {
                              ...color,
                              details: [
                                ...product.colors[indexA].details,
                              ]?.concat(data.detail),
                            };
                          }),
                        });
                      }}
                    >
                      New Size
                    </Link>
                    {color.details?.length > 0 &&
                      color.details.map((detail, indexB) => {
                        return (
                          <MuiGrid container spacing={1}>
                            <MuiGrid item xs={6}>
                              <FormGroup>
                                <TextField
                                  margin="normal"
                                  name={detail.size}
                                  value={detail.size}
                                  onChange={onChange}
                                  select // tell TextField to render select
                                  type="text"
                                  label={detail.size}
                                >
                                  <MenuItem key={0} value="">
                                    <em>None</em>
                                  </MenuItem>
                                  {data.sizes.map((item) => (
                                    <MenuItem key={item.id} value={item.value}>
                                      {item.value}
                                    </MenuItem>
                                  ))}
                                </TextField>
                              </FormGroup>
                            </MuiGrid>
                            <MuiGrid item xs={6}>
                              <FormGroup>
                                <TextField
                                  margin="normal"
                                  name={detail.quantity}
                                  value={detail.quantity}
                                  onChange={onChange}
                                  type="number"
                                  label={detail.quantity}
                                />{" "}
                              </FormGroup>
                            </MuiGrid>
                          </MuiGrid>
                        );
                      })}
                  </MuiGrid>
                </MuiGrid>
              );
            })}
        </MuiGrid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancelChanges} color="secondary">
          Cancel
        </Button>
        <Button onClick={onApplyChanges} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default PopupEdit;
