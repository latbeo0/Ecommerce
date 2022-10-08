require('dotenv').config({ path: __dirname + '/configs/config.env' });

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const authRoute = require('./routes/auth');
// const userRoute = require('./routes/user');
const productRoute = require('./routes/productRoute');
// const orderRoute = require('./routes/order');
const uploadRoute = require('./routes/uploadRoute');

const app = express();
app.use(express.json());
app.use(cors());
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

// Routes
app.use('/api/auth', authRoute);
// app.use('/api/user', userRoute);
app.use('/api/product', productRoute);
// app.use('/api/order', orderRoute);
app.use('/api/upload', uploadRoute);
// Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});
