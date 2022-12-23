const router = require('express').Router();
const orderCtrl = require('../controllers/orderCtrl');
const {
    verifyTokenAndAuthorization,
    verifyTokenAndSalePerson,
} = require('../middleware/verifyToken');
const moment = require('moment');

const { TMN_CODE, SECRET_KEY, VNP_URL, RETURN_URL } = process.env;

const sortObject = (obj) => {
    var sorted = {};
    var str = [];
    var key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            str.push(encodeURIComponent(key));
        }
    }
    str.sort();
    for (key = 0; key < str.length; key++) {
        sorted[str[key]] = encodeURIComponent(obj[str[key]]).replace(
            /%20/g,
            '+'
        );
    }
    return sorted;
};

router.post('/payment', orderCtrl.payment);

router.post('/rollback', orderCtrl.rollback);

router.get('/find/:id', verifyTokenAndAuthorization, orderCtrl.getUserOrders);

router.post('/search', orderCtrl.getOrder);

router.post('/search/code', orderCtrl.getOrderByCode);

router.post('/create_payment_url', function (req, res, next) {
    const ipAddr =
        req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;

    const tmnCode = TMN_CODE;
    const secretKey = SECRET_KEY;
    let vnpUrl = VNP_URL;
    const returnUrl = RETURN_URL;

    const date = new Date();

    const createDate = moment(date).format('yyyyMMDDHHmmss');
    // const orderId = 'ORD_' + parseInt(Date.now()).toString();
    const orderId = moment(date).format('HHmmss');
    const amount = req.body.amount;
    const bankCode = req.body.bankCode;

    const orderInfo = req.body.orderDescription;
    const orderType = req.body.orderType;
    let locale = req.body.language;
    if (locale === null || locale === '') {
        locale = 'vn';
    }
    const currCode = 'VND';
    let vnp_Params = {};
    vnp_Params['vnp_Version'] = '2.1.0';
    vnp_Params['vnp_Command'] = 'pay';
    vnp_Params['vnp_TmnCode'] = tmnCode;
    // vnp_Params['vnp_Merchant'] = ''
    vnp_Params['vnp_Locale'] = locale;
    vnp_Params['vnp_CurrCode'] = currCode;
    vnp_Params['vnp_TxnRef'] = orderId;
    vnp_Params['vnp_OrderInfo'] = orderInfo;
    vnp_Params['vnp_OrderType'] = orderType;
    vnp_Params['vnp_Amount'] = amount * 100;
    vnp_Params['vnp_ReturnUrl'] = returnUrl;
    vnp_Params['vnp_IpAddr'] = ipAddr;
    vnp_Params['vnp_CreateDate'] = createDate;
    if (bankCode !== null && bankCode !== '') {
        vnp_Params['vnp_BankCode'] = bankCode;
    }

    vnp_Params = sortObject(vnp_Params);

    const querystring = require('qs');
    const signData = querystring.stringify(vnp_Params, { encode: false });
    const crypto = require('crypto');
    const hmac = crypto.createHmac('sha512', secretKey);
    const signed = hmac
        .update(new Buffer.from(signData, 'utf-8'))
        .digest('hex');
    vnp_Params['vnp_SecureHash'] = signed;
    vnpUrl += '?' + querystring.stringify(vnp_Params, { encode: false });

    // console.log(vnpUrl);

    // res.redirect(vnpUrl);
    res.status(200).json({ redirectUrl: vnpUrl });
});

router.get('/vnpay_return', function (req, res, next) {
    let vnp_Params = req.query;

    const secureHash = vnp_Params['vnp_SecureHash'];

    delete vnp_Params['vnp_SecureHash'];
    delete vnp_Params['vnp_SecureHashType'];

    vnp_Params = sortObject(vnp_Params);

    const amount = vnp_Params['vnp_Amount'];
    const description = vnp_Params['vnp_OrderInfo'];

    const tmnCode = TMN_CODE;
    const secretKey = SECRET_KEY;

    const querystring = require('qs');
    const signData = querystring.stringify(vnp_Params, { encode: false });
    const crypto = require('crypto');
    const hmac = crypto.createHmac('sha512', secretKey);
    const signed = hmac
        .update(new Buffer.from(signData, 'utf-8'))
        .digest('hex');

    if (secureHash === signed) {
        //Kiem tra xem du lieu trong db co hop le hay khong va thong bao ket qua
        res.status(200).json({
            code: vnp_Params['vnp_ResponseCode'],
            description,
        });
    } else {
        res.status(200).json({ code: '97' });
    }
});

router.get('/vnpay_ipn', function (req, res, next) {
    let vnp_Params = req.query;
    const secureHash = vnp_Params['vnp_SecureHash'];

    delete vnp_Params['vnp_SecureHash'];
    delete vnp_Params['vnp_SecureHashType'];

    vnp_Params = sortObject(vnp_Params);
    const secretKey = SECRET_KEY;
    const querystring = require('qs');
    const signData = querystring.stringify(vnp_Params, { encode: false });
    const crypto = require('crypto');
    const hmac = crypto.createHmac('sha512', secretKey);
    const signed = hmac
        .update(new Buffer.from(signData, 'utf-8'))
        .digest('hex');

    if (secureHash === signed) {
        const orderId = vnp_Params['vnp_TxnRef'];
        const rspCode = vnp_Params['vnp_ResponseCode'];
        //Kiem tra du lieu co hop le khong, cap nhat trang thai don hang va gui ket qua cho VNPAY theo dinh dang duoi
        res.status(200).json({ RspCode: '00', Message: 'success' });
    } else {
        res.status(200).json({ RspCode: '97', Message: 'Fail checksum' });
    }
});

//Admin

router.get('/find-all', verifyTokenAndSalePerson, orderCtrl.getAllOrder);

router.post(
    '/find-by-date',
    verifyTokenAndSalePerson,
    orderCtrl.getOrderByDate
);

module.exports = router;
