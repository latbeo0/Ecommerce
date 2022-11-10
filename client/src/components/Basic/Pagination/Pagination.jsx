import React from 'react';
import { Container, Item, Dots, Arrow } from './PaginationStyled';
import { usePagination, DOTS } from '../../../hooks/usePagination';

const Pagination = (props) => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize,
    });

    // If there are less than 2 times in pagination range we shall not render the component
    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];

    return (
        <Container>
            {/* Left navigation arrow */}
            <Item disabled={currentPage === 1} onClick={onPrevious}>
                <Arrow direction='left' disabled={currentPage === 1} />
            </Item>
            {paginationRange.map((pageNumber, index) => {
                // If the pageItem is a DOT, render the DOTS unicode character
                if (pageNumber === DOTS) {
                    return <Dots key={index}>&#8230;</Dots>;
                }

                // Render our Page Pills
                return (
                    <Item
                        key={index}
                        selected={pageNumber === currentPage}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </Item>
                );
            })}
            {/*  Right Navigation arrow */}
            <Item disabled={currentPage === lastPage} onClick={onNext}>
                <Arrow direction='right' disabled={currentPage === lastPage} />
            </Item>
        </Container>
    );
};

export default Pagination;
