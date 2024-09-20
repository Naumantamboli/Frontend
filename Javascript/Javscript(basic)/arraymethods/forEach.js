//1) foreach
// let arr = [10,12,5,20];
// arr.forEach(functionname);

// function functionname(num){
//     let sum=0 ;
//     sum = sum + num;
//     console.log(sum);
// }

// let arr2 = arr.map(function(el){
//     return el*2;
// })

//3)every

let arr=[2,4,6];

arr.every((element) =>element%2==0);
//yaha saare even no hai toh true ayega but ek bhi false hua to false ayega

let arr1 = [ {
    name : "nauman",
    marks : 90,
},{
    name : "farhat",
    marks : 80,
},{
    name : "rubina",
    marks : 100,
}]; 

arr1.forEach( (obj)=>{
    console.log(obj.marks)
})