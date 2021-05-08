const http=require('http');
const path=require('path');
const fs=require('fs');

http.createServer(function(req,res){
     const url=req.url;
     if(url.indexOf('index.html')>-1){
         fs.createReadStream(path.resolve(__dirname,'static/index.html')).pipe(res);
     }

}).listen(5000,function(){

})