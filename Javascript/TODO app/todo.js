let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ol = document.querySelector("ol");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;
    ol.appendChild(item);
    inp.value = "";

    let delBtn = document.createElement("button");
    delBtn.innerText = "\u00D7";

    delBtn.style.height = "50px";
    delBtn.style.position = "absolute";
    // You can add positioning properties as needed
    // delBtn.style.top = "0";
    delBtn.style.right = "55px";
    delBtn.style.height = "30px";
    delBtn.style.width = "30px";

    delBtn.addEventListener("click",function(event){
        console.log(event.target);
        ol.removeChild(item)
    })

    item.appendChild(delBtn);
});
