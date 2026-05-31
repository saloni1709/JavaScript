class User{        // Parent class: User
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username ${this.username}`)
    }

     static createId(){
        return `123`
    }
}

const saloni = new User("saloni")
// console.log(saloni.createId())


class teacher extends User {
    constructor(username, email){
       super(username)
        this.email = email
    }
}

const iphone = new teacher("iphone", "iphone@g.com")
console.log(teacher.createId());