import React, { useEffect } from 'react';
import { CheckBox } from '../../Basic';
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
} from './FilterStyled';
import FilterItem from '../../Basic/FilterItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategories } from '../../../redux/categorySlice';
import { selectStates } from '../../../redux/stateSlice';
import { selectCollections } from '../../../redux/collectionSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { fetchClearFilter, fetchFilter } from '../../../services/filterFetch';
import { selectFilter } from '../../../redux/filterSlice';
import { selectColors } from '../../../redux/colorSlice';
import { selectSizes } from '../../../redux/sizeSlice';

const Filter = () => {
    const { listCategories } = useSelector(selectCategories);
    const { listStates } = useSelector(selectStates);
    const { listCollections } = useSelector(selectCollections);
    const { listSizes } = useSelector(selectSizes);
    const { listColors } = useSelector(selectColors);
    const { categories, states, collections, colors, sizes } =
        useSelector(selectFilter);

    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    const handleChangeFilter = (e) => {
        const { name, value, checked } = e.target;

        const pathname = location.pathname;
        const query = queryString.parse(location.search);
        let temp = value;

        if (checked) {
            if (query[name]) {
                const arr = query[name].split(',');
                arr.push(value);
                temp = arr.join(',');
            }
        } else {
            const arr = query[name].split(',');
            const newArr = arr.filter((item) => item !== value);
            temp = newArr.join(',');
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
        const name = e.target.getAttribute('name');
        const value = e.target.getAttribute('value');
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

    useEffect(() => {
        const query = queryString.parse(location.search);

        if (location.search) {
            let convertData;
            for (const key in query) {
                convertData = { ...convertData, [key]: query[key].split(',') };
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
                <FilterItem title='Categories'>
                    <Content>
                        {listCategories.map((category) => (
                            <CheckBox
                                key={category._id}
                                name='categories'
                                label={category.cateName}
                                checked={categories.includes(category.cateName)}
                                onChange={handleChangeFilter}
                            />
                        ))}
                    </Content>
                </FilterItem>
            </Section>
            <Section>
                <FilterItem title='Collections'>
                    <Content>
                        {listCollections.map((collection) => (
                            <CheckBox
                                key={collection._id}
                                name='collections'
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
                <FilterItem title='Price range'>
                    <Content>
                        <input type='range' />
                        <p>Max value: 100.000.000 vnđ</p>
                    </Content>
                </FilterItem>
            </Section>
            <Section>
                <FilterItem title='Sizes'>
                    <ColorContent>
                        {listSizes.map((size) => (
                            <Size
                                key={size}
                                name='sizes'
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
                <FilterItem title='Colors'>
                    <ColorContent style={{ paddingBottom: '1rem' }}>
                        {listColors.map((color) => (
                            <div key={color.id}>
                                <Color
                                    key={color.id}
                                    background={color.value}
                                    name='colors'
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
