function sum(...args){
    for(let i=0 ;i< args.length ;i++){
        console.log("you gave us :",args[i]);
    }
}

// function min(...args){
//     return args.reduce((min,el)=>{
//         if(el < min){
//             return el;
//         }
//         else{
            // return min;
//         }
//     })
// }

function min(msg, ...args){
    console.log(msg);
    return args.reduce((min,el)=>{
        if(el < min){
            return el;
        }
        else{
            return min;
        }
    })
}