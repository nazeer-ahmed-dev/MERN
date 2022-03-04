import mongoose from 'mongoose'
//const { post } = require('../routes/posts')

const foodSchema = mongoose.Schema({

    foodName :
    {       
        type:String,
        required : true,
    },
    daysSinceIAate:{
        type:Number,
        required : true,
    }
})

const Data = mongoose.model('Crud_food',foodSchema) // name of table
export default Data;