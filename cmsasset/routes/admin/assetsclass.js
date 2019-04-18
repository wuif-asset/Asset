var express=require('express');
var router=express.Router();
var mysql=require('../../lib/mysql');

router.post('/',async function (req,res) {
    let {cname,ytime}=req.body;
    let result=await mysql(`insert into assetsclass (cname,ytime) values ('${cname}','${ytime}')`);
    if(result.affectedRows>0){
        res.json({
            code:0,
            msg:"success"
        })
    }else{
        res.json({
            code:1,
            msg:"fail"
        })
    }
});
router.get('/',async function (req,res) {
    let result=await mysql(`select * from assetsclass`);
    console.log(result);
    if(result.length>0){
        res.json({
            code:0,
            msg:"success",
            // 查询回的数据
            qwe:result
        })
    }else{
        res.json({
            code:1,
            msg:"fail"
        })
    }
});
router.post('/del',async function (req,res) {
     let aid=req.body.aid;
     let result=await mysql("delete from assetsclass where aid=?",[aid]);
    if(result.affectedRows>0){
        res.json({
            code:0,
            msg:"success"
        })
    }else{
        res.json({
            code:1,
            msg:"fail"
        })
    }
});

module.exports=router;