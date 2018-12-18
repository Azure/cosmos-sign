# cosmos-sign

[![latest npm badge](https://img.shields.io/npm/v/cosmos-sign/latest.svg)](https://www.npmjs.com/package/@azure/cosmos)
[![CircleCI](https://circleci.com/gh/southpolesteve/cosmos-sign.svg?style=svg)](https://circleci.com/gh/southpolesteve/cosmos-sign)
![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/cosmos-sign.svg)

Utility library for signing Azure Cosmos tokens and generating headers. Works in both node and the browser

`npm install cosmos-sign`

## Generate a signed header value using your master key

```js
import { generateSignature } from "cosmos-sign"

const masterKey = "< your master key here >"
const method = "GET"
const resourceId = ""
const resourceType = ""

const result = generateSignature(masterKey, method, resourceType, resourceId)
```

## Generate a headers object instead

```js
import { generateHeaders } from "cosmos-sign"

const masterKey = "< your master key here >"
const method = "GET"
const resourceId = ""
const resourceType = ""

const headers = generateHeaders(masterKey, method, resourceType, resourceId)

fetch("https://your-db.cosmos.azure.com/", {
  headers
})
```

## Optionally pass a date in

```js
import { generateSignature } from "cosmos-sign"

const masterKey = "< your master key here >";
const method = "GET";
const resourceId = "";
const resourceType = "";
const date = new Date(<tomorrow>)

const result = generateSignature(masterKey, method, resourceType, resourceId, date);
```

## Notes

See https://docs.microsoft.com/en-us/rest/api/cosmos-db/access-control-on-cosmosdb-resources for documentation on how to generate signatures


## Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.microsoft.com.

When you submit a pull request, a CLA-bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
