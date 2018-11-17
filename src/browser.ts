import { Signer } from "./signer"
import sha256 from "crypto-js/hmac-sha256"
import Base64 from "crypto-js/enc-base64"

const hmac = (key: string, message: string) => {
  var hash = sha256(message, Base64.parse(key))
  return Base64.stringify(hash)
}

const signer = Signer(hmac)

export const generateSignature = signer.signature
export const generateheaders = signer.headers
