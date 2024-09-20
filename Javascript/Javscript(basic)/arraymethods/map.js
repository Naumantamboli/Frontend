// 1)
let num = [1,2,3,4];

let double = num.map(function(el){
    return el*el;
})

//2)
let cgpa = arr1.map(function(el){
    return (el.marks)/10;
})
//or
let cgpa2 = arr1.map((obj)=>{
    return (obj.marks)/10;
})

