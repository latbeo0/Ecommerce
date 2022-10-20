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
import Plus from "../../../../assets/img/plus.png";
import {
  fetchUploadImageProduct,
  fetchAddNewProduct,
  fetchUpdateProduct,
} from "../../../../services/productFetch";
import InputAdornment from "@mui/material/InputAdornment";

import { checkFile } from "../../../../helpers/validate";
import * as data from "./data";
import Slide from "@mui/material/Slide";

import Notification from "../../../Basic/Notification/Notification";
import { NotificationType } from "../../../Basic/Notification/type";

const primaryItems = [
  {
    img: "https://i.ibb.co/pyvB7Qg/shoes-primary.jpg",
    title: "Number 1",
  },
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
const PopupEdit = ({ open, row, onClose, onSubmit }) => {
  const [product, setProductData] = useState(data.product);
  const [colors, setColors] = useState([]);
  const [primaryImages, setPrimaryImages] = useState(
    row?.primaryImages ? row.primaryImages : primaryItems
  );
  const [secondaryImages, setSecondaryImages] = useState(
    row?.secondaryImages ? row.secondaryImages : secondaryItems
  );

  React.useEffect(() => {
    if (row) {
      setProductData(row);
      if (row.colors && row.colors.length > 0) {
        setColors(row.colors);
      } else setColors([]);
    } else {
      setProductData(data.product);
      setColors([]);
    }
  }, [row]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    if (e.target.name === "isStock") {
      setProductData({ ...product, isStock: e.target.checked });
    } else setProductData({ ...product, [name]: value });
  };
  const handleCalColor = (e) => {
    e.preventDefault();
    const id = e.target.id;
    if (id === "") {
      setColors((colors) => {
        return [...colors, data.color];
      });
    } else {
      setColors(colors.filter((item) => item !== colors[Number(id)]).slice());
    }
  };

  const handleChangeColor = (e, index) => {
    const { name, value } = e.target;
    const newColors = colors.map((c, i) => {
      if (i === index) {
        return {
          ...c,
          [name]: value,
        };
      }
      return c;
    });
    setColors(newColors);
  };

  const handleCalColorDetail = (e, colorIndex) => {
    e.preventDefault(); 
    console.log('colorIndex', colorIndex);
    console.log('color', colors[colorIndex]);
    const idValue = e.target.id;
    if (idValue === "addItem") {
      colors[colorIndex].details.push(data.detail);
    } else {
      // const newArr = colors[colorIndex].details.filter(
      //   (item) => item !== colors[colorIndex].details[Number(idValue)]
      // );
      // colors[colorIndex].details = newArr;
    }
    setColors([...colors]);
  };

  console.log('colors',colors);
  const handleChangeColorDetail = (e, colorIndex, detailIndex) => {
    const { name, value } = e.target;
    const newColors = colors.map((c, ci) => {
      if (ci === colorIndex) {
        return {
          ...c,
          details: colors[colorIndex].details.map((d, di) => {
            if (di === detailIndex) {
              return {
                ...d,
                [name]: Number(value),
              };
            }
            return d;
          }),
        };
      }
      return c;
    });
    setColors(newColors);
  };
  const handleCalSecondaryImage = (e) => {
    const id = e.target.id;
    if (id === "addImage") {
      setSecondaryImages((prev) => {
        return [...prev, ""];
      });
    } else {
      const arr1 = setSecondaryImages.slice(0, Number(id));
      const arr2 = setSecondaryImages.slice(
        Number(id) + 1,
        setSecondaryImages.length
      );
      setSecondaryImages([...arr1, ...arr2]);
    }
  };
  const handlePreviewImage = (e) => {
    const name = e.target.id;
    const file = e.target.files[0];

    const check = checkFile(file);

    if (!check) {
      let formData = new FormData();
      formData.append("file", file);

      fetchUploadImageProduct(formData)
        .then((res) => {
          setProductData((prev) => {
            return { ...prev, [name]: res.data.url };
          });
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
        primaryImages: primaryImages,
        secondaryImages: secondaryImages,
        colors: colors,
      })
        .then((response) => {
          if (response.status === 200) {
            Notification(NotificationType.success, response.data.msg);
            setProductData(data.product);
            setColors([]);
            setPrimaryImages([]);
            setSecondaryImages([]);
          } else Notification(NotificationType.error, response.data.msg);
        })
        .catch((error) => Notification(NotificationType.error, error));
    } else {
      await fetchUpdateProduct(
        {
          ...product,
          primaryImages: primaryImages,
          secondaryImages: secondaryImages,
          colors: colors,
        },
        row.id
      )
        .then((response) => {
          if (response.status === 200) {
            Notification(NotificationType.success, response.data.msg);
          } else Notification(NotificationType.error, response.data.msg);
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
      fullWidths={true}
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
        <MuiGrid container spacing={6}>
          <MuiGrid item xs={4}>
            <FormGroup>
              <TextField
                margin="normal"
                name="productName"
                label="Name"
                value={product.productName || ""}
                onChange={handleChangeInput}
                sx={{ minWidth: 200 }}
              />
              <TextField
                margin="normal"
                value={product.cateCode || ""}
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
                margin="normal"
                value={product.gender || ""}
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
              <TextField
                margin="normal"
                value={product.collectCode || ""}
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
                name="stateCode"
                label="State"
                value={product.stateCode || ""}
                select
                onChange={handleChangeInput}
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
        </MuiGrid>

        <MuiGrid>
          <FormGroup>
            <TextField
              margin="normal"
              name="productDescription"
              label="Description"
              value={product.productDescription || ""}
              onChange={handleChangeInput}
              multiline
            />
          </FormGroup>
        </MuiGrid>
        <Link>List Primary Images</Link>
        <MuiGrid>
          <ImageList cols={2} rowHeight={328}>
            {primaryImages.map((item) => (
              <ImageListItem key={item.img}>
                <ProductSecondaryImage
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
            {primaryImages.length < 2 && (
              <ImageListItem>
                <ProductSecondaryImageCard>
                  <ProductSecondaryImageLabel for="file-input">
                    <ProductSecondaryImage
                      id="addImage"
                      src={Plus}
                      alt="New"
                      loading="lazy"
                      onClick={handleCalSecondaryImage}
                    />
                  </ProductSecondaryImageLabel>
                  <ProductSecondaryImageInput
                    id="file-input"
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
          <ImageList cols={4} rowHeight={164}>
            {secondaryImages.map((item) => (
              <ImageListItem key={item.img}>
                <ProductSecondaryImage
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
            {secondaryImages.length < 4 && (
              <ImageListItem>
                <ProductSecondaryImageCard>
                  <ProductSecondaryImageLabel for="file-input">
                    <ProductSecondaryImage
                      id="addImage"
                      src={Plus}
                      alt="New"
                      loading="lazy"
                      onClick={handleCalSecondaryImage}
                    />
                  </ProductSecondaryImageLabel>
                  <ProductSecondaryImageInput
                    id="file-input"
                    type="file"
                    onChange={handlePreviewImage}
                  />
                </ProductSecondaryImageCard>
              </ImageListItem>
            )}
          </ImageList>
        </MuiGrid>
        <MuiGrid>
          <Link onClick={handleCalColor}>New Color</Link>
          {colors?.length > 0 &&
            colors.map((color, colorIndex) => (
              <MuiGrid container spacing={0} key={`COLOR_NO${colorIndex}`}>
                <MuiGrid
                  item
                  xs={6}
                  sx={{
                    border: "1px solid black",
                    borderRadius: "15px",
                    padding: 1,
                    marginTop: 2,
                  }}
                >
                  <MuiGrid container spacing={1}>
                    <MuiGrid item xs={6}>
                      <FormGroup>
                        <TextField
                          margin="normal"
                          name="nameColor"
                          value={color.nameColor}
                          onChange={(e) => handleChangeColor(e, colorIndex)}
                          label="Color Name"
                        />
                      </FormGroup>
                    </MuiGrid>
                    <MuiGrid item xs={6}>
                      <FormGroup>
                        <TextField
                          margin="normal"
                          name="valueColor"
                          value={color.valueColor}
                          onChange={(e) => handleChangeColor(e, colorIndex)}
                          type="color"
                        />
                      </FormGroup>
                    </MuiGrid>
                  </MuiGrid>
                  <Link
                    id="addItem"
                    onClick={(e) => handleCalColorDetail(e, colorIndex)}
                  >
                    New Size
                  </Link>
                  {color?.details.length > 0 &&
                    color.details.map((detail, detailIndex) => (
                      <MuiGrid container spacing={1} key={`DS${detailIndex}`}>
                        <MuiGrid item xs={6}>
                          <FormGroup>
                            <TextField
                              margin="normal"
                              name="size"
                              value={detail.size}
                              onChange={(e) =>
                                handleChangeColorDetail(
                                  e,
                                  colorIndex,
                                  detailIndex
                                )
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
                                handleChangeColorDetail(
                                  e,
                                  colorIndex,
                                  detailIndex
                                )
                              }
                              type="number"
                              label="Quantity"
                            />
                          </FormGroup>
                        </MuiGrid>
                      </MuiGrid>
                    ))}
                </MuiGrid>
              </MuiGrid>
            ))}
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
