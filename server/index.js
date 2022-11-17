require('dotenv').config({ path: __dirname + '/configs/config.env' });

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');

const authRoute = require('./routes/authRoute');
const userRoute = require('./routes/userRoute');
const productRoute = require('./routes/productRoute');
const orderRoute = require('./routes/orderRoute');
const uploadRoute = require('./routes/uploadRoute');
const saleRoute = require('./routes/saleRoute');
const categoryRoute = require('./routes/categoryRoute');
const collectionRoute = require('./routes/collectionRoute');

const app = express();

app.use(express.json());
app.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000',
    })
);
app.use(
    fileUpload({
        useTempFiles: true,
    })
);
app.use(cookieParser());

// Connect to mongodb
const URI = process.env.MONGODB_URL;
const connectDB = async () => {
    await mongoose
        .connect(URI)
        .then(() => console.log('Connected to mongodb'))
        .catch((err) => {
            console.log(err);
        });
};
connectDB();
// Add headers before the routes are defined
// app.use(function (req, res, next) {

//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     next();
// });
// Routes
app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/product', productRoute);
app.use('/api/sale', saleRoute);
app.use('/api/category', categoryRoute);
app.use('/api/collection', collectionRoute);
app.use('/api/order', orderRoute);
app.use('/api/upload', uploadRoute);
// Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});
