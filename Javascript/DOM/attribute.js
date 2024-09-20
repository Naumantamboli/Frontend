//1)Attributes

// let div = document.querySelector("div")
// let id = div.getAttribute("id");
// console.log(id);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));

//2)style

// let div = document.querySelector("div");
// div.style.backgroundColor = "yellow"
// div.style.fontSize = "30px"
// div.style.visibility = "1"

//3)inserting

let newButton = document.createElement("button");
newButton.innerText = "click me";
console.log(newButton);

let div = document.querySelector("div");
// div.append(newButton);
// div.prepend(newButton);
// div.before(newButton);
// div.after(newButton);

// let para = document.querySelector("p");
// para.after(newButton);

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>hi i am nauman</i>";

div.before(newHeading);

//4)deleting

let para = document.querySelector("p");
para.remove();   
newHeading.remove();