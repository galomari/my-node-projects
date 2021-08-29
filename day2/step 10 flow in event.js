let EventEmitter= require("events").EventEmitter
let myevent = new EventEmitter

function OnlineEventHandelar(evt){
    console.log("oline event happend",evt)

}
 process.nextTick(function(){
     myevent.emit("onlineevent",1)
 })

 process.nextTick(function(){
    myevent.emit("onlineevent",2)
})
 myevent.addListener("onlineevent",OnlineEventHandelar)
 console.log("the last line in the life")

 