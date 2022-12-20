import React, { useTransition, useState } from "react";
import {
    Container,
    IconSearch,
    Input,
    IconClear,
    ResultContainer,
    Result,
} from "./SearchStyled";
import { BiSearch } from "react-icons/bi";
import { MdClear } from "react-icons/md";

const Search = (props) => {
    const { result, onChange, onClear } = props;

    return (
        <>
            <Container>
                <IconSearch>
                    <BiSearch
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                        }}
                    />
                </IconSearch>
                <Input
                    placeholder="Search here ..."
                    value={result}
                    name="search"
                    onChange={(e) => onChange(e)}
                />
                {result !== "" ? (
                    <IconClear onClick={onClear}>
                        <MdClear
                            style={{
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                            }}
                        />
                    </IconClear>
                ) : null}
            </Container>
            {result ? (
                <ResultContainer>
                    Search result for <Result>"{result}"</Result>
                </ResultContainer>
            ) : null}
        </>
    );
};

export default Search;
