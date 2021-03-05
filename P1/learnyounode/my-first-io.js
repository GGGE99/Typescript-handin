const fs = require('fs')

let file = process.argv[2];
let buff = fs.readFileSync(file)
let str = buff.toString()
let strArr = str.split("\n")
let length = strArr.length - 1

console.log(length)