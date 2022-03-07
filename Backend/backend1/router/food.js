import express from 'express';
import { addFood,getFood,deletFood,updateFood,getSpecific} from '../controller/food.js';
const router = express.Router();



router.post('/',addFood)
router.get('/',getFood)
router.delete('/:id',deletFood)
router.patch('/:id',updateFood)
router.get('/:id',getSpecific)

export default router;