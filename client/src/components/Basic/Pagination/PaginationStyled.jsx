import styled, { css } from 'styled-components';

const Container = styled.ul`
    display: flex;
    list-style-type: none;
`;

const Item = styled.li`
    padding: 0 0.75rem;
    height: 2rem;
    text-align: center;
    margin: auto 4px;
    color: rgba(0, 0, 0, 0.87);
    display: flex;
    box-sizing: border-box;
    align-items: center;
    letter-spacing: 0.01071em;
    border-radius: 16px;
    line-height: 1.43;
    font-size: 0.875rem;
    font-weight: 400;
    min-width: 2rem;

    ${(props) =>
        props.selected ? 'background-color: rgba(0, 0, 0, 0.08)' : undefined};

    &:hover {
        background-color: rgba(0, 0, 0, 0.04);
        cursor: pointer;
    }

    ${(props) =>
        props.disabled
            ? css`
                  pointer-events: none;

                  &:hover {
                      background-color: transparent;
                      cursor: default;
                  }
              `
            : undefined};
`;

const Dots = styled(Item)`
    &:hover {
        background-color: transparent;
        cursor: default;
    }
`;

const Arrow = styled.div`
    transform: ${(props) =>
        props.direction === 'left'
            ? 'rotate(-135deg) translate(-50%)'
            : 'rotate(45deg)'};

    &::before {
        position: relative;
        /* top: 3pt; Uncomment this to lower the icons as requested in comments*/
        content: '';
        /* By using an em scale, the arrows will size with the font */
        display: inline-block;
        width: 0.4em;
        height: 0.4em;
        border-right: 0.12em solid rgba(0, 0, 0, 0.87);
        border-top: 0.12em solid rgba(0, 0, 0, 0.87);
    }

    ${(props) =>
        props.disabled
            ? css`
                  &::before {
                      border-right: 0.12em solid rgba(0, 0, 0, 0.43);
                      border-top: 0.12em solid rgba(0, 0, 0, 0.43);
                  }
              `
            : undefined};
`;

export { Container, Item, Dots, Arrow };
