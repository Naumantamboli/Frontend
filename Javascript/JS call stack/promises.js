function savetoDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("success: data was saved");
        }
        else {
            reject("failure: weak connection");
        }
    })  
}
 
let request = savetoDb("nauman tamboli"); //req = promise object
request.then(() => {
    console.log("promise was resolved");
})
    .catch(() => {
        console.log("promise was rejected");
    }) 

 //promise chaining

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


    //callback hell
    // savetoDb("nauman",
    //     () => {
    //         console.log("success: your data was saved");
    //         savetoDb("hello world", () => {
    //             console.log("success2: data was saved");
    //             savetoDb("tamboli", () => {
    //                 console.log("success3 : data was saved");
    //             }, () => {
    //                 console.log("failure3: data was not saved");
    //             })
    //         }, () => {
    //             console.log("failure2: data was not saved")
    //         });
    //     },
    //     () => {
    //         console.log("failure: data not saved");
    //     })










