var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/edit',function (req, res, next) {
    var id = req.query.id;
    console.log(id);
    var info ;
    if(id == 1){
        info = {id:'1',name : "hu1",job : "c"};
    }else {
        info = {id:3,name : "hu3",job : "nodejs"};
    }
    res.render('edit',{info:info});
})
router.post("/doEdit",function (req, res) {
    console.log(req.body);
    console.log('更新成功');
    res.render('welcome');
})
module.exports = router;
