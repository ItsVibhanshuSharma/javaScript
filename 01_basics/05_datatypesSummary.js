// const id = Symbol('123')
// console.log(id);

// const studentId = Symbol('123')
// console.log(studentId);
// console.log(id === studentId);


// const Heroes = ["shaktiman ", "ninja"]
// console.log(Heroes);

// const myObj = {
//     name : "Vibhanshu",
//     age : 24,
//     number  : 7669785550,
// }

// console.log(myObj);


// const myfunction = function(){
//     return; // This return statement terminates the function immediately
//     console.log("Hello");
// }

// console.log(myfunction);

// =============String=============


// let name = "Vibhanshu"
// let newName = name
// newName = "Ishu"

// console.log(name);
// console.log(newName);


const User = {
    id  : 1234,
    name : "vibhanshu"
}

const User1 = User
User1.name = "Ishu"

console.log(User);