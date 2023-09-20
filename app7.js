const {readFile,writeFile} = require('fs');

console.log('start')

readFile('./content/firsttext.txt','utf-8',(err,result)=>{
    if (err){
        console.log(err)
        result;
    }
    const first = result;
    readFile('./content/secondtxt.txt','utf-8',(err,result)=>{
        if (err){
            console.log(err)
            result;
        }
        const second = result;
        writeFile('./content/resulr-sync.txt',`Here is the actual result ${first}, ${second}`,(err,result)=>{
            if(err){
                console.log(err)
                return;
            }
            console.log('done with this task');
        })
    })
})

console.log("starting next")