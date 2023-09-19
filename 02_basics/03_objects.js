// Objects

const mySym = Symbol("Key1")
const JSUser ={
    name : "Ishu",
    age: 18,
    mySym : 'myKey1',
    location : "Chandausi",
    email :"vibhanshu@gmail.com",
    isLoggedin : false,
    lastLoginDays : ['Monday','Saturday'],
    "Full Name" : "Vibhanshu sharma"
}

// console.log(JSUser.age);
// console.log(JSUser["age"]);
// console.log(JSUser["Full Name"]);
// console.log(JSUser.mySym);
JSUser.email  = "codervibhanshusharma";
// Object.freeze(JSUser)

JSUser.email  = "codervibhanshusharma111";
// console.log(JSUser.email);


JSUser.greeting = function(){
    console.log("Hello JS User");
}

 console.log(JSUser.greeting);

// console.log(JSUser.greeting());