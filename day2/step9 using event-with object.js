let EventEmitter = require("events").EventEmitter;
class HeroList extends EventEmitter{
    hlist = [];
    add(nhero){
        if(nhero){
            this.hlist.push(nhero);
            this.emit("heroadded", nhero);
        }else{
            console.log("you must add a hero to the list");
        }
    }
};
let herolist = new HeroList();
herolist.on("heroadded", function(evt){
    console.log(evt);
});
herolist.add("Batman");
herolist.add("Superman");
herolist.add();
// console.log(herolist.list);