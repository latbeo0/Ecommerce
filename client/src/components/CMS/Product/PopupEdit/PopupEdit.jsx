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
import { fetchUploadImageProduct } from "../../../../services/productFetch";
import { checkFile } from "../../../../helpers/validate";
import * as data from "./data";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  // {
  //   img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
  //   title: "Camera",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
  //   title: "Coffee",
  // },
];
const PopupEdit = ({
  row,
  onChange,
  onApplyChanges,
  onCancelChanges,
  open,
}) => {
  const [product, setProductData] = useState(data.product);
  const [colors, setColors] = useState([]);
  const [secondaryImages, setSecondaryImages] = useState(itemData);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setProductData({ ...product, [name]: value });
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
    const newColors = colors.map((o, i) => {
      if (i === index) {
        return {
          ...o,
          valueColor: e.target.value,
        };
      }
      return o;
    });
    setColors(newColors);
  };

  const handleCalColorDetail = (e, colorIndex) => {
    e.preventDefault();
    const idValue = e.target.id;

    if (idValue === "addItem") {
      colors[colorIndex].details.push(data.detail);
    } else {
      const newArr = colors[colorIndex].details.filter(
        (item) => item !== colors[colorIndex].details[Number(idValue)]
      );
      colors[colorIndex].details = newArr;
    }

    setColors([...colors]);
  };
  const handleChangeColorDetail = (e, colorIndex, detailIndex) => {
    const { name, value } = e.target;
    const newColors = colors.map((o, oi) => {
      if (oi === colorIndex) {
        return {
          ...o,
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
      return o;
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
                value={product.productName || ""}
                onChange={handleChangeInput}
                sx={{ width: 200 }}
              />
              <TextField
                margin="normal"
                name="price"
                label="Price"
                value={product.price || ""}
                onChange={handleChangeInput}
                sx={{ width: 200 }}
              />
            </FormGroup>
          </MuiGrid>
          <MuiGrid item xs={4}>
            <FormGroup>
              <TextField
                margin="normal"
                value={product.categoryID || ""}
                onChange={handleChangeInput}
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
                value={product.newPrice || ""}
                onChange={handleChangeInput}
                sx={{ width: 200 }}
              />
            </FormGroup>
          </MuiGrid>
          <MuiGrid item xs={4}>
            <FormGroup>
              <TextField
                margin="normal"
                value={product.collectionID || ""}
                onChange={handleChangeInput}
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
                value={product.saleID || ""}
                select
                onChange={handleChangeInput}
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
              value={product.productDescription || ""}
              onChange={handleChangeInput}
              multiline
            />
          </FormGroup>
        </MuiGrid>
        <Link>List Image</Link>
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
                <MuiGrid item xs={6}>
                  <FormGroup>
                    <TextField
                      margin="normal"
                      name="color"
                      value={color.valueColor}
                      onChange={(e) => handleChangeColor(e, colorIndex)}
                      type="color"
                    />
                  </FormGroup>
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
                              label={detail.quantity}
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
