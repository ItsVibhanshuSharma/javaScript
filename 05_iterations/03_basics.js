// ["","",""]
// [{},{},{}]


// const arr = [12,2,32,3,2,34,5,5,43,3,4,4,66]

// for(const num of arr)
// {
//  console.log(num);
// }

// const greeting = "Vibhanshu ji "

// for(const greet of greeting){
//     console.log(greet);
// }


///Map

const map = new Map()
map.set('IN',"INDIA")
map.set('Np',"NEPAL")
map.set('US',"US")

// console.log(map);
for(const [key ,value] of map)
{
    console.log(key , value);
}