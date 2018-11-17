# cosmos-sign

[![latest npm badge](https://img.shields.io/npm/v/cosmos-sign/latest.svg)](https://www.npmjs.com/package/@azure/cosmos)
[![CircleCI](https://circleci.com/gh/southpolesteve/cosmos-sign.svg?style=svg)](https://circleci.com/gh/southpolesteve/cosmos-sign)
![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/cosmos-sign.svg)

Utility library for signing Azure Cosmos tokens and generating headers. Works in both node and the browser

`npm install cosmos-sign`

## Generate a signed header value using your master key

``` js
import { generateSignature } from "cosmos-sign"

const masterKey = "< your master key here >";
const method = "GET";
const resourceId = "";
const resourceType = "";

const result = generateSignature(masterKey, method, resourceType, resourceId);
```

## Generate a headers object instead

``` js
import { generateHeaders } from "cosmos-sign"

const masterKey = "< your master key here >";
const method = "GET";
const resourceId = "";
const resourceType = "";

const headers = generateHeaders(masterKey, method, resourceType, resourceId);

console.log(headers)


fetch("https://your-db.cosmos.azure.com/", {
  headers
})

```

## Optionally pass a date in

``` js
import { generateSignature } from "cosmos-sign"

const masterKey = "< your master key here >";
const method = "GET";
const resourceId = "";
const resourceType = "";
const date = new Date(<tomorrow>)

const result = generateSignature(masterKey, method, resourceType, resourceId, const date = new Date(<tomorrow>));
```

## Notes

See https://docs.microsoft.com/en-us/rest/api/cosmos-db/access-control-on-cosmosdb-resources for documentation on how to generate signatures
