import styled, { css } from 'styled-components';

const RowBodyTable = styled.tr`
    cursor: pointer;
    user-select: none;

    background: ${(props) => (props.sub ? 'var(--secondary-color)' : null)};
`;

const ItemBodyTable = styled.td`
    font-size: 0.9375rem;
    height: 80px;
    text-align: center;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const ItemBodyFull = styled.td.withConfig({
    shouldForwardProp: (prop, defaultValidatorFn) =>
        ['colspan'].includes(prop) || defaultValidatorFn(prop),
})``;

const Cover = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Dot = styled.div`
    border-top: 1px dashed var(--primary-color);
`;

const SubContainer = styled.div`
    display: flex;
    background: var(--white-color);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 0.5rem;
`;

const ImageContainer = styled.div`
    width: 10rem;
`;

const Image = styled.img`
    border-radius: 0.5rem;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem 1rem 1rem;
    flex-wrap: wrap;
`;

const Wrapper = styled.div`
    display: flex;
    gap: 1rem;
`;

const Name = styled.span``;

const Code = styled.span``;

const Price = styled.span``;

const Color = styled.div`
    width: 2rem;
    height: 2rem;
    position: relative;
    background: ${(props) => props?.background};
    border-radius: 50%;

    ${(props) =>
        props.selected
            ? css`
                  border: 1px solid var(--black-color);
                  background: transparent;

                  &::before {
                      content: '';
                      position: absolute;
                      top: 50%;
                      left: 50%;
                      transform: translate(-50%, -50%);
                      width: 80%;
                      height: 80%;
                      border: 1px solid var(--black-color);
                      border-radius: 50%;
                      background: ${(props) => props?.background};
                  }
              `
            : undefined}
`;

const AddressShippingWrapper = styled.div`
    flex: 1;
    display: flex;
    border-radius: 0.5rem;
    border: 1px solid var(--gray-color-light);
    overflow: hidden;
    cursor: pointer;
    width: fit-content;
`;

const ImageLocationContainer = styled.div`
    min-width: 4rem;
    position: relative;
    border-radius: 0.5rem;
    overflow: hidden;
    /* margin-right: 1rem; */
`;

const ImageLocation = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const ContentLocationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0.5rem 1rem;
`;

const TitleLocation = styled.h1`
    font-size: 1.5rem;
    font-weight: 500;
`;

const DescriptionLocation = styled.span`
    font-size: 0.875rem;
    font-weight: 400;
`;

export {
    RowBodyTable,
    ItemBodyTable,
    ItemBodyFull,
    Cover,
    Dot,
    SubContainer,
    ImageContainer,
    Image,
    Content,
    Wrapper,
    Name,
    Code,
    Price,
    Color,
    AddressShippingWrapper,
    ImageLocationContainer,
    ImageLocation,
    ContentLocationContainer,
    TitleLocation,
    DescriptionLocation,
};
