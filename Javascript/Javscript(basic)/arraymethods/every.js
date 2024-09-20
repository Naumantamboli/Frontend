let arr = [1,5,7,3,9];

let ans = arr.every((el)=>{
    return el%2 != 0; //here all conditons are true so overall answer is true
})

let ans2 = arr.some((el)=>{
    return el%2 == 0; //here even if one conditon is true so overall answer is true
})