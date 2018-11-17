import { createHmac } from 'crypto'

const type = 'master'
const version = '1.0'

type ResourceType =
  | 'dbs'
  | 'colls'
  | 'docs'
  | 'sprocs'
  | 'udfs'
  | 'triggers'
  | 'users'
  | 'permissions'
  | 'attachments'
  | 'media'
  | 'conflicts'
  | 'pkranges'
  | 'offers'
  | ''

type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export function sign(
  masterKey: string,
  method: Method,
  resourceType: ResourceType = '',
  resourceId: string = '',
  date: Date = new Date()
) {
  var key = new Buffer(masterKey, 'base64')

  var text =
    method.toLowerCase() +
    '\n' +
    resourceType.toLowerCase() +
    '\n' +
    resourceId +
    '\n' +
    date.toUTCString().toLowerCase() +
    '\n' +
    '' +
    '\n'

  var body = new Buffer(text, 'utf8')
  var signature = createHmac('sha256', key)
    .update(body)
    .digest('base64')

  return encodeURIComponent(
    'type=' + type + '&ver=' + version + '&sig=' + signature
  )
}
