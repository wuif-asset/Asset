var express = require('express');
var router = express.Router();
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});


router.post('/', upload.single('file'), (req, res) => {
    let file = req.file;
    let date = new Date();
    let dir = [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-');
    let dirname = path.join(__dirname,'../', 'uploads', dir);
    if (!fs.existsSync(dirname)) {
        fs.mkdirSync(dirname);
    }
    let names = '' + date.getTime() + Math.floor(Math.random() * 100);
    let extname = file.originalname.split('.').pop();
    let picname = names + '.' + extname;

    fs.readFile(file.path, (err, data) => {
        fs.writeFile(dirname + '/' + picname, data, (errwrite) => {
            if (errwrite) {
                throw errwrite;
            }
            fs.unlinkSync(file.path);
            res.json({
                code: 0,
                url: '/' + dir + '/' + picname
            })

        })

    })
});

router.delete('/deleteimg',(req,res)=>{
   let url = req.query.url;
   //  /2019-4-3/11122.jpg
   let paths = './uploads'+url;

    if(fs.unlinkSync(paths)===undefined){
        res.json({code:0,msg:'success'});
    }else{
        res.json({code:1,msg:'fail'});
    }



});

module.exports = router;