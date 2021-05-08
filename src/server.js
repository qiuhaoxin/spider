const http=require('http');


http.createServer(function(req,res){
    const url=req.url;
    console.log("url is ",url);
    console.log('method is ',req.method)
    // res.writeHead(200,{
    //     'Content-Type':'application/json',

    // });
    if(url.indexOf('simpleCors')>-1){
        res.writeHead(200,{
            'Access-Control-Allow-Origin':'*',
            'Content-Type':'application/json',
            'set-Cookie':'name=qhx',
            'Content-Language':'zh',
            'Access-Control-Expose-Headers':'FooBar',
            'FooBar':'sdfsfsf'
        });
        res.end("成功!");
        // res.end(
        //     `mockJSONP({name:'qiuhaoxin'})`
        // )
    }else if(url.indexOf('flightCors')>-1){
        res.writeHead(200,{
            'Access-Control-Allow-Origin':'*',
            'Content-Type':'application/json',
            'set-Cookie':'name=qhx',
            'Content-Language':'zh',
            'Access-Control-Allow-Methods':'PUT,POST,GET',
            'Access-Control-Allow-Headers':'X-Customer-Header',
            // 'FooBar':'sdfsfsf'
        });
        res.end("成功!");
    }
}).listen(9010,function(){
    console.log("启动端口为:",9010);
})