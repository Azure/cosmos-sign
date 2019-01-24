import assert from "assert"
import { generateSignature, generateHeaders } from "./node"

const date = new Date("Sat, 17 Nov 2018 01:06:05 GMT")
const masterKey =
  "BGejtJoCPl06h6oxaEVI1qXENjaBFNJn47GTfJR5V8bq00v3GiOn36ZZgQv9ogDJfvxEAi4RJi0nEscmXGAe5w=="
const method = "GET"
const resourceId = ""
const resourceType = ""

const expectedSignature = encodeURIComponent(
  "type=master&ver=1.0&sig=dFkNJGBUXu+ggUJnH1qh+7S1K7BcFdYYtxggMonBH8I="
)

const expectedOfferSignature = encodeURIComponent(
  "type=master&ver=1.0&sig=bziS8AttbML5q2P+A1nZfrGJfARdVM0G678XPMURYEY="
)

const expectedHeaders = {
  Authorization: expectedSignature,
  "x-ms-date": date.toUTCString()
}

const signature = generateSignature(
  masterKey,
  method,
  resourceType,
  resourceId,
  date
)

const headers = generateHeaders(
  masterKey,
  method,
  resourceType,
  resourceId,
  date
)

const offerSignature = generateSignature(
  masterKey,
  method,
  "offers",
  "FooBar",
  date
)

assert.deepStrictEqual(expectedSignature, signature)
assert.deepStrictEqual(expectedOfferSignature, offerSignature)
assert.deepStrictEqual(expectedHeaders, headers)
