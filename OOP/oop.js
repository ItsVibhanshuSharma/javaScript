const user = {
    userName : 'Vibhanshu',
    loginCoun : 8,
    signnedIn : true,

    getUserDetail :function(){
        console.log("User Detail");
        console.log(`${this.userName}`);
    }
}

// console.log(user.userName);
// console.log(user.getUserDetail());


function User(username , isLoggedIn , loginCount)
{
    this.username = username;
    this.isLoggedIn = isLoggedIn;
    this.loginCount = loginCount;

     return this
}


const userOne  = new User('Vibhanshu',false, 43)
console.log(userOne);