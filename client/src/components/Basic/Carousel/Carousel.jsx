import React, { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import {
    Container,
    Wrapper,
    ContentWrapper,
    ContentWrapperGap,
    Content,
    ContentGap,
    Arrow,
} from "./CarouselStyled";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const Carousel = (props) => {
    const { children, show, infiniteLoop, hasGap } = props;

    const [currentIndex, setCurrentIndex] = useState(infiniteLoop ? show : 0);
    const [length, setLength] = useState(children.length);

    const [isRepeating, setIsRepeating] = useState(
        infiniteLoop && children.length > show
    );
    const [transitionEnabled, setTransitionEnabled] = useState(true);

    const [touchPosition, setTouchPosition] = useState(null);

    // Set the length to match current children from props
    useEffect(() => {
        setLength(children.length);
        setIsRepeating(infiniteLoop && children.length > show);
    }, [children, infiniteLoop, show]);

    useEffect(() => {
        if (isRepeating) {
            if (currentIndex === show || currentIndex === length) {
                setTransitionEnabled(true);
            }
        }
    }, [currentIndex, isRepeating, show, length]);

    const next = () => {
        if (isRepeating || currentIndex < length - show) {
            setCurrentIndex((prevState) => prevState + 1);
        }
    };

    const prev = () => {
        if (isRepeating || currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1);
        }
    };

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX;
        setTouchPosition(touchDown);
    };

    const handleTouchMove = (e) => {
        const touchDown = touchPosition;

        if (touchDown === null) {
            return;
        }

        const currentTouch = e.touches[0].clientX;
        const diff = touchDown - currentTouch;

        if (diff > 5) {
            next();
        }

        if (diff < -5) {
            prev();
        }

        setTouchPosition(null);
    };

    const handleTransitionEnd = () => {
        if (isRepeating) {
            if (currentIndex <= 0) {
                // setTransitionEnabled(false);
                // setCurrentIndex(length);
                flushSync(() => {
                    setTransitionEnabled(false);
                });
                flushSync(() => {
                    setCurrentIndex(length);
                });
            } else if (currentIndex >= length + show) {
                // setTransitionEnabled(false);
                // setCurrentIndex(show);
                flushSync(() => {
                    setTransitionEnabled(false);
                });
                flushSync(() => {
                    setCurrentIndex(show);
                });
            }
        }
    };

    const renderExtraPrev = () => {
        let output = [];
        for (let index = 0; index < show; index++) {
            output.push(children[length - 1 - index]);
        }
        output.reverse();
        return output;
    };

    const renderExtraNext = () => {
        let output = [];
        for (let index = 0; index < show; index++) {
            output.push(children[index]);
        }
        return output;
    };

    if (hasGap)
        return (
            <Container>
                <Wrapper>
                    {/* You can alwas change the content of the button to other things */}
                    {(isRepeating || currentIndex > 0) && (
                        <Arrow
                            type="button"
                            onClick={prev}
                            direction="left"
                            aria-label="button"
                        >
                            <MdKeyboardArrowLeft />
                        </Arrow>
                    )}
                    <ContentWrapperGap
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                    >
                        <ContentGap
                            show={show}
                            style={{
                                transform: `translateX(-${
                                    currentIndex * (100 / show)
                                }%)`,
                                transition: !transitionEnabled
                                    ? "none"
                                    : undefined,
                            }}
                            onTransitionEnd={() => handleTransitionEnd()}
                        >
                            {length > show && isRepeating && renderExtraPrev()}
                            {children}
                            {length > show && isRepeating && renderExtraNext()}
                        </ContentGap>
                    </ContentWrapperGap>
                    {/* You can alwas change the content of the button to other things */}
                    {(isRepeating || currentIndex < length - show) && (
                        <Arrow
                            type="button"
                            onClick={next}
                            direction="right"
                            aria-label="button"
                        >
                            <MdKeyboardArrowRight />
                        </Arrow>
                    )}
                </Wrapper>
            </Container>
        );

    return (
        <Container>
            <Wrapper>
                {/* You can alwas change the content of the button to other things */}
                {(isRepeating || currentIndex > 0) && (
                    <Arrow
                        type="button"
                        onClick={prev}
                        direction="left"
                        aria-label="button"
                    >
                        <MdKeyboardArrowLeft />
                    </Arrow>
                )}
                <ContentWrapper
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                >
                    <Content
                        show={show}
                        style={{
                            transform: `translateX(-${
                                currentIndex * (100 / show)
                            }%)`,
                            transition: !transitionEnabled ? "none" : undefined,
                        }}
                        onTransitionEnd={() => handleTransitionEnd()}
                    >
                        {length > show && isRepeating && renderExtraPrev()}
                        {children}
                        {length > show && isRepeating && renderExtraNext()}
                    </Content>
                </ContentWrapper>
                {/* You can alwas change the content of the button to other things */}
                {(isRepeating || currentIndex < length - show) && (
                    <Arrow
                        type="button"
                        onClick={next}
                        direction="right"
                        aria-label="button"
                    >
                        <MdKeyboardArrowRight />
                    </Arrow>
                )}
            </Wrapper>
        </Container>
    );
};

export default Carousel;
