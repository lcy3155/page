var express = require('express');
var router = express.Router();
var mysql =require('mysql');
var connection =mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '123456' ,
  database:'item'
})

/* GET home page. */
router.post('/count', function(req, res, next) {
  connection.query("SELECT COUNT(*) AS jgr FROM pages",function(err,rows,fields){
    res.header('Access-Control-Allow-Origin','*')
    res.send(rows);
    console.log(rows)
  });
});
router.post('/page', function(req, res, next) {
  var num=(req.body.num-1)*4
  res.header('Access-Control-Allow-Origin',"*")
  connection.query("SELECT * FROM pages LIMIT "+num+",4",function(err,rows,fields){
    if(err) throw err
    res.send(rows)
  })
});

module.exports = router;
