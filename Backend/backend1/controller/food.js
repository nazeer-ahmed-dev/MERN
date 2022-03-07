import FoodModel from "../model/Food.js"
export const addFood = async (req,res)=>{

   const {foodName,daysSinceIAate} = req.body
   //console.log(user)
    const food = new FoodModel({foodName:foodName,daysSinceIAate:parseInt(daysSinceIAate)}) 
    try
    {   
        await food.save();
        res.send("inserted data")
    }
    catch(err){
        console.log(err)
    }
    //res.send("WE are on Food ")
}

export const getFood  =async (req,res)=>{

    FoodModel.find({},(err,result)=>{
        if(err)
        {
            res.send(err)
        }
        res.send(result)
    })
}

export const deletFood = async(req,res)=>{
    const {id} = req.params
    await FoodModel.findByIdAndRemove(id).exec();
    res.send("deleted")
} 

export const updateFood = async(req,res)=>{

}

export const getSpecific  =async (req,res)=>{

    const {id} = req.params
    const value = await FoodModel.findById(id)
    res.send(value)
}