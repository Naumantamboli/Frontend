
let nums = [1,4,7,2,8,9,10,12,11,17];

//all the even numbers will be returned into ans array
let ans = nums.filter((el)=>{
    return el%2 == 0;
})

//elements less than 5
let ans2 = nums.filter((el)=>{
    return el<5;
})