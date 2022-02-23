const string = "functionup"
const trim = string.trim()
const low=string.toLowerCase()
const up=string.toUpperCase()
console.log(trim)
console.log(low)
console.log(up)

module.exports.trim=trim
module.exports.low=low
module.exports.up=up