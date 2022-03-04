import express from 'express';
import { addFood,getFood,deletFood} from '../controller/food.js';
const router = express.Router();



router.post('/',addFood)
router.get('/',getFood)
router.delete('/:id',deletFood)


export default router;