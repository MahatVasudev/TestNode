// const {createReadStream} = require('fs')

// const stream = createReadStream('./content/big.txt',{highWaterMark:90000,})

// // default size 64kb

// stream.on('data',(result)=>{
//     console.log(result)
// })
// stream.on('error',(error)=>{
//     console.log(error)
// })

var http = require('http');
var fs = require('fs')

http.createServer(function (req,res) {
    // const text = fs.readFileSync('./content/big.txt','utf-8');
    // res.end(text);
    const fileStream = fs.createReadStream('./content/big.txt','utf-8');
    fileStream.on('open',()=>{
        fileStream.pipe(res)
    })
    fileStream.on('error',(err)=>{
        res.end(err)
    })
}).listen(5000)