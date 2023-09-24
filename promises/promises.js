// fetch('http://something.com')
// .then()
// .catch()
// .finally()

// const promiseOne = new Promise(function(resolve, reject){
//     //Do an asynch 
//     setTimeout(function(){
//         console.log("Asynch task is complete");
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

new Promise(function(resolve, reject){
    setTimeout(function(){
          console.log("Asynch Task 2");
          resolve()
    },1000)
}).then(function(){
    console.log("Aysnch 2 Resolve");
})

