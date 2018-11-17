import assert from "assert"
import { generateSignature, generateheaders } from "./node"

const date = new Date("Sat, 17 Nov 2018 01:06:05 GMT")
const masterKey =
  "BGejtJoCPl06h6oxaEVI1qXENjaBFNJn47GTfJR5V8bq00v3GiOn36ZZgQv9ogDJfvxEAi4RJi0nEscmXGAe5w=="
const method = "GET"
const resourceId = ""
const resourceType = ""

const expectedSignature = encodeURIComponent(
  "type=master&ver=1.0&sig=dFkNJGBUXu+ggUJnH1qh+7S1K7BcFdYYtxggMonBH8I="
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

const headers = generateheaders(
  masterKey,
  method,
  resourceType,
  resourceId,
  date
)

assert.deepStrictEqual(expectedSignature, signature)
assert.deepStrictEqual(expectedHeaders, headers)
