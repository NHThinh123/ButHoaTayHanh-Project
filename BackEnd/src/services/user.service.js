require("dotenv").config();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const https = require("https");
const User = require("../models/user.model");
const { hostname } = require("os");
const createUserService = async (email, password, role) => {
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    let result = await User.create({
      email: email,
      password: hashedPassword,
      role: role,
    });
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getUserService = async () => {
  try {
    let result = await User.find({}).select("-password");
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const loginService = async (email, password) => {
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (isValidPassword) {
        const payload = {
          email: user.email,
          role: user.role,
        };
        const access_token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: process.env.JWT_EXPIRE,
        });
        return {
          EC: 0,
          access_token,
          user: {
            email: user.email,
            role: user.role,
          },
        };
      } else {
        return {
          EC: 2,
          EM: "Email/password không hợp lệ",
        };
      }
    } else {
      return {
        EC: 1,
        EM: "Email/password không hợp lệ",
      };
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

const createPaymentService = async () => {
  //thông số  cần thiết
  const partnerCode = "MOMO";
  const accessKey = ""; //điền vào
  const secretKey = ""; //điền vào
  const requestId = partnerCode + new Date().getTime();
  const orderId = requestId;
  const orderInfo = "Thanh toan qua momo";
  const redirectUrl = "http://localhost:5173/result";
  const ipnUrl = "http://localhost:5173/result";
  const amount = req.body.amount;
  const requestType = "captureWallet";
  const extraData = "";

  //tạo raw signature
  const rawSignature = `accessKey=${accessKey}&amount=${amount}&extraData=${extraData}&ipnUrl=${ipnUrl}&orderId${orderId}&orderInfo=${orderInfo}&partnerCode=${partnerCode}&redirectUrl=${redirectUrl}&requestId=${requestId}&requestType=${requestType}`;

  //tạo chữ ký
  const signature = crypto
    .createHmac("sha256", secretKey)
    .update(rawSignature)
    .digest("hex");

  const requestBody = JSON.stringify({
    partnerCode: partnerCode,
    accessKey: accessKey,
    requestId: requestId,
    amount: amount,
    orderId: orderId,
    orderInfo: orderInfo,
    redirectUrl: redirectUrl,
    ipnUrl: ipnUrl,
    extraData: extraData,
    requestType: requestType,
    signature: signature,
    lang: "en",
  });

  const options = {
    hostname: "test-payment.momo.vn",
    port: 443,
    path: "/v2/gateway/api/create",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(requestBody),
    },
  };

  const req = https.request(options, (resp) => {
    let data = "";
    resp.on("data", (chunk) => {
      data += chunk;
    });
    resp.on("end", () => {
      res.json(JSON.parse(data));
    });
    req.on("error", (e) => {
      console.log(`problem with request: ${e.message}`);
    });
    req.write(requestBody);
    req.end();
  });
};

module.exports = {
  createUserService,
  loginService,
  getUserService,
  createPaymentService,
};
