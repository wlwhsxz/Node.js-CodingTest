const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let str = '';

rl.on('line', function (line) {
    input = line.split(' ');
    for(let i=0; i<input[0]; i++){
        str += '*'
    console.log(str)
    }
}).on('close', function () {
});