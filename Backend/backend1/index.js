const express = require('express')
const app = express()

const mongoos = require('mongoose')

const FoodModel = require("./model/Food")
// front end result will be return in json format
app.use(express.json())

// this string we can use in .env file to secure i have used here for practise purpose
mongoos.connect("mongodb+srv://nazeer_ahemd_25:Tharparkar2513@crud.klgms.mongodb.net/Crud_food?retryWrites=true&w=majority",{
    useNewUrlParser: true,
})


app.get('/', async (req,res)=>{

    const food = new FoodModel({foodName:"Apple",daysSinceIAate:3}) 
    try
    {   
            await food.save();
    }
    catch(err){
            console.log(err)
    }
})




app.listen(3001,()=>{
        console.log("Server running on 3001 ")
})
