import React, { useState } from 'react';
import Icon from '../Icon';
import { Container, Content, Effect } from './ButtonStyled';

const Button = ({
    href,
    disable,
    variant = 'text',
    size = 'medium',
    thickness,
    fontSize,
    color,
    padding,
    startIcon,
    endIcon,
    sizeIcon,
    title,
    content,
    children,
    effect = false,
    onClick,
    ...other
}) => {
    const [isEffect, setIsEffect] = useState(false);
    const [coordinatesX, setCoordinatesX] = useState(null);
    const [coordinatesY, setCoordinatesY] = useState(null);

    const handleEffect = (e) => {
        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;
        setCoordinatesX(x);
        setCoordinatesY(y);
        setIsEffect(true);

        const resetCoordinates = setTimeout(() => {
            setCoordinatesX(null);
            setCoordinatesY(null);
            setIsEffect(false);
        }, 350);

        return () => clearTimeout(resetCoordinates);
    };

    const handleClick = (e) => {
        if (!disable && !isEffect) {
            onClick && onClick();
            effect && handleEffect(e);
        }
    };

    return (
        <Container
            as={!href && 'button'}
            href={href}
            variant={variant}
            disable={disable}
            effect={effect}
            size={size}
            thickness={thickness}
            color={color}
            fontSize={fontSize}
            padding={padding}
            onClick={handleClick}
            {...other}
            aria-label='button'
        >
            {startIcon?.img && (
                <Icon img={startIcon.img} sizeIcon={sizeIcon} slot='start' />
            )}
            {startIcon?.icon && (
                <Icon icon={startIcon.icon} sizeIcon={sizeIcon} slot='start' />
            )}

            {content && (
                <Content
                    variant={variant}
                    color={color}
                    size={size}
                    fontSize={fontSize}
                    thickness={thickness}
                >
                    {content}
                </Content>
            )}
            {children}

            {endIcon?.img && (
                <Icon img={endIcon.img} sizeIcon={sizeIcon} slot='end' />
            )}
            {endIcon?.icon && (
                <Icon icon={endIcon.icon} sizeIcon={sizeIcon} slot='end' />
            )}

            {isEffect && (
                <Effect
                    variant={variant}
                    style={{ left: coordinatesX, top: coordinatesY }}
                />
            )}
        </Container>
    );
};

export default Button;
