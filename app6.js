const {readFileSync,writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./content/firsttext.txt','utf-8');
const second = readFileSync('./content/secondtxt.txt','utf-8');

writeFileSync('./content/resulr-sync.txt',`Here is the result : ${first}, ${second}`,{flag:'a'})
console.log('done')

console.log('starting next')
