import React, { useEffect, useState } from 'react';
import { Container, Image, Content, Tool } from './ButtonStyled';

const Button = (props) => {
    const { href, img, content, tool, children, button, ...func } = props;
    const [p, setP] = useState(false);
    const [ml, setMl] = useState(false);
    const [b, setB] = useState(false);

    useEffect(() => {
        if (children) {
            setP(true);
        }

        if (children || img) {
            setMl(true);
        }

        if (button) {
            setB(true);
        }
    }, [children, img, button]);

    return (
        <Container as={b && 'button'} href={href} padding={p} {...func}>
            {img && <Image src={img} alt='' />}
            {children}
            {content && <Content marginLeft={ml}>{content}</Content>}
            {tool && <Tool>{tool}</Tool>}
        </Container>
    );
};

export default Button;
