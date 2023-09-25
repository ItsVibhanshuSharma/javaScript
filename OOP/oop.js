const user = {
    userName : 'Vibhanshu',
    loginCoun : 8,
    signnedIn : true,

    getUserDetail :function(){
        console.log("User Detail");
        console.log(`${this.userName}`);
    }
}

console.log(user.userName);
console.log(user.getUserDetail());