const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);

const cake = {
    name: "chocolate",
    price: 800,
    isAvailable: true,

    orderCake : function(){
        console.log("Cake is not good");
    }
}
console.log(Object.getOwnPropertyDescriptor(cake));
console.log(Object.getOwnPropertyDescriptor(cake, "name"));

// Object.defineProperty(cake, "name", {
//     writable: false,
//     enumerable: false,
//     configurable: false
// })
// console.log(Object.getOwnPropertyDescriptor(cake, "name"));


for(let [key, value] of Object.entries(cake)){
    if(typeof value != 'function'){
        console.log(`${key} : ${value}`);
    }
}