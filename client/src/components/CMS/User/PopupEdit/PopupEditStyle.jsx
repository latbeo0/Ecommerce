import styled, { css } from "styled-components";

const UserAvatarCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 128px;
    min-height: 128px;
    width: 100%;
    margin-bottom: 20px;
`;
const Avatar = styled.img`
    height: inherit;
    width: 128px;
    border: 1px solid Black;
    border-radius: 50%;
`;
const ProductSecondaryImageCard = styled.div`
    height: inherit;
`;
const ProductSecondaryImageLabel = styled.label`
    height: inherit;
`;
const ProductSecondaryImage = styled.img`
    height: inherit;
    border: 1px solid;
    cursor: pointer;
`;
const ProductSecondaryImageInput = styled.input`
    display: none;
`;
export {
    ProductSecondaryImageCard,
    ProductSecondaryImageLabel,
    ProductSecondaryImage,
    ProductSecondaryImageInput,
    UserAvatarCard,
    Avatar,
};
