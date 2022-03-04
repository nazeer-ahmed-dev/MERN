import  express  from "express";
import cors from 'cors'
import mongoos from "mongoose";
import foodRouter  from ".//router/food.js"
// import foodRouter from "./router/food.js"


const app = express()

// front end result will be return in json format
app.use(express.json())
app.use(cors())

// this string we can use in .env file to secure i have used here for practise purpose
mongoos.connect("mongodb+srv://nazeer_ahemd_25:Tharparkar2513@crud.klgms.mongodb.net/Crud_food?retryWrites=true&w=majority",{
    useNewUrlParser: true,
})

app.get('/',(req,res) => {console.log("running");res.send("HELLO FROM HOMEPAGE")})


app.use('/food',foodRouter)




app.listen(3001,()=>{
        console.log("Server running on 3001 ")
})
