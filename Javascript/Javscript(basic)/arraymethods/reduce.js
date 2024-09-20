let arr = [1,2,3,4];

let ans = arr.reduce( (acc,el)=>{
    console.log(acc);
    return acc+el;
});

console.log(ans);