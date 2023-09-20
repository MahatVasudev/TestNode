const EventEmitter = require('events')

const customemitter = new EventEmitter();

customemitter.on('response',(name,age)=>{
    console.log(`data recived by ${name} age ${age}`);
})

customemitter.on('response',()=>{
    console.log("some other logic")
})


customemitter.emit('response','john',34)
