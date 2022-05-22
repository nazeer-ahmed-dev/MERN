const express = require('express')
const router = express.Router();
const {login_call,signup_call,home_call,search_call,insertData,upload} = require('../controller/controller')

 router.get('/',login_call)
router.get('/register',signup_call)
router.get('/home',home_call)
router.get('/search',search_call)
router.post('/add',upload,insertData)


module.exports  = router