import React, { useEffect, useState } from "react";
import { CheckBox } from "../../Basic";
import {
    Container,
    Section,
    Title,
    ButtonReset,
    SectionHeader,
    Content,
    ColorContent,
    Color,
    Size,
} from "./FilterStyled";
import FilterItem from "../../Basic/FilterItem";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories } from "../../../redux/categorySlice";
import { selectStates } from "../../../redux/stateSlice";
import { selectCollections } from "../../../redux/collectionSlice";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { fetchClearFilter, fetchFilter } from "../../../services/filterFetch";
import { selectFilter } from "../../../redux/filterSlice";
import { selectColors } from "../../../redux/colorSlice";
import { selectSizes } from "../../../redux/sizeSlice";
import { selectMaterials } from "../../../redux/materialSlice";
import { RangeSlider, InputGroup, InputNumber } from "rsuite";
import "./slider.less";

const listGenders = [
    { id: 1, name: "Female" },
    { id: 2, name: "Male" },
    { id: 3, name: "Unisex" },
];

const Filter = () => {
    const { listCategories } = useSelector(selectCategories);
    const { listStates } = useSelector(selectStates);
    const { listCollections } = useSelector(selectCollections);
    const { listSizes } = useSelector(selectSizes);
    const { listColors } = useSelector(selectColors);
    const { listMaterials } = useSelector(selectMaterials);
    const {
        gender,
        categories,
        states,
        collections,
        materials,
        colors,
        sizes,
        min,
        max,
    } = useSelector(selectFilter);

    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    const [value, setValue] = useState([25, 75]);

    const handleChangeFilter = (e) => {
        const { name, value, checked } = e.target;

        const pathname = location.pathname;
        const query = queryString.parse(location.search);
        let temp = value;

        if (checked) {
            if (query[name]) {
                const arr = query[name].split(",");
                arr.push(value);
                temp = arr.join(",");
            }
        } else {
            const arr = query[name].split(",");
            const newArr = arr.filter((item) => item !== value);
            temp = newArr.join(",");
        }

        const modifiedQuery = {
            ...query,
            [name]: temp,
        };

        const search = queryString.stringify(modifiedQuery);
        navigate(`${pathname}?${search}`, { replace: true });
    };

    const handleClearFilter = () => {
        const pathname = location.pathname;
        navigate(`${pathname}`, { replace: true });
    };

    const handleChangeColor = (e, check) => {
        const name = e.target.getAttribute("name");
        const value = e.target.getAttribute("value");
        // const checked = e.target.getAttribute("checked");

        if (check) {
            handleChangeFilter({
                target: {
                    name,
                    value,
                    checked: false,
                },
            });
        } else {
            handleChangeFilter({
                target: {
                    name,
                    value,
                    checked: true,
                },
            });
        }
    };

    const handleChangeSlider = (value) => {
        // [%start, %end]

        const pathname = location.pathname;
        const query = queryString.parse(location.search);

        const modifiedQuery = {
            ...query,
            min: value[0] * 100000,
            max: value[1] * 100000,
        };

        const search = queryString.stringify(modifiedQuery);
        navigate(`${pathname}?${search}`, { replace: true });
    };

    const handleChangeInput = (value) => {
        // [%start, %end]

        const pathname = location.pathname;
        const query = queryString.parse(location.search);

        const modifiedQuery = {
            ...query,
            min: value[0],
            max: value[1],
        };

        const search = queryString.stringify(modifiedQuery);
        navigate(`${pathname}?${search}`, { replace: true });
    };

    useEffect(() => {
        const query = queryString.parse(location.search);

        if (location.search) {
            let convertData;
            for (const key in query) {
                convertData = { ...convertData, [key]: query[key].split(",") };
            }

            const fetchProductByFilter = async () => {
                try {
                    await dispatch(
                        fetchFilter({ filter: convertData })
                    ).unwrap();
                } catch (error) {
                    console.log(error);
                }
            };
            fetchProductByFilter();
        } else {
            const handleClearFilter = async () => {
                try {
                    await dispatch(fetchClearFilter()).unwrap();
                } catch (error) {
                    console.log(error);
                }
            };
            handleClearFilter();
        }
    }, [location.search, dispatch]);

    return (
        <Container>
            <Section>
                <SectionHeader>
                    <Title>Filter</Title>
                    <ButtonReset onClick={handleClearFilter}>Reset</ButtonReset>
                </SectionHeader>
            </Section>
            <Section>
                <FilterItem title="Gender">
                    <Content>
                        {listGenders.map((item) => (
                            <CheckBox
                                key={item.id}
                                name="gender"
                                label={item.name}
                                checked={gender?.includes(item.name)}
                                onChange={handleChangeFilter}
                            />
                        ))}
                    </Content>
                </FilterItem>
            </Section>
            <Section>
                <FilterItem title="Categories">
                    <Content>
                        {listCategories.map((category) => (
                            <CheckBox
                                key={category._id}
                                name="categories"
                                label={category.cateName}
                                checked={categories.includes(category.cateName)}
                                onChange={handleChangeFilter}
                            />
                        ))}
                    </Content>
                </FilterItem>
            </Section>
            <Section>
                <FilterItem title="Collections">
                    <Content>
                        {listCollections.map((collection) => (
                            <CheckBox
                                key={collection._id}
                                name="collections"
                                label={collection.collectName}
                                checked={collections.includes(
                                    collection.collectName
                                )}
                                onChange={handleChangeFilter}
                            />
                        ))}
                    </Content>
                </FilterItem>
            </Section>
            <Section>
                <FilterItem title="Materials">
                    <Content>
                        {listMaterials.map((material) => (
                            <CheckBox
                                key={material._id}
                                name="materials"
                                label={material.materialName}
                                checked={materials?.includes(
                                    material.materialName
                                )}
                                onChange={handleChangeFilter}
                            />
                        ))}
                    </Content>
                </FilterItem>
            </Section>
            <Section>
                <FilterItem title="Price range">
                    <Content>
                        <RangeSlider
                            progress
                            style={{ margin: "16px 16px 0" }}
                            value={[min[0] / 100000, max[0] / 100000]}
                            onChange={(value) => {
                                handleChangeSlider(value);
                            }}
                        />
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                padding: "1rem 0 0.5rem",
                            }}
                        >
                            <span>Min</span>
                            <span>Max</span>
                        </div>
                        <InputGroup>
                            <InputNumber
                                min={0}
                                max={10000000}
                                value={min[0]}
                                onChange={(nextValue) => {
                                    const temp = Number(nextValue) / 100000;
                                    if (temp > Number(max[0])) {
                                        return;
                                    }
                                    handleChangeInput([
                                        nextValue,
                                        Number(max[0]),
                                    ]);
                                }}
                            />
                            <InputGroup.Addon>to</InputGroup.Addon>
                            <InputNumber
                                min={0}
                                max={10000000}
                                value={max[0]}
                                onChange={(nextValue) => {
                                    const temp = Number(nextValue) / 100000;
                                    if (Number(min[0]) > temp) {
                                        return;
                                    }
                                    handleChangeInput([
                                        Number(min[0]),
                                        nextValue,
                                    ]);
                                }}
                            />
                        </InputGroup>
                    </Content>
                </FilterItem>
            </Section>
            <Section>
                <FilterItem title="Sizes">
                    <ColorContent>
                        {listSizes.map((size) => (
                            <Size
                                key={size}
                                name="sizes"
                                value={Number(size)}
                                checked={
                                    sizes.includes(size.toString())
                                        ? true
                                        : false
                                }
                                onClick={(e) =>
                                    handleChangeColor(
                                        e,
                                        sizes.includes(size.toString())
                                            ? true
                                            : false
                                    )
                                }
                            >
                                {size}
                            </Size>
                        ))}
                    </ColorContent>
                </FilterItem>
            </Section>
            <Section>
                <FilterItem title="Colors">
                    <ColorContent style={{ paddingBottom: "1rem" }}>
                        {listColors.map((color) => (
                            <div key={color.id}>
                                <Color
                                    key={color.id}
                                    background={color.value}
                                    name="colors"
                                    value={color.value}
                                    checked={
                                        colors.includes(color.value)
                                            ? true
                                            : false
                                    }
                                    onClick={(e) =>
                                        handleChangeColor(
                                            e,
                                            colors.includes(color.value)
                                                ? true
                                                : false
                                        )
                                    }
                                ></Color>
                            </div>
                        ))}
                    </ColorContent>
                </FilterItem>
            </Section>
        </Container>
    );
};

export default Filter;
