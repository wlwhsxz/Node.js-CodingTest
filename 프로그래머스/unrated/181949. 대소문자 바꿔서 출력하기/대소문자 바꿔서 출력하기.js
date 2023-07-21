const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line); 
}).on('close', function () {
    str = input[0];
    index = [];
    answer = '';

    for (let i of str) {
        index.push(i.charCodeAt())
    }

    for (let i = 0; i < index.length; i++) {
        if (index[i] >= 97 && index[i] <= 122) {
            // Convert lowercase letters to uppercase
            index[i] -= 32;
        } else if (index[i] >= 65 && index[i] <= 90) {
            // Convert uppercase letters to lowercase
            index[i] += 32;
        }
    }
    
    index.forEach((v) => {
        answer += String.fromCharCode(v);
    });
    
    console.log(answer);
});
