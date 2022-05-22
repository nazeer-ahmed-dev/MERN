
////////////////////////
//Class 1
////////////////////////

/*
const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    if(req.url=="/something")
    {
        res.write("Your on something page!!!!")
    }
    else
    {
        res.write("your on main page")
    }
    res.end()
}
)

server.listen(3000,()=>{
    console.log("server is running !!!!!!!")
})
*/

/*
const epxress = require('express');
const path = require('path')
const app = epxress()

app.use(epxress.static('public'))
app.get('/',(req,res)=>{
    console.log(__dirname)
    res.sendFile(path.resolve(__dirname,'public/index1.html'))
   // res.status(200).json({result:__dirname})
})
 
// blow three function working same way
app.all('/about',(req,res)=>{})

app.use('*',(req,res)=>{
    res.status(404).json({msg:"Not Found"})
})


app.listen(3000,()=>{
    console.log("Running !!!!")
})

*/

////////////////////////
//Class Mongooes
////////////////////////

const express = require("express")
const req = require("express/lib/request")
const path = require("path")
const {render , compilerile} = require("pug")
const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/dbname');

app.get('/',function(req,res)
{
    
})
 





