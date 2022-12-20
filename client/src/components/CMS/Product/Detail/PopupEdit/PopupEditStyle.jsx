import styled, { css } from "styled-components";

const ProductSecondaryImageCard = styled.div`
    height: inherit;
`;
const ProductSecondaryImageLabel = styled.label`
    height: inherit;
`;
const ProductSecondaryImage = styled.img`
    width: inherit;
    border: 1px solid;
    cursor: pointer;
    &:hover {
        background-color: #b0b0b0;
    }
`;
const ProductSecondaryImageInput = styled.input`
    display: none;
`;
const CloseImage = styled.div`
    position: absolute;
    top: 0;
    right: 0;
`;
export {
    CloseImage,
    ProductSecondaryImageCard,
    ProductSecondaryImageLabel,
    ProductSecondaryImage,
    ProductSecondaryImageInput,
};
