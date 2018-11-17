import { sign } from './'

const date = new Date('Sat, 17 Nov 2018 01:06:05 GMT')
const masterKey =
  'BGejtJoCPl06h6oxaEVI1qXENjaBFNJn47GTfJR5V8bq00v3GiOn36ZZgQv9ogDJfvxEAi4RJi0nEscmXGAe5w=='
const method = 'GET'
const resourceId = ''
const resourceType = ''

const expected = encodeURIComponent(
  'type=master&ver=1.0&sig=dFkNJGBUXu+ggUJnH1qh+7S1K7BcFdYYtxggMonBH8I='
)

const result = sign(masterKey, method, resourceType, resourceId, date)

if (expected !== result) {
  console.log('FAILURE!')
  console.log('Expected:', expected)
  console.log('Result:', result)
  process.exit(1)
}

console.log('PASSED')
process.exit(0)
