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
import Link from "@mui/material/Link";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import {
  ProductSecondaryImageCard,
  ProductSecondaryImageLabel,
  ProductSecondaryImage,
  ProductSecondaryImageInput,
} from "./PopupEditStyle";
import Plus from "../../../../../assets/img/plus.png";
import {
  fetchUploadImageProduct,
  fetchAddNewProduct,
  fetchUpdateProduct,
} from "../../../../../services/productFetch";
import InputAdornment from "@mui/material/InputAdornment";

import { checkFile } from "../../../../../helpers/validate";
import * as data from "./data";
import Slide from "@mui/material/Slide";

import Notification from "../../../../Basic/Notification/Notification";
import { NotificationType } from "../../../../Basic/Notification/type";

const primaryItems = [
  // {
  //   img: "https://i.ibb.co/pyvB7Qg/shoes-primary.jpg",
  //   title: "Number 1",
  // },
  {
    img: "https://i.ibb.co/X4zKYbn/shoes-1.jpg",
    title: "Number 2",
  },
];
const secondaryItems = [
  {
    img: "https://i.ibb.co/X4zKYbn/shoes-1.jpg",
    title: "Number 1",
  },
  {
    img: "https://i.ibb.co/rt551bt/shoes-2.jpg",
    title: "Number 2",
  },
  {
    img: "https://i.ibb.co/P6nQn94/shoes-3.jpg",
    title: "Number 3",
  },
  {
    img: "https://i.ibb.co/XkKRxWX/shoes-4.jpg",
    title: "Number 4",
  },
];
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const PopupEdit = ({ open, master, row, onClose, onSubmit }) => {
  const [product, setProductData] = useState({
    ...data.product,
  });

  React.useEffect(() => {
    if (row) {
      setProductData(row);
    } else {
      setProductData(data.product);
    }
  }, [row]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    if (e.target.name === "isStock") {
      setProductData({ ...product, isStock: e.target.checked });
    } else setProductData({ ...product, [name]: value });
  };

  const handleChangeColor = (e) => {
    const { name, value } = e.target;
    setProductData({ ...product, color: { ...product.color, [name]: value } });
  };

  const handleCalCColorDetail = (e, colorIndex) => {
    e.preventDefault();
    const idValue = e.target.id;
    if (idValue === "addItem") {
      product.color.details.push(data.detail);
    } else {
      // const newArr = colors[colorIndex].details.filter(
      //   (item) => item !== colors[colorIndex].details[Number(idValue)]
      // );
      // colors[colorIndex].details = newArr;
    }
    setProductData({ ...product });
  };

  const handleChangeColorDetail = (e, detailIndex) => {
    const { name, value } = e.target;

    setProductData({
      ...product,
      color: {
        ...product.color,
        details: [...product.color.details].map((d, di) => {
          if (di === detailIndex) {
            return {
              ...d,
              [name]: Number(value),
            };
          }
          return d;
        }),
      },
    });
  };
  const handleCalPrimaryImage = (e) => {
    // const id = e.target.id;
    // if (id === "addImage") {
    //   setSecondaryImages((prev) => {
    //     return [...prev, ""];
    //   });
    // } else {
    //   const arr1 = setSecondaryImages.slice(0, Number(id));
    //   const arr2 = setSecondaryImages.slice(
    //     Number(id) + 1,
    //     setSecondaryImages.length
    //   );
    //   setSecondaryImages([...arr1, ...arr2]);
    // }
  };
  const handleCalSecondaryImage = (e) => {
    // const id = e.target.id;
    // if (id === "addImage") {
    //   setSecondaryImages((prev) => {
    //     return [...prev, ""];
    //   });
    // } else {
    //   const arr1 = setSecondaryImages.slice(0, Number(id));
    //   const arr2 = setSecondaryImages.slice(
    //     Number(id) + 1,
    //     setSecondaryImages.length
    //   );
    //   setSecondaryImages([...arr1, ...arr2]);
    // }
  };
  const handlePreviewImage = (e) => {
    const name = e.target.name;
    const file = e.target.files[0];
    const check = checkFile(file);
    if (!check) {
      const formData = new FormData();
      formData.append("file", file);
      fetchUploadImageProduct(formData)
        .then((res) => {
          if (res) {
            switch (name.toUpperCase()) {
              case "PRIMARYIMAGES":
                setProductData((product) => {
                  return {
                    ...product,
                    primaryImages: [
                      ...product.primaryImages,
                      {
                        img: res.data.url,
                        title: file.name,
                      },
                    ],
                  };
                });
                break;
              case "SECONDARYIMAGES":
                setProductData((product) => {
                  return {
                    ...product,
                    secondaryImages: [
                      ...product.secondaryImages,
                      {
                        img: res.data.url,
                        title: file.name,
                      },
                    ],
                  };
                });
                break;
              default:
                break;
            }
          }
        })
        .catch((err) =>
          setProductData((prev) => {
            return { ...prev, err: err.response.msg, success: "" };
          })
        );
    } else {
      setProductData((prev) => {
        return { ...prev, err: check.msg, success: "" };
      });
    }
  };
  const handleChangeSecondaryImage = () => {};

  const handleSubmit = async () => {
    if (!row) {
      await fetchAddNewProduct({
        ...product,
        productMasterId: master,
        // primaryImages: primaryImages,
        // secondaryImages: secondaryImages,
      })
        .then((response) => {
          if (response.status === 200) {
            Notification(NotificationType.success, response.data.msg);
            setProductData(data.product);
            // setPrimaryImages([]);
            // setSecondaryImages([]);
          } else Notification(NotificationType.error, response.data.msg);
        })
        .catch((error) => Notification(NotificationType.error, error));
    } else {
      await fetchUpdateProduct(
        {
          ...product,
          // primaryImages: primaryImages,
          // secondaryImages: secondaryImages,
        },
        row.id
      )
        .then((response) => {
          if (response.status === 200) {
            Notification(NotificationType.success, response.data.msg);
          } else Notification(NotificationType.error, response.data.msg);
          onClose();
        })
        .catch((error) => Notification(NotificationType.error, error));
    }
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="form-dialog-title"
      maxWidth="lg"
      fullwidths={"true"}
      TransitionComponent={Transition}
    >
      <DialogTitle id="form-dialog-title">Product Details</DialogTitle>
      <DialogContent>
        <FormControlLabel
          control={<Switch checked={product.isStock} />}
          label={product.isStock ? "In Stock" : "Out Stock"}
          name="isStock"
          onChange={handleChangeInput}
        />
        <MuiGrid container spacing={4}>
          <MuiGrid item xs={4}>
            <FormGroup>
              <TextField
                disabled
                margin="normal"
                value={
                  product.productMasterId ? product.productMasterId : master
                }
                onChange={handleChangeInput}
                label="Master"
                name="productMasterId"
                sx={{ minWidth: 200 }}
              />
              <TextField
                margin="normal"
                value={product.saleCode || ""}
                onChange={handleChangeInput}
                select // tell TextField to render select
                label="Sale Code"
                name="saleCode"
                sx={{ minWidth: 200 }}
              >
                <MenuItem key="SALE" value="">
                  <em>None</em>
                </MenuItem>
                {data.sales.map((item) => (
                  <MenuItem key={item.saleCode} value={item.saleCode}>
                    {item.saleName}
                  </MenuItem>
                ))}
              </TextField>
            </FormGroup>
          </MuiGrid>
          <MuiGrid item xs={4}>
            <FormGroup>
              <TextField
                type="number"
                margin="normal"
                name="price"
                label="Price"
                value={product.price || 0}
                onChange={handleChangeInput}
                sx={{ minWidth: 200 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">VND</InputAdornment>
                  ),
                }}
              />
              <TextField
                margin="normal"
                value={product.stateCode || ""}
                onChange={handleChangeInput}
                select // tell TextField to render select
                label="State"
                name="stateCode"
                sx={{ minWidth: 200 }}
              >
                <MenuItem key="STATE" value="">
                  <em>None</em>
                </MenuItem>
                {data.states.map((item) => (
                  <MenuItem key={item.stateCode} value={item.stateCode}>
                    {item.stateName}
                  </MenuItem>
                ))}
              </TextField>
            </FormGroup>
          </MuiGrid>
          <MuiGrid item xs={4}>
            <FormGroup>
              <TextField
                margin="normal"
                type="number"
                name="newPrice"
                label="New Price"
                value={product.newPrice || 0}
                onChange={handleChangeInput}
                sx={{ minWidth: 200 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">VND</InputAdornment>
                  ),
                }}
              />
            </FormGroup>
          </MuiGrid>
        </MuiGrid>
        {/*Color && Image */}
        <MuiGrid container spacing={2}>
          <MuiGrid
            item
            xs={6}
            sx={{
              padding: 1,
              marginTop: 2,
            }}
          >
            <MuiGrid container spacing={1}>
              <MuiGrid item xs={6}>
                <FormGroup>
                  <TextField
                    margin="normal"
                    name="valueColor"
                    value={product?.color?.valueColor}
                    onChange={(e) => handleChangeColor(e)}
                    type="color"
                  />
                </FormGroup>
              </MuiGrid>
              <MuiGrid item xs={6}>
                <FormGroup>
                  <TextField
                    margin="normal"
                    name="nameColor"
                    value={product?.color?.nameColor}
                    onChange={(e) => handleChangeColor(e)}
                    label="Color Name"
                  />
                </FormGroup>
              </MuiGrid>
            </MuiGrid>
            <Link id="addItem" onClick={(e) => handleCalCColorDetail(e)}>
              New Size
            </Link>
            {product?.color?.details?.length > 0 &&
              product.color.details.map((detail, detailIndex) => (
                <MuiGrid container spacing={1} key={`DS${detailIndex}`}>
                  <MuiGrid item xs={6}>
                    <FormGroup>
                      <TextField
                        margin="normal"
                        name="size"
                        value={detail.size}
                        onChange={(e) =>
                          handleChangeColorDetail(e, detailIndex)
                        }
                        select // tell TextField to render select
                        type="text"
                        label="Size"
                      >
                        <MenuItem key="SIZE" value="">
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
                        name="quantity"
                        value={detail.quantity}
                        onChange={(e) =>
                          handleChangeColorDetail(e, detailIndex)
                        }
                        type="number"
                        label="Quantity"
                      />
                    </FormGroup>
                  </MuiGrid>
                </MuiGrid>
              ))}
          </MuiGrid>
          <MuiGrid
            item
            xs={6}
            sx={{
              padding: 1,
              marginTop: 2,
            }}
          >
            <Link>List Primary Images</Link>
            <MuiGrid>
              <ImageList cols={2} rowHeight={228}>
                {product.primaryImages?.map((item) => (
                  <ImageListItem key={item.img}>
                    <ProductSecondaryImage
                      src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
                {product.primaryImages.length < 2 && (
                  <ImageListItem>
                    <ProductSecondaryImageCard>
                      <ProductSecondaryImageLabel htmlFor="file-input-1">
                        <ProductSecondaryImage
                          id="addImage"
                          src={Plus}
                          alt="New"
                          loading="lazy"
                        />
                      </ProductSecondaryImageLabel>
                      <ProductSecondaryImageInput
                        name="primaryImages"
                        id="file-input-1"
                        accept="image/*"
                        type="file"
                        onChange={handlePreviewImage}
                      />
                    </ProductSecondaryImageCard>
                  </ImageListItem>
                )}
              </ImageList>
            </MuiGrid>
            <Link>List Extra Images</Link>
            <MuiGrid>
              <ImageList cols={2} rowHeight={228}>
                {product.secondaryImages?.map((item) => (
                  <ImageListItem key={item.img}>
                    <ProductSecondaryImage
                      src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
                {product.secondaryImages?.length < 4 && (
                  <ImageListItem>
                    <ProductSecondaryImageCard>
                      <ProductSecondaryImageLabel htmlFor="file-input-2">
                        <ProductSecondaryImage
                          id="addImage"
                          src={Plus}
                          alt="New"
                          loading="lazy"
                        />
                      </ProductSecondaryImageLabel>
                      <ProductSecondaryImageInput
                        name="secondaryImages"
                        id="file-input-2"
                        accept="image/*"
                        type="file"
                        onChange={handlePreviewImage}
                      />
                    </ProductSecondaryImageCard>
                  </ImageListItem>
                )}
              </ImageList>
            </MuiGrid>
          </MuiGrid>
        </MuiGrid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          {row ? "Update" : "Create"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default PopupEdit;
