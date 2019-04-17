var express = require('express');
var router = express.Router();
// 引入路由
var login=require('./admin/login');
var setting=require('./admin/setting');




// 使用路由
router.use('/login',login);
router.use('/setting',setting);


module.exports = router;
