//step1
const express = require('express')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const path = require('path')
const routepath  = require('./server/routes/routes')
const { default: mongoose } = require('mongoose')

const app = express()

// app.use('/',(req,res)=>{
//     res.send("running")
//     console.log("crud operation")
// })

mongoose.connect('mongodb://127.0.0.1:27017/crud_with_ejs')

app.use('/',routepath)

// app.get('/app',(req,res)=>{
//     res.render('register',{title:"Register"})
// })

// app.get('/home',(req,res)=>{
//     res.render('home',{title:"Home"})
// })

// app.get('/search',(req,res)=>{
//     res.render('search',{title:"Search"})
// })




//step2
//log requests
app.use(morgan('tiny'))

// parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))


//step3
//set view engine
app.set("view engine","ejs")
// app.set("views".path.resolve(__dirname,"views/ejs")) : if your using ejs file inside sub folder

//load assetes
app.use("/",express.static(path.resolve('assets/css')))
app.use("/",express.static(path.resolve('assets/img')))
app.use("/",express.static(path.resolve('assets/js')))

// app.set("/css",express.static(path.resolve(__dirname+"assets/css")))
// app.set("/img",express.static(path.resolve(__dirname+"assets/img")))
// app.set("/js",express.static(path.resolve(__dirname+"assets/js")))

// step1
app.listen(3000,()=>{
    console.log("Server is running on localhost!!!")
})