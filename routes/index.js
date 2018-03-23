var express = require('express');
var list = require('./list');
var router = express.Router();
/*var bodyParser = require('body-parser')
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));*/
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//处理登录的业务逻辑
router.post('/login',function(req,res){
    console.log(req.body);
    var name = req.body.name;
    res.render('welcome',{name:name});
})
router.get('/edit',function(req,res){
    console.log("edit");
    res.render('edit');
})
module.exports = router;