let EventEmitter = require("events").EventEmitter;
 
let myevent = new EventEmitter();
 
myevent.on("onlineEvent", function(){
    console.log("onlineEvent happened");
});
 
/*setTimeout(function(){
    let evtObj = {
        message : "My Custom Message",
        power : 6,
        city : "Gotham",
        type : "onlineEvent"
    }
    myevent.emit("onlineEvent",evtObj);
},1000);*/
let count=0;
myevent.on("onlineEvent", function(){
    console.log("onlineEven happened");
});

setInterval(function() {
    if (count < 5){
    myevent.emit("onlineEvent");
    count++;
    }else{
clearInterval(si)
console.log("interval stopeed")
    }
    }

    
, 2000);

