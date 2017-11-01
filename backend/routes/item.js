var express = require('express');
var router = express.Router();
var fs = require('fs');
var mysql = require('mysql');
var con=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'zdy0828',
    database:'item'
})
/* GET home page. */
//全部数据
// router.get('/list', function(req, res, next) {
//     con.query('SELECT * FROM commodity',function(err,rows,abc){
//         if(err) throw err;
//         res.header('Access-Control-Allow-Origin','*')
//         res.send(rows);
//     });
  
// });


router.post('/list', function(req, res, next) {
    var a=req.body.abc
    console.log(a)
    con.query(`SELECT * FROM commodity WHERE name LIKE '%${a}%' OR price LIKE '%${a}%'`,function(err,rows,abc){
        if(err) throw err;
        res.header('Access-Control-Allow-Origin','*')
        res.send(rows);
    });
  
});

module.exports = router;
