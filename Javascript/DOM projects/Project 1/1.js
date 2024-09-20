let h5 = document.querySelector("h5")
let addFriend = document.querySelector("#add");

let cheak = 0;
addFriend.addEventListener("click",function(){
    if(cheak==0){
    h5.innerHTML = "Friends";
    h5.style.color = "green";
    addFriend.innerHTML = "Remove Friend";
    addFriend.style.backgroundColor = "red";
    cheak = 1;
    }
    else{
        h5.innerHTML = "Stranger";
        h5.style.color = "red";
        addFriend.innerHTML = "Add Friend";
        addFriend.style.backgroundColor = "green";
        cheak = 0;
    }
})

// let removeFriend = document.querySelector("#remove");

// removeFriend.addEventListener("click",function(){
//     h5.innerHTML = "Stranger";
//     h5.style.color = "red";
// })