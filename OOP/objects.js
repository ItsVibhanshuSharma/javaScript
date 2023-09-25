// function multiply (num){
//     return  num * 5 
// };

// multiply.power = 2

// const ans = multiply(4)
// console.log(ans);
// console.log(multiply.power);
// console.log(multiply.prototype);

function createUser(username , score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`Score is   ${this.score}`);
}

const chai = new  createUser('chai', 25)
const tea = new createUser('tea',250)


tea.printMe()
chai.increment()