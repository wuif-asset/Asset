var express = require('express');
var router = express.Router();
var mysql = require('../../lib/mysql');
var {setPassword} = require('../../lib/setpassword');


// 查询数据库中的数据，进行前后台对比验证
router.post('/',async (req,res)=>{
    let {name,password}=req.body;
    // password=setPassword(password);
    let result = await mysql("select * from admin where name=? and password=?",[name,password]);
    if(result.length){
        res.json({
            code:1,
            msg:'请求成功',
            result:result[0]
        })
    }else{
        res.json({
            code:0,
            msg:'请求失败'
        })
    }
});

// 添加管理员
router.post('/insert',async (req,res)=>{
   let {name,password}=req.body;
    let result =await mysql("insert into admin(name,password) values (?,?)",[name,password]);
    if(result.affectedRows){
        res.json({
            code:1,
            msg:'插入数据成功',
            id:result.insertId
        })
    }else{
        res.json({
            code:0,
            msg:'插入数据失败'
        })
    }
});

// 删除管理员
router.delete('/delete',async (req,res)=>{
    let {id}=req.query;
    let result=await mysql("delete from admin where id=?",[id]);
    if(result.affectedRows){
        res.json({
            code:1,
            msg:'删除数据成功'
        })
    }else{
        res.json({
            code:0,
            msg:'删除数据失败'
        })
    }
});

//查询管理员进行管理员页面展示
router.get('/query',async (req,res)=>{
    let data=await mysql("select * from admin");
    if(data.length){
        res.json({
            code:1,
            msg:'数据获取成功',
            data
        })
    }else{
        res.json({
            code:0,
            msg:'数据获取失败',
        })
    }
});

//编辑修改管理员的账号与密码
router.put('/update',async (req,res)=>{
    let {id,name,password}=req.body;
    let result=await mysql("update admin set name=?,password=? where id=?",[name,password,id]);
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


module.exports=router;
