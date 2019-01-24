const type = "master"
const version = "1.0"

type ResourceType =
  | "dbs"
  | "colls"
  | "docs"
  | "sprocs"
  | "udfs"
  | "triggers"
  | "users"
  | "permissions"
  | "attachments"
  | "media"
  | "conflicts"
  | "pkranges"
  | "offers"
  | ""

type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE"

export function Signer(hmac: (key: string, message: string) => string) {
  function signature(
    masterKey: string,
    method: Method,
    resourceType: ResourceType = "",
    resourceId: string = "",
    date: Date = new Date()
  ) {
    // Offer must always be lowercased: See https://docs.microsoft.com/en-us/rest/api/cosmos-db/get-an-offer
    if (resourceType === "offers") {
      resourceId = resourceId.toLowerCase()
    }
    var text =
      method.toLowerCase() +
      "\n" +
      resourceType.toLowerCase() +
      "\n" +
      resourceId +
      "\n" +
      date.toUTCString().toLowerCase() +
      "\n" +
      "" +
      "\n"

    const signature = hmac(masterKey, text)

    return encodeURIComponent(
      "type=" + type + "&ver=" + version + "&sig=" + signature
    )
  }

  function headers(
    masterKey: string,
    method: Method,
    resourceType: ResourceType = "",
    resourceId: string = "",
    date: Date = new Date()
  ) {
    const sig = signature(masterKey, method, resourceType, resourceId, date)

    return {
      Authorization: sig,
      "x-ms-date": date.toUTCString()
    }
  }

  return {
    headers,
    signature
  }
}
