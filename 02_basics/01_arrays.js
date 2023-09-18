const myArr = [1,2,3,4,5]
const name = ["ishu ", "Vibhanshu"]
// console.log(myArr.length);

// Array Methods

myArr.push(6)
myArr.push(7)
myArr.pop()
myArr.shift()
myArr.unshift(9)
console.log(myArr);

const newArr = myArr.join()
// console.log(newArr);


//Slice Splice



console.log("A", myArr)
const newArr1  = myArr.slice(1,3)
console.log(newArr1);


const newArr2  = myArr.splice(1,3)
console.log(newArr2);