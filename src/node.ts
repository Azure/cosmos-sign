import { createHmac } from "crypto";
import { buildSign } from "./buildSign";

const hmac = (key: string, message: string) => {
  return createHmac("sha256", Buffer.from(key, "base64"))
    .update(message)
    .digest("base64");
};

export const sign = buildSign(hmac);
