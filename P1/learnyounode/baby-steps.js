let myArgs = process.argv.slice(2);

let res = 0;

for(let i = 0; i < myArgs.length ; i++){
    res += parseInt(myArgs[i])
}

console.log(res);