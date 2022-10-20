import { DataTypeProvider } from "@devexpress/dx-react-grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { ListColorContainer, ColorCard, CurrencyContainer } from "./DataGridProviderStyled";
import { styled } from "@mui/material/styles";

const availableFilterOperations = [
  "equal",
  "notEqual",
  "greaterThan",
  "greaterThanOrEqual",
  "lessThan",
  "lessThanOrEqual",
];
function formatCurrency(value, currencyType) {
  return (`${currencyType} ` + Number(value).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'));
}
const ImagesFormatter = ({ value }) => (
  <ImageList variant="masonry" cols={2} sx={{ width: 160 }}>
    {value.map((item, index) => (
      <ImageListItem key={`${item.img}_Number${index}`} sx={{ width: 75, height: 75 }}>
        <img
          src={`${item.img}`}
          srcSet={`${item.img}`}
          alt={item.title}
          loading="lazy"
        />
      </ImageListItem>
    ))}
  </ImageList>
);
const ColorsFormatter = ({ value }) => (
  <ListColorContainer>
    {value.map((item, index) => (
      <ColorCard key = {`${item.valueColor}_Number${index}`} color={item.valueColor} />
    ))}
  </ListColorContainer>
);
const CurrencyFormatter = ({ value }) => (
  <CurrencyContainer>
    {formatCurrency(value, "VND")}
  </CurrencyContainer>
);
export const ImagesTypeProvider = (props) => (
  <DataTypeProvider
    formatterComponent={ImagesFormatter}
    //   editorComponent={BooleanEditor}
    {...props}
  />
);

export const ColorsTypeProvider = (props) => (
  <DataTypeProvider
    formatterComponent={ColorsFormatter}
    //   editorComponent={BooleanEditor}
    {...props}
  />
);
export const CurrencyTypeProvider = (props) => (
  <DataTypeProvider formatterComponent={CurrencyFormatter} {...props} />
);
