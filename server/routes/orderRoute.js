const router = require("express").Router();
const orderCtrl = require("../controllers/orderCtrl");
const {
    verifyTokenAndAuthorization,
    verifyTokenAndSalePerson,
} = require("../middleware/verifyToken");
const moment = require("moment");

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
            "+"
        );
    }
    return sorted;
};

router.post("/payment", orderCtrl.payment);

router.get("/find/:id", verifyTokenAndAuthorization, orderCtrl.getUserOrders);

router.post("/search", orderCtrl.getOrder);

router.post("/search/code", orderCtrl.getOrderByCode);

router.post("/create_payment_url", function (req, res, next) {
    const ipAddr =
        req.headers["x-forwarded-for"] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;

    const tmnCode = TMN_CODE;
    const secretKey = SECRET_KEY;
    let vnpUrl = VNP_URL;
    const returnUrl = RETURN_URL;

    const date = new Date();

    const createDate = moment(date).format("yyyyMMDDHHmmss");
    const orderId = moment(date).format("HHmmss");
    const amount = req.body.amount;
    const bankCode = req.body.bankCode;

    const orderInfo = req.body.orderDescription;
    const orderType = req.body.orderType;
    const locale = req.body.language;
    if (locale === null || locale === "") {
        locale = "vn";
    }
    const currCode = "VND";
    let vnp_Params = {};
    vnp_Params["vnp_Version"] = "2.1.0";
    vnp_Params["vnp_Command"] = "pay";
    vnp_Params["vnp_TmnCode"] = tmnCode;
    // vnp_Params['vnp_Merchant'] = ''
    vnp_Params["vnp_Locale"] = locale;
    vnp_Params["vnp_CurrCode"] = currCode;
    vnp_Params["vnp_TxnRef"] = orderId;
    vnp_Params["vnp_OrderInfo"] = orderInfo;
    vnp_Params["vnp_OrderType"] = orderType;
    vnp_Params["vnp_Amount"] = amount * 100;
    vnp_Params["vnp_ReturnUrl"] = returnUrl;
    vnp_Params["vnp_IpAddr"] = ipAddr;
    vnp_Params["vnp_CreateDate"] = createDate;
    if (bankCode !== null && bankCode !== "") {
        vnp_Params["vnp_BankCode"] = bankCode;
    }

    vnp_Params = sortObject(vnp_Params);

    const querystring = require("qs");
    const signData = querystring.stringify(vnp_Params, { encode: false });
    const crypto = require("crypto");
    const hmac = crypto.createHmac("sha512", secretKey);
    const signed = hmac.update(new Buffer(signData, "utf-8")).digest("hex");
    vnp_Params["vnp_SecureHash"] = signed;
    vnpUrl += "?" + querystring.stringify(vnp_Params, { encode: false });

    res.redirect(vnpUrl);
});

//Admin

router.get("/find-all", verifyTokenAndSalePerson, orderCtrl.getAllOrder);

router.post(
    "/find-by-date",
    verifyTokenAndSalePerson,
    orderCtrl.getOrderByDate
);

module.exports = router;
