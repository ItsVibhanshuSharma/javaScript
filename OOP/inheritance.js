class user{
    constructor(username)
    {
        this.username = username
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }
}


class teacher extends user{
    constructor(username , email ,password){
        super(username)
        this.email= email
        this.password = password

    }
    
    addCourse(){
        console.log(`A course  was added by ${this.username}`);
    }
}


const chai = new teacher("Chai", "chai@", '123')
console.log(chai);