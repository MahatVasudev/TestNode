const {readFile,writeFile} = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)
// const getText = (path) =>{
//     return new Promise((resolve,reject)=>{

// readFile(path,"utf-8",(err,data)=>{
//     if(err){
//         reject(err);
//     }else{
//         resolve(data);
//     }
// })
// })
// }


// getText('./content/firsttext.txt').then(result => console.log(result)).catch(err => console.log(err))

const start = async() => {
    try{
        const first = await readFile('./content/firsttext.txt','utf-8');
        const second = await readFile('./content/secondtxt.txt','utf-8')
        console.log(first);
        console.log(second);
        await writeFile('./content/result-mind-grenade.txt',`This is awesome ${first}, ${second}`)
    }catch(error){
        console.log(error)
    }

}

start()