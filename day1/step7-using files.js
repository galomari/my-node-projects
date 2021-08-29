let fs =require("fs");
//fs.writeFileSync("temp.txt" ,"welcome to your life");
//console.log("file is created")
let data =fs.readFileSync("temp.txt","utf-8")
console.log(data)

fs.appendFileSync("temp.txt", "there is no turning back");
console.log(fs.readFileSync("temp.txt","utf-8"))

//prepend text
let existingText = fs.readFileSync("temp.txt","utf8");
fs.writeFileSync("temp.txt","Bread & Breakfast : "+existingText);
console.log(fs.readFileSync("temp.txt","utf8"));
