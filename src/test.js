const crypto = require("crypto");
const hmac = require("crypto-js/hmac-sha256");
const Base64 = require("crypto-js/enc-base64");

const key = "test";
const message = "foo";

const sig = hmac(message, key);
console.log("hmac", Base64.stringify(sig));

const signature = crypto
  .createHmac("sha256", key)
  .update(message)
  .digest("base64");
  
console.log("create-hmac", signature);