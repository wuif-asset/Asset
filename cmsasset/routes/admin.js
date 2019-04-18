var express = require('express');
var router = express.Router();
// 引入路由
var login=require('./admin/login');
var setting=require('./admin/setting');
var asset=require('./admin/asset');
var assetsclass=require('./admin/assetsclass');




// 使用路由
router.use('/login',login);
router.use('/setting',setting);
router.use('/asset',asset);
router.use('/assetsclass',assetsclass);


module.exports = router;
