const request=require('request');
//Set the cookie instead of setting into header
var cookie = request.cookie(`UM_distinctid=178e9e884be447-0c31a22fc6208c-343c550a-1fa400-178e9e884bf3af; 
4792061091d2459a8c4af00b7f5ef715=WyIzOTEwNzc5MjEiXQ; 
ck=654eebcc75891beebac19ac84666e34b1618832031; 
PHPSESSID=t9s6d84tlnksn7e4f3rmqhvsb1; 
CNZZDATA5916476=cnzz_eid=1925897333-1618827488-&ntime=1618827488`);

const post_data={
    userId: '95a1446a7120e4af5c0c8878abb7e6d2FtRPchuCNyjUQsvKIpjXEl9HMsgEtg9S',
    userPsw: '95a1446a7120e4af5c0c8878abb7e6d2JtxPchuCNyjUQsBKPpnXol9HIsjE1g8SPyAHEoMEYkzLcdiQIpnLgk43ec3e5dee6e706af7766fffea512721O',
    vaildata: 'auaZtr1%2FbAX0iiYhrWStHnWRfNfm2AXGkHEH%2FZE6tU%2FNTDRrbBozqN4KXnGuX5jsxgDaDrSY',
    valCode: 24,
// remember:''
}

//模拟登陆步骤：
//点击获取验证码
// Set the headers for the request
var headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Cookie': cookie,
    'formData':JSON.stringify(post_data),
    'Origin':'https://n.eduyun.cn'
};
// Configure the request
var options = {
    url: 'https://n.eduyun.cn/index.php?r=simpleLogin/doLogin',//'https://1s1k.eduyun.cn/portal/html/1s1k/course/1.html'
    method: 'POST',
    headers: headers
};
// request(options,
// function(error,response,body){
//     console.error("error :",error);
//     console.log("statusCode is ",response && response.statusCode);
//     console.log("body is ",body);
// }); 

request.post({url:'https://n.eduyun.cn/index.php?r=simpleLogin/doLogin',form:post_data},function(error,response,body){
    console.error("error :",error);
    console.log("statusCode is ",response && response.statusCode);
    console.log("body is ",body);
})