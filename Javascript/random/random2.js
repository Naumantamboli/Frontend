// let btn1 = document.querySelector("#Box1")
// console.log(btn1.innertext)


// let btns = document.querySelectorAll(".boxes");
// let btn = document.querySelector(".Box2");

//creating element
let ele = document.createElement("div")
ele.innerText = "Nauman Tamboli"
console.log(ele)
ele.style.backgroundColor = "white"
ele.style.height = "100px"
ele.style.width = "100px"
ele.style.display = "flex"
ele.style.justifyContent = "center"
ele.style.alignItems = "center"

let ele2 = Object.assign(document.createElement("div"), {innerText: "Nauman Tamboli", style: "background-color: white; height: 100px; width: 100px; display: flex; justify-content: center; align-items: center;"});

let btn2 = document.querySelector("#two")
btn2.after(ele)
// ele.remove()


let btn1 = document.querySelector("#one")
let home = document.querySelector(".home")

btn1.addEventListener("click",()=>{
    ele.innerText = "Text Changed"
})

btn2.addEventListener("click",()=>{
    home.style.backgroundColor = "beige"
})

btn2.addEventListener("dblclick",()=>{
    home.style.ObjectbackgroundColor = "black"
})

let abc = document.createElement("marquee")
abc.innerText = "moving text"

let box1 = document.querySelector("#Box1");
box1.addEventListener("keydown",()=>{
    // box1.style.backgroundColor = "black"
    alert("key is pressed")
})

//////keyboard events
let msg = document.querySelector("#message");

msg.addEventListener("keydown", (event) => {
    console.log("key pressed")
});

msg.addEventListener("keypress", (event) => {
    // handle keypress
});

msg.addEventListener("keyup", (event) => {
    console.log("key released")
});



/////mouse events

