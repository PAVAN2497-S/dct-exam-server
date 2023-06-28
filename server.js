const http = require('http') //1-http module is imported to create an HTTP server
const students = require('./data') //4

const server = http.createServer(function(req,res){ //2
    res.setHeader('Access-Control-Allow-Origin','*')// to prevent the CORS error on front end
    const rollNo = req.url.slice(1)   //5  - rollNo is in the string 
    const result = students.find(ele =>{
        return ele.roll_number === parseInt(rollNo) 
        
    })
    if(result){
        res.end(JSON.stringify(result))
    }else{
        res.end(JSON.stringify({}))
    }
})
    
 server.listen(3003,function(){ //3
    console.log('server is running')
})

