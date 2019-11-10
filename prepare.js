const fs = require('fs')

let pkg = JSON.parse(fs.readFileSync('./package.json'))
let [MAJOR, MINOR, PATCH] = pkg.version.split('.')

const date = new Date()
const currentYear = date.getFullYear() % 100
if (MAJOR !== currentYear + '') {
  MAJOR = currentYear
  MINOR = 0
}
const currentMonth = date.getMonth()
if (MINOR - 1 !== currentMonth) {
  MINOR = currentMonth + 1
  PATCH = 0
} else ++PATCH
pkg.version = `${MAJOR}.${MINOR}.${PATCH}`

fs.writeFileSync('./package.json', JSON.stringify(pkg, null, 2))
