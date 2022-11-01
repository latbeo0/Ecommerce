import styled, { css } from "styled-components";

const ProductSecondaryImageCard = styled.div`
    height: inherit;
    &>input
`;
const ProductSecondaryImageLabel = styled.label`
  height: inherit;
`;
const ProductSecondaryImage = styled.img`
  height: inherit;
  border: 1px solid;
  cursor: pointer;
  &:hover {
    background-color: #b0b0b0;
  }
`;
const ProductSecondaryImageInput = styled.input`
  display: none;
`;
export {
  ProductSecondaryImageCard,
  ProductSecondaryImageLabel,
  ProductSecondaryImage,
  ProductSecondaryImageInput,
};
