const marvelHeros = ['AntMan', "Ironman", "Spiderman"]
const dc = ["Superman", "batman","Flash"]


// marvelHeros.push(dc)
// console.log(marvelHeros);

const allHeros = marvelHeros.concat(dc)
// console.log(allHeros);

const allNewHeros =[...marvelHeros , ...dc]
// console.log(allNewHeros);

const AnotherArray = [1,2,3,[1,4,6],[7,8],[8 , [12,45]]]

const myReal = AnotherArray.flat(Infinity)
console.log(myReal);


const A = 200
const B = 300
const C = 400
console.log(Array.of(A,B,C));