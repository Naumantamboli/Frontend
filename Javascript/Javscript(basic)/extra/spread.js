let arr = [1,2,3,4,5,6,7,8];
Math.min(...arr);
Math.max(...arr);

console.log(...arr)

let name = "naumantamboli";
console.log(...name);

//to copy an array
let array = [1,2,3,4,5];
let newArr = [...array];

//on string
let me = [..."nauman"];

//object literals
const data = {
    email : "naumantamboli294@gmail.com",
    password : 12345
};
const dataCopy = {...data, id :5 ,country: "india"};
 
//converting array into object
let array1 = [10,20,30,40];
let obj1 = {...array1};
//index the woh key banjayenge aur jo array mai values the woh value banenge


