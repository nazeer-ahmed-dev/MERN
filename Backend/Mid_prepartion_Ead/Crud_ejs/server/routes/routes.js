const express = require('express')
const router = express.Router();
const {login_call,signup_call,home_call,search_call,insertData,upload,delete_by_id,view_by_id} = require('../controller/controller')

router.get('/',login_call)
router.get('/register',signup_call)
router.get('/home',home_call)
router.get('/search',search_call)
router.post('/add',upload,insertData)
router.get('/delete/:id',delete_by_id)
router.get('/search/:id',view_by_id)

module.exports  = router