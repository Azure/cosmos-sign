import { createHmac } from "crypto"
import { Signer } from "./signer"

const hmac = (key: string, message: string) => {
  return createHmac("sha256", Buffer.from(key, "base64"))
    .update(message)
    .digest("base64")
}

const signer = Signer(hmac)

export const generateSignature = signer.signature

export const generateheaders = signer.headers
