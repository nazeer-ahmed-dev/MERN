const epxress = require('express');
const path = require('path')
const app = epxress()

//app.use('/style',express.static('public/css/')) : for resouce 

app.use(epxress.static('public'))

app.use('view engine','ejs')
app.use('view engine','pug')

app.set('/',(req,res)=>{
    console.log(__dirname)
    res.sendFile(path.resolve(__dirname,'public/index1.html'))
   // res.status(200).json({result:__dirname})
})
 
// blow three function working same way
app.all('/about',(req,res)=>{
        prod = ['A','B','C','D']
        res.render('index1',{name:"nazeer",prod})
})
app.use('/hi',()=>{
    res.render('about')
}
)

app.use('*',(req,res)=>{
    res.status(404).json({msg:"Not Found"})
})


app.listen(3000,()=>{
    console.log("Running !!!!")
})
