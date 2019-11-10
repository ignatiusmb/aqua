const fs = require('fs')

const filename = 'package.json'
console.log(`Preparing ${filename}...`)
let pkg = JSON.parse(fs.readFileSync(filename))
let [MAJOR, MINOR, PATCH] = pkg.version.split('.')
const before = pkg.version

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

console.log(`Updating version from ${before} -> ${pkg.version}`)
fs.writeFileSync(filename, JSON.stringify(pkg, null, 2))
