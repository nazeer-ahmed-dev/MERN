const express = require('express')
const router = express.Router();
const {login_call,signup_call,home_call,search_call,insertData,upload,delete_by_id,view_by_id,update_by_id,to_print,bcrpyt_call,conversting_data} = require('../controller/controller')


router.get('/',login_call)
router.get('/bcrypt',bcrpyt_call)
router.get('/register',signup_call)
router.get('/home',home_call)
router.get('/search',search_call)

router.post('/bcryption',conversting_data)
router.post('/add',upload,insertData)

router.get('/delete/:id',delete_by_id)
router.get('/search/:id',view_by_id)
router.post('/update/:id',upload,update_by_id)
router.get('/edit/:id',to_print)

module.exports  = router