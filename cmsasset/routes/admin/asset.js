var express = require('express');
var router = express.Router();
var mysql = require('../../lib/mysql');


router.get('/',async (req,res)=>{
    // page size
    let page = req.query.page;
    let limit = req.query.limit*1;
    let offset = (page-1)*limit;

    let sql = "select * from easyinfo order by eid asc ";
    let limitStr = ` limit ${offset},${limit}`;
    let dataSql = sql+limitStr;
    let data = await mysql(dataSql);
    let count = await mysql(sql);

    if(data.length){
        res.json({
            code:0,
            msg:'success',
            data,
            count:count.length
        })
    }else{
        res.json({
            code:1,
            msg:'fail'
        })
    }

});


router.post('/',async (req,res)=>{
    let str = 'insert into easyinfo (';
    let keys = Object.keys(req.body);
    keys.forEach(ele=>{
        str+= `${ele},`
    });
    str = str.slice(0,-1)+') values (';
    for(let i in req.body){
        str +=`'${req.body[i]}',`;
    }
    str = str.slice(0,-1)+')';
    console.log(str);
    let result = await mysql(str);
    if(result.affectedRows){
        res.json({
            code:0,
            msg:'success',
        })
    }else{
        res.json({
            code:1,
            msg:'fail',
        })
    }
});

module.exports = router;