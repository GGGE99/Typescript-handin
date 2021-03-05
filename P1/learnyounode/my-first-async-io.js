const fs = require('fs').promises;
let file = process.argv[2];

async function loadMonoCounter() {
    const data = await fs.readFile(file, "binary");
    return new Buffer(data).alloc();
}
let buff = loadMonoCounter()
let str = buff.toString();
let strArr = str.split("\n");
let length = strArr.length - 1;

console.log(length);
