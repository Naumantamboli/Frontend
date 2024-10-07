let btn = document.querySelector("button");
console.dir(btn);

//1)onclick
// function abc(){
//     console.log("button was clicked")
// }

// for(btn of btns){k
//     btn.onclick = abc;
// }

//2)onmouseenter
// btns.onmouseenter = function(){
//     console.log("you entered a button");
// }

// event listeners

btn.addEventListener("click", function(){
    console.log("hello");
})

btn.addEventListener("click", function(){
    console.log("my name is nauman");
})

//////////////////////////////

// let inp = document.querySelector("input");

// inp.addEventListener("keydown",function(event){
//     console.log("code =",event.code);
//     if(event.code == "KeyW"){
//         console.log("character moves up");
//     }
//     else if(event.code == "KeyS"){
//         console.log("character moves down");
//     }
//     else if(event.code == "KeyA"){
//         console.log("character moves left");
//     }
//     else if(event.code == "KeyD"){ 
//         console.log("character moves right");
//     }
// })


//form events
let form = document.querySelector("form");

form.addEventListener("submit",function(event){
        event.preventDefault();
        
        // let name = document.querySelector("#name");
        // let pass = document.querySelector("#pass");

        //or
        let name = this.elements[0];  //here this = form
        let pass = this.elements[1];

        console.log(name.value);
        console.log(pass.value);

        alert(`hi! ${name.value} your password is ${pass.value}`);
    })


    // //change event
// let name = document.querySelector("#name");
// name.addEventListener("change",function(){
//     console.log("change event");
// })

// //input event
// name.addEventListener("input",function(){
//     console.log("input event");
// })

let inp = document.querySelector("#name");
let p = document.querySelector("p");

inp.addEventListener("input", function(){
    console.log(inp.value);
    p.innerText = inp.value;
})


    