/**
 * @author huzt
 * @Description: 用户列表
 */
var usList={}

usList.getTable={
    show:function () {
        var info = {info:[{id:1,name : "hu1",job : "c"},{id:2,name : "hu2",job : "java"},{id:3,name : "hu3",job : "nodejs"}]};
        var listHtml = '';
        $.each(info.info,function(index,entry){
            listHtml += '<tr>';
            listHtml += '<td>'+ (entry.id) +'</td>';
            listHtml += '<td>'+ (entry.name) +'</td>';
            listHtml += '<td>'+ (entry.job) +'</td>';
            listHtml += '<td class="tr">';
            listHtml += '<a href="javascript:;" id="'+entry.id+'" class="btn btn-info" title="修改">修改</a> ';
            listHtml += '<a href="javascript:;" id="'+entry.id+'" class=" btn btn-danger" title="删除">删除</a> ';
            listHtml += '<a href="javascript:;" id="'+entry.id+'" class="btn btn-link" title="详情">详情</a> ';
            listHtml += '</td></tr>';
        })
        $("#tbodyInfo").append(listHtml);
    },
    moreInfo:function (id) {
        alert("更多信息"+id);
    },
    editInfo:function (id) {
        alert("id=="+id);
        var info;
        if(id == 1){
            info = {info:[{id:1,name : "hu1",job : "c"}]};
       }else {
            info = {info:[{id:3,name : "hu3",job : "nodejs"}]};
        }
        return info;
    }
}
module.exports = usList;