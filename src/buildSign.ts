const type = "master";
const version = "1.0";

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
  | "";

type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export function buildSign(hmac: (key: string, message: string) => string) {
  return function(
    masterKey: string,
    method: Method,
    resourceType: ResourceType = "",
    resourceId: string = "",
    date: Date = new Date()
  ) {
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
      "\n";

    var signature = hmac(masterKey, text);

    return encodeURIComponent(
      "type=" + type + "&ver=" + version + "&sig=" + signature
    );
  };
}
