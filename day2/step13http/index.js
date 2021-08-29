let http = require("http")
let fs = require("fs")
let server= http.createServer(function(req,res){
let htmlpage= fs.readFileSync("index.htm","utf-8")
res.write(htmlpage);
res.end()
})
server.listen(8765,"localhost",function(err){
if(err){
    console.log("Error : " , err);
}else{
    console.log(" server is now live on local host:8765")

    }

})