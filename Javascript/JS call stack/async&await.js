h1 = document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve("color changed");
        },delay)
    })   
}

changeColor("red",2000)
.then((value)=>{
    console.log(value);
    console.log("red color was completed");
    return changeColor("orange",2000)
})
.then((value)=>{
    console.log(value);
    console.log("orange color was completed");
    return changeColor("green",2000);
})
.then((value)=>{
    console.log(value);
    console.log("green color was completed");
    return changeColor("blue",2000);
})
.then((value)=>{
    console.log(value);
    console.log("blue color was completed");
});  

async function greet(){
    throw "weak connection";
    return "hello!";
}

greet()
.then((result)=>{
    console.log("the promise was resolved");
    console.log("result was: ",result);
})
.catch((err)=>{
    console.log("the promise was rejected: ",err);
})

let demo = async()=>{
    return 5;
}


function getNum(){
    return Promise((resolve,reject)=>{
        let num = Math.floor(Math.random()*10)+1;
        return num;
    })
}

async function demo(){
    getNum();
}


//example of async and await


