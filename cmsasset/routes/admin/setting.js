var express = require('express');
var router = express.Router();
var mysql=require('../../lib/mysql');
// var { setPassword }=require('../../lib/setpassword');


// 修改密码
router.post('/', async (req, res, next)=> {
    let password=req.body.checkPass;
    // password=setPassword(password);
    let result = await mysql("update admin set password=?",[password]);
    if(result.affectedRows){
        res.json({
            code:1,
            msg:'修改成功'
        })
    }else{
        res.json({
            code:0,
            msg:'修改失败'
        })
    }


});

module.exports = router;