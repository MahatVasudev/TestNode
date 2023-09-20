const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end("welcome to our home page")
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    else{
        res.end(`<h1> Page Doesnt Exist </h1><p> We cant seem to find the web page you are requesting for </p><a href="/">go back home</a>`)
    }
    res.end()
    // res.write('Welcome to our home page')
    
})


server.listen(5001)