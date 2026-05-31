// INHERITANCE

const teacher = {
    makeVideo: true,
    email: 'ab@google.com'
}

const teachingSupport = {
    isAvailable: false
}

const teacherSupporter = {
    makeAssignment: 'JS Assignment', 
    fullTime: true,
    __proto__: teachingSupport
}

// teacher.__proto__ = User

// MODERN SYNTAX
Object.setPrototypeOf(teachingSupport, teacher)

let anotherUsername = "ChaiAurCode"

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`true length is: ${this.trim().length}`)
}

anotherUsername.trueLength()
"saloni".trueLength()
"icetea".trueLength()