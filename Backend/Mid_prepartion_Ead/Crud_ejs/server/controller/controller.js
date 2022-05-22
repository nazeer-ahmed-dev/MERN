const multer = require('multer');  
const user_data = require('../model/userdata') 


//uploading image
const storage = multer.diskStorage(
    {
        destination:function(req,file,cb)
        {
            cb(null,"./uploads")
        },
        filename:function(req,file,cb)
        {
            cb(null,file.filename+"_"+Date.now()+"_"+file.originalname)
        }
    }
);

const upload = multer({
    storage:storage,
}).single("image");

const insertData = async(req,res)=>{
    const {name,email,password} = req.body
    const image = req.file.filename
 

    const user = new user_data({
        name:name,
        email:email,
        password:password,
        image:image
    })
    user.save((err)=>{
        if(err){
            res.send({message:err.message})
        }
        else{
            // req.message = "Done!!"
            res.redirect('/register')
        }
    })

    
}
const login_call = async(req,res)=>{
    res.render('login',{title:"Login"})
}

const signup_call = async(req,res)=>{
    res.render('register',{title:"Register"})
}

const home_call =  async(req,res)=>{
    user_data.find().exec((err,users)=>{
        if(err)
        {
            res.send({message:"error"})
        }
        else{
            res.render('home',{title:"Homeaa",users:users,})
        }
    })
    // res.render('home',{title:"Home"})
}


const search_call = async(req,res)=>{
    res.render('search',{title:"Search"})
}

const delete_by_id = async(req,res)=>{
    const {id} = req.params
    await user_data.findByIdAndRemove(id).exec();
    res.redirect("/home")
}
const view_by_id  = async(req,res)=>{
    const {id} = req.params
    // const value = await user_data.findById(id)
    // res.render('search',{title:"Home",users:value,})
    user_data.findById(id).exec((err,users)=>{
        if(err)
        {
            res.send({message:"error"})
        }
        else{
            res.render('search',{title:"Searching",users:users,})
        }
    })
}
module.exports = {login_call,signup_call,home_call,search_call,insertData,upload,delete_by_id,view_by_id}
