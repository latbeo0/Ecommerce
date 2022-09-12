import { useState, useRef } from 'react';
import { Container, WrapperButton, ButtonPopover } from './PopoverStyled';
import PopoverPanel from './PopoverPanel';
import { CSSTransition } from 'react-transition-group';

const Popover = (props) => {
    const [open, setOpen] = useState(false);
    const btnRef = useRef(null);
    const nodeRef = useRef(null);
    const { category } = props;

    const setOpenPanel = () => {
        setOpen((open) => !open);
    };

    return (
        <Container>
            <WrapperButton ref={btnRef}>
                <ButtonPopover onClick={() => setOpenPanel()} open={open}>
                    {category.name}
                </ButtonPopover>
            </WrapperButton>

            <CSSTransition
                in={open}
                timeout={300}
                classNames='opacity-cubic'
                unmountOnExit
                nodeRef={nodeRef}
            >
                <PopoverPanel
                    onClickOutside={() => setOpenPanel()}
                    btnRef={btnRef}
                    category={category}
                    forwardRef={nodeRef}
                />
            </CSSTransition>
        </Container>
    );
};

export default Popover;
