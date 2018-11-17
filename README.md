# cosmos-sign

`npm install cosmos-sign`

## Generate a signed header value using your master key

```
import { generateSignature } from "cosmos-sign"

const masterKey = "< your master key here >";
const method = "GET";
const resourceId = "";
const resourceType = "";

const result = generateSignature(masterKey, method, resourceType, resourceId);
```

## Generate a headers object instead

```
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

```
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