import styled, { css } from 'styled-components';

const SubContainer = styled.div`
    display: flex;
    background: var(--white-color);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 0.5rem;
    width: max-content;
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

const CommentContainer = styled.div`
    display: flex;
    border-left: 1px solid var(--gray-color-light);
`;

const ArrowContainer = styled.div`
    padding: 0 0.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
`;

const CommentWrapper = styled.div`
    min-width: 25rem;
    border-right: 1px solid var(--gray-color-light);
`;

const RatingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
`;

const WriteContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
`;
const Title = styled.span``;

const Button = styled.button`
    padding: 0.5rem;
    background: var(--primary-color);
    border-radius: 0.5rem;
    color: var(--white-color);
`;

const Textarea = styled.textarea`
    min-height: 4rem;
    max-height: 4rem;
    border: 1px solid var(--gray-color-light);
`;

const Star = styled.img`
    width: 2rem;
    height: 2rem;
`;

export {
    SubContainer,
    ImageContainer,
    Image,
    Content,
    Wrapper,
    Name,
    Code,
    Price,
    Color,
    CommentContainer,
    ArrowContainer,
    CommentWrapper,
    RatingContainer,
    WriteContainer,
    Title,
    Button,
    Textarea,
    Star,
};
