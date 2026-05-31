// let myName = "Saloni"
// console.log(myName.length);    // 6

let myHeros = ["thor", "spiderman"]
let heroPower = {
    thor: "hammer",
    spiderman: "sling",
     
    getspidermanPower: function (){
        console.log(`Spidy power is: ${this.spiderman}`);
    }
}

Object.prototype.saloni = function(){
    console.log(`saloni is present in all object`);
}

Array.prototype.saloni = function(){
    console.log(`saloni says hello`);
}

heroPower.saloni()
myHeros.saloni()