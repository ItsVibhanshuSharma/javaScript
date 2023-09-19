const JSUser = {}
 
JSUser.name = "Vibhanshu"
JSUser.number = "766985605"

// console.log(JSUser);

const obj1 = {1 : "A",2 :"B",3:"C",4:"D"}
const obj2 = {5:"E",6:"F",7:"G"}

// console.log(obj1 ,obj2);

// const obj3 = {obj1 , obj2}
const obj4 = Object.assign({}, obj1 , obj2)
const obj5 = {...obj1 , ...obj2}
// console.log(obj4);
// console.log(obj5)


const course = {
    courseName : "JavaScript",
    price : 99,
    courseInstructor :"Sharma ji "

}

const {courseInstructor} = course
console.log(courseInstructor);