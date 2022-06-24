import React, { useState, useRef } from 'react';
import { Container, WrapperBtn } from './PopoverStyled';
import { Button } from '../Button';
import PopoverPanel from '../PopoverPanel';
import { CSSTransition } from 'react-transition-group';

const Popover = (props) => {
    const [open, setOpen] = useState(false);
    const btnRef = useRef(null);
    const nodeRef = useRef(null);
    const { category } = props;

    return (
        <Container>
            <WrapperBtn ref={btnRef}>
                <Button
                    text={category.name}
                    onClick={() => setOpen((open) => !open)}
                    open={open}
                />
            </WrapperBtn>

            <CSSTransition
                in={open}
                timeout={300}
                classNames='opacity-cubic'
                unmountOnExit
                nodeRef={nodeRef}
            >
                <PopoverPanel
                    onClickOutside={() => setOpen((open) => !open)}
                    btnRef={btnRef}
                    category={category}
                    forwardRef={nodeRef}
                />
            </CSSTransition>
        </Container>
    );
};

export default Popover;
