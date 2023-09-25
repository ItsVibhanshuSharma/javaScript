let myName = 'vibhanshu'

console.log(myName.length);

let myHeros = [ 'thor','ishu']
let heroPower ={
    thor : 'Hammer',
    ishu : 'Fight',


    getSpiderPower : function(){
        console.log(`Spider power is ${this.ishu}`);
    }
}

Object.prototype.ishu = function(){
    console.log("Ishu is superman");
}

// heroPower.ishu() 