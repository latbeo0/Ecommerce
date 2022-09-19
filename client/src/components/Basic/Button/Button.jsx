import React, { useState } from 'react';
import Icon from '../Icon';
import { Container, Image, Content, Effect } from './ButtonStyled';

const Button = ({
    variant = 'text',
    disable,
    href,
    img,
    effect = true,
    size = 'medium',
    thickness = 'light',
    color,
    startIcon,
    endIcon,
    content,
    children,
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
            onClick={handleClick}
            {...other}
        >
            {img && <Image src={img} alt='' />}
            {startIcon?.img && <Icon img={startIcon.img} slot='start' />}
            {startIcon?.icon && <Icon icon={startIcon.icon} slot='start' />}

            {content && (
                <Content variant={variant} color={color}>
                    {content}
                </Content>
            )}
            {children}

            {endIcon?.img && <Icon img={endIcon.img} slot='end' />}
            {endIcon?.icon && <Icon icon={endIcon.icon} slot='end' />}

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
