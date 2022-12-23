import React from 'react';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import {
    Box,
    Button,
    MenuItem,
    Popover,
    TextField,
    InputLabel,
} from '@mui/material';

import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { fetchGetOrderByDate } from '../../../../services/orderFetch';
import { fetchGetProductByDate } from '../../../../services/productFetch';

import { styled } from '@mui/material/styles';
import {
    Bar,
    BarChart,
    Brush,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
import {
    DashboardContainer,
    DashboardHeader,
    DashboardTitle,
    DashboardButtonContainer,
    DashboardContent,
    GridHeader,
    GridTitle,
    GridContent,
    GridLogo,
    GridValue,
} from './DashboardStyle';
import * as _data from './data';
import { getDaysInMonth } from './../../../../utils/getDayInMonth';
import FilterDate from './../../../../components/CMS/FilterDate/FilterDate';
import { selectUser } from './../../../../redux/userSlice';
import { useSelector } from 'react-redux';
import CustomerIcon from '../../../../assets/img/icons8-girl-and-shopping-bag-100.png';
import ProductIcon from '../../../../assets/img/icons8-shoes-64.png';
import OrderIcon from '../../../../assets/img/icons8-red-shopping-basket-100.png';
import CurrencyIcon from '../../../../assets/img/icons8-stack-of-money-100.png';
import { formatCurrencyVND } from './../../../../utils/format';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function filterReducer(period, action) {
    const { type, payload } = action;
    switch (type) {
        case 'BYYEAR':
            return {
                ...period,
                fromDate: new Date(payload.getFullYear(), 0, 1),
                toDate: new Date(payload.getFullYear(), 11, 31),
            };
        case 'BYMONTH':
            return {
                ...period,
                fromDate: new Date(
                    payload.getFullYear(),
                    payload.getMonth(),
                    1
                ),
                toDate: new Date(
                    payload.getFullYear(),
                    payload.getMonth() + 1,
                    0
                ),
            };
        case 'BYDAY':
            return {
                ...period,
                fromDate: payload.fromDate,
                toDate: payload.toDate,
            };
        case 'BYSEASON':
            var from = new Date();
            var to = new Date();
            var y = payload.year.getFullYear();
            if (payload.seasonNumber === 10) {
                from = new Date(y, 0, 1);
                to = new Date(y, 3, 0);
            } else if (payload.seasonNumber === 20) {
                from = new Date(y, 3, 1);
                to = new Date(y, 6, 0);
            } else if (payload.seasonNumber === 30) {
                from = new Date(y, 6, 1);
                to = new Date(y, 9, 0);
            } else if (payload.seasonNumber === 40) {
                from = new Date(y, 9, 1);
                to = new Date(y, 12, 0);
            }
            return {
                ...period,
                fromDate: from,
                toDate: to,
            };
        case 'BYSTARYEAR':
            return {
                ...period,
                fromDate: new Date(payload.getFullYear(), 0, 1),
                toDate: new Date(payload.getFullYear(), 5, 30),
            };
        case 'BYENDYEAR':
            return {
                ...period,
                fromDate: new Date(payload.getFullYear(), 6, 1),
                toDate: new Date(payload.getFullYear(), 11, 31),
            };
        default:
            return period;
    }
}
const summary = (array, key = 'totalPrice') => {
    let sum = 0;
    array.map((item) => (sum += item[key]));
    return sum;
};
const Dashboard = () => {
    const { currentUser } = useSelector(selectUser);
    const [filter, dispatch] = React.useReducer(filterReducer, {
        fromDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
        toDate: new Date(
            new Date().getFullYear(),
            new Date().getMonth() + 1,
            0
        ),
    });
    const [type, setType] = React.useState(2);
    const [year, setYear] = React.useState(new Date());
    const [halfYear, setHalfYear] = React.useState(new Date());
    const [season, setSeason] = React.useState({
        year: new Date(),
        seasonNumber: 10,
    });
    const [month, setMonth] = React.useState(new Date());
    const [date, setDate] = React.useState({
        fromDate: new Date(),
        toDate: new Date(),
    });
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [data, setData] = React.useState([]);
    const [data1, setData1] = React.useState(0);
    const [data2, setData2] = React.useState([]);
    const [data3, setData3] = React.useState(0);
    const [data4, setData4] = React.useState(0);

    const id = open ? 'simple-popover' : undefined;

    React.useEffect(() => {
        if (filter && filter.fromDate && filter.toDate) {
            fetchGetProductByDate(filter).then((response) => {
                setData1(response?.data?.products?.length);
            });
            fetchGetOrderByDate(filter, currentUser.access_token).then(
                (response) => {
                    setData3(response?.data?.orders?.length);
                    let customerArr = [];
                    response.data.orders.forEach((order, index) => {
                        // let tempSum = 0;
                        // order.listOderItems.map((item) => (tempSum += item.product.price));

                        if (
                            !customerArr.find(
                                (item) =>
                                    item?.email ===
                                        order?.addressShipping?.email &&
                                    order.addressShipping.email.length > 0
                            )
                        ) {
                            customerArr.push({
                                email: order.addressShipping.email,
                                firstName: order.addressShipping.firstName,
                                lastName: order.addressShipping.lastName,
                                phone: order.addressShipping.phone,
                                province: order.addressShipping.province,
                                // spending: tempSum,
                                spending: order.totalPrice,
                            });
                        } else {
                            customerArr.map((customer) => {
                                if (
                                    customer.email ===
                                    order?.addressShipping?.email
                                ) {
                                    return {
                                        ...customer,
                                        // spending: (customer.spending += tempSum),
                                        spending: (customer.spending +=
                                            order.totalPrice),
                                    };
                                } else return customer;
                            });
                        }
                    });
                    setData2(customerArr);

                    let tempArr = [];
                    //Theo ngày
                    if (type === 2 || type === 3) {
                        getDaysInMonth(month.getMonth(), month.getFullYear())
                            .filter(
                                (item) =>
                                    item.getDate() >=
                                        filter.fromDate.getDate() &&
                                    item.getDate() <= filter.toDate.getDate()
                            )
                            .forEach((day, index) => {
                                let filterArr = [];
                                filterArr = response.data.orders.filter(
                                    (itemFilter) =>
                                        new Date(
                                            itemFilter.createdAt
                                        )?.getDate() === day.getDate()
                                );
                                if (filterArr && filterArr.length > 0) {
                                    tempArr.push({
                                        name: day.getDate().toString(),
                                        'Doanh thu': summary(filterArr),
                                    });
                                } else {
                                    tempArr.push({
                                        name: day.getDate().toString(),
                                        'Doanh thu': 0,
                                    });
                                }
                            });
                    }
                    //Theo tháng
                    else {
                        _data.listMonth
                            .filter(
                                (item) =>
                                    item.value >=
                                        filter.fromDate.getMonth() + 1 &&
                                    item.value <= filter.toDate.getMonth() + 1
                            )
                            .forEach((month, index) => {
                                let filterArr = [];
                                filterArr = response.data.orders.filter(
                                    (itemFilter) =>
                                        (new Date(
                                            itemFilter.createdAt
                                        )?.getMonth() &&
                                            new Date(
                                                itemFilter.createdAt
                                            )?.getMonth() + 1) === month.value
                                );
                                if (filterArr && filterArr.length > 0) {
                                    tempArr.push({
                                        name: month.value.toString(),
                                        'Doanh thu': summary(filterArr),
                                    });
                                } else {
                                    tempArr.push({
                                        name: month.value.toString(),
                                        'Doanh thu': 0,
                                    });
                                }
                            });
                    }
                    setData4(summary(tempArr, 'Doanh thu'));
                    setData([...tempArr]);
                }
            );
        }
    }, [filter?.fromDate, filter?.toDate]);

    const handleFilter = (tf) => {
        switch (tf) {
            case 1:
                dispatch({ type: 'BYYEAR', payload: year });
                break;
            case 2:
                dispatch({ type: 'BYMONTH', payload: month });
                break;
            case 3:
                dispatch({ type: 'BYDAY', payload: date });
                break;
            case 4:
                dispatch({ type: 'BYSEASON', payload: season });
                break;
            case 5:
                dispatch({ type: 'BYSTARYEAR', payload: halfYear });
                break;
            case 6:
                dispatch({ type: 'BYENDYEAR', payload: halfYear });
                break;
            default:
                break;
        }
        handleClose();
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleChangeYearAndMonth = (e) => {
        const { name, value } = e;
        if (name === 'year') {
            setYear(new Date(value));
        } else if (name === 'month') {
            setMonth(new Date(value));
        }
    };
    const handleChangeDate = (e) => {
        const { name, value } = e;
        setDate({ ...date, [name]: new Date(value) });
    };

    return (
        <DashboardContainer>
            <DashboardHeader>
                <DashboardTitle>Dashboard</DashboardTitle>
                <DashboardButtonContainer>
                    <Button
                        variant='outlined'
                        startIcon={<FilterAltIcon />}
                        onClick={handleClick}
                    >
                        Filter
                    </Button>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                        <Box sx={{ p: 2, minWidth: 175, width: 200 }}>
                            <Box style={{ width: '100%', padding: 5 }}>
                                <InputLabel sx={{ fontSize: 12 }}>
                                    Điều kiện lọc
                                </InputLabel>
                                <TextField
                                    select
                                    value={type}
                                    onChange={(e) =>
                                        setType(Number(e.target.value))
                                    }
                                    sx={{ width: '100%' }}
                                >
                                    {_data.filterType.map((type) => (
                                        <MenuItem
                                            key={`${type.value}`}
                                            value={type.value}
                                        >
                                            {type.name}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Box>

                            {type < 3 ? (
                                <Box style={{ width: '100%', padding: 5 }}>
                                    <InputLabel sx={{ fontSize: 12 }}>
                                        {type === 1 ? 'Chọn năm' : 'Chọn tháng'}
                                    </InputLabel>
                                    <FilterDate
                                        name={type === 1 ? 'year' : 'month'}
                                        views={_data.filterType[type - 1].views}
                                        style={{ width: '100%' }}
                                        value={type === 1 ? year : month}
                                        onChange={handleChangeYearAndMonth}
                                    />
                                </Box>
                            ) : type === 3 ? (
                                <>
                                    <Box style={{ width: '100%', padding: 5 }}>
                                        <InputLabel sx={{ fontSize: 12 }}>
                                            Chọn ngày bắt đầu
                                        </InputLabel>
                                        <FilterDate
                                            name='fromDate'
                                            views={
                                                _data.filterType[type - 1].views
                                            }
                                            style={{ width: '100%' }}
                                            value={date.fromDate}
                                            onChange={handleChangeDate}
                                        />
                                    </Box>
                                    <Box style={{ width: '100%', padding: 5 }}>
                                        <InputLabel sx={{ fontSize: 12 }}>
                                            Chọn ngày kết thúc
                                        </InputLabel>
                                        <FilterDate
                                            name='toDate'
                                            views={
                                                _data.filterType[type - 1].views
                                            }
                                            style={{ width: '100%' }}
                                            value={date.toDate}
                                            onChange={handleChangeDate}
                                        />
                                    </Box>
                                </>
                            ) : type === 4 ? (
                                <>
                                    <Box style={{ width: '100%', padding: 5 }}>
                                        <InputLabel sx={{ fontSize: 12 }}>
                                            Chọn năm
                                        </InputLabel>
                                        <FilterDate
                                            name={'year'}
                                            views={['year']}
                                            style={{ width: '100%' }}
                                            value={season.year}
                                            onChange={(e) =>
                                                setSeason({
                                                    ...season,
                                                    year: new Date(e.value),
                                                })
                                            }
                                        />
                                    </Box>
                                    <Box style={{ width: '100%', padding: 5 }}>
                                        <InputLabel sx={{ fontSize: 12 }}>
                                            Chọn quý
                                        </InputLabel>
                                        <TextField
                                            select
                                            value={season.seasonNumber}
                                            onChange={(e) =>
                                                setSeason({
                                                    ...season,
                                                    seasonNumber: Number(
                                                        e.target.value
                                                    ),
                                                })
                                            }
                                            style={{ width: '100%' }}
                                        >
                                            {_data.listSeason.map((season) => (
                                                <MenuItem
                                                    key={`${season.value}`}
                                                    value={season.value}
                                                >
                                                    {season.name}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </Box>
                                </>
                            ) : (
                                <>
                                    <Box style={{ width: '100%', padding: 5 }}>
                                        <InputLabel sx={{ fontSize: 12 }}>
                                            Chọn năm
                                        </InputLabel>
                                        <FilterDate
                                            name={'year'}
                                            views={['year']}
                                            style={{ width: '100%' }}
                                            value={halfYear}
                                            onChange={(e) =>
                                                setHalfYear(new Date(e.value))
                                            }
                                        />
                                    </Box>
                                </>
                            )}
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    marginTop: '15px',
                                }}
                            >
                                <Button onClick={(e) => handleFilter(type)}>
                                    Xác nhận
                                </Button>
                            </Box>
                        </Box>
                    </Popover>
                </DashboardButtonContainer>
            </DashboardHeader>
            <DashboardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} xl={3}>
                        <Item>
                            <GridHeader>
                                <GridTitle>Sản phẩm mới</GridTitle>
                            </GridHeader>
                            <GridContent>
                                <GridLogo src={ProductIcon} />
                                <GridValue>{data1 ? data1 : 0}</GridValue>
                            </GridContent>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={6} xl={3}>
                        <Item>
                            <GridHeader>
                                <GridTitle>Tổng số khách hàng</GridTitle>
                            </GridHeader>
                            <GridContent>
                                <GridLogo src={CustomerIcon} />
                                <GridValue>
                                    {data2?.length ? data2.length : 0}
                                </GridValue>
                            </GridContent>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={6} xl={3}>
                        <Item>
                            <GridHeader>
                                <GridTitle>Tổng số đơn hàng</GridTitle>
                            </GridHeader>
                            <GridContent>
                                <GridLogo src={OrderIcon} />
                                <GridValue>{data3 ? data3 : 0}</GridValue>
                            </GridContent>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={6} xl={3}>
                        <Item>
                            <GridHeader>
                                <GridTitle>Doanh thu</GridTitle>
                            </GridHeader>
                            <GridContent>
                                <GridLogo src={CurrencyIcon} />
                                <GridValue>
                                    {data4 ? formatCurrencyVND(data4) : 0}
                                </GridValue>
                            </GridContent>
                        </Item>
                    </Grid>
                    <Grid item xs={12}>
                        <Item>
                            <ResponsiveContainer width='100%' height={500}>
                                <BarChart
                                    width={600}
                                    height={300}
                                    data={data}
                                    margin={{
                                        top: 35,
                                        right: 110,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <XAxis
                                        dataKey='name'
                                        label={{
                                            value:
                                                +filter.toDate.getDate() -
                                                    +filter.fromDate.getDate() >
                                                31
                                                    ? 'Theo tháng'
                                                    : 'Theo ngày',
                                            angle: 0,
                                            position: 'right',
                                            offset: 20,
                                        }}
                                    />
                                    <YAxis
                                        yAxisId='left'
                                        orientation='left'
                                        stroke='#8884d8'
                                        // tickFormatter={numberWithCommas}
                                        width={100}
                                        label={{
                                            value: 'Doanh thu',
                                            angle: 0,
                                            position: 'top',
                                            offset: 20,
                                        }}
                                    />
                                    <Tooltip />
                                    {/* <Legend /> */}
                                    <Bar
                                        yAxisId='left'
                                        dataKey='Doanh thu'
                                        fill='#82ca9d'
                                    />
                                    {/* <Bar yAxisId="right" dataKey="Số lượt thuê" fill="#8884d8" /> */}
                                    <Brush />
                                </BarChart>
                            </ResponsiveContainer>
                        </Item>
                    </Grid>
                    <Grid item xs={12}>
                        {data2 && data2.length > 0 && (
                            <TableContainer component={Paper}>
                                <Table
                                    sx={{ minWidth: 650 }}
                                    aria-label='simple table'
                                >
                                    <TableHead>
                                        <TableRow>
                                            {Object.keys(data2[0]).map(
                                                (key, index) => (
                                                    <TableCell>{key}</TableCell>
                                                )
                                            )}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {data2.map((row, index) => {
                                            if (index < 11)
                                                return (
                                                    <TableRow
                                                        key={row.email}
                                                        sx={{
                                                            '&:last-child td, &:last-child th':
                                                                { border: 0 },
                                                        }}
                                                    >
                                                        <TableCell
                                                            component='th'
                                                            scope='row'
                                                        >
                                                            {row.email}
                                                        </TableCell>
                                                        <TableCell>
                                                            {row.firstName}
                                                        </TableCell>
                                                        <TableCell>
                                                            {row.lastName}
                                                        </TableCell>
                                                        <TableCell>
                                                            {row.phone}
                                                        </TableCell>
                                                        <TableCell>
                                                            {row.province}
                                                        </TableCell>
                                                        <TableCell>
                                                            {formatCurrencyVND(
                                                                row.spending
                                                            )}
                                                        </TableCell>
                                                    </TableRow>
                                                );
                                        })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        )}
                    </Grid>
                </Grid>
            </DashboardContent>
        </DashboardContainer>
    );
};

export default Dashboard;
