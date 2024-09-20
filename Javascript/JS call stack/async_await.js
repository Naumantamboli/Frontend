const h1 = document.querySelector('h1')

function changeColor(color) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            console.log("the color is :" + color)
            // if(color == "blue"){
            //     reject(color);
            // }
            resolve(color);
        }, 1000)
    })
}

async function abc() {
    await changeColor("red");
    await changeColor("blue");
    await changeColor("green");
    await changeColor("yellow");
    await changeColor("pink");
}


// await changeColor("red")
// .then((color)=>{
//     console.log("color changed to " + color)
//     return await changeColor("green")
// })
// .then((color)=>{
//     console.log("color changed to " + color)
//     return await changeColor("blue")
// })
// .then((color)=>{
//     console.log("color changed to " + color)
//     return await changeColor("yellow")
// })
// .then((color)=>{
//     console.log("color changed to " + color)
// })
// .catch((color)=>{
//     console.log("error occured")
//     console.log("on color :" + color)
// })

