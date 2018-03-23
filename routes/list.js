/**
 * @author huzt
 * @Description:
 */
var request = require('request');
var list={}

list.ininPage = {
    getTable:function(){
        /*request('http://127.0.0.1:9888/hmt-loan//dev/queryServicerShop', function (error, response, body) {
            console.log('error:', error); // 发生错误时打印错误
            console.log('statusCode:', response && response.statusCode); // 收到回复后打印回复状态码
            console.log('body:', body); // P打印返回的数据。
            //return body;
        });*/
        var info = [{"id":"1","name" : "hu","job" : "java"},{"id":"2","name" : "hu","job" : "java"},{"id":"3","name" : "hu","job" : "java"}];
        return info;
    }
}
module.exports= list;