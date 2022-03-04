const mongoose = require('mongoose')
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

module.exports = mongoose.model('Crud_food',foodSchema) // name of table