let container = document.querySelector('#container')

const start = document.querySelector('#start')
const stop = document.querySelector('#stop')

let generateColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i=0 ;i<6 ;i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    console.log(color)
    return color
}

let id;
let startChangingColor = function(){
    id = setInterval(changeBgColor,1000)

    function changeBgColor(){
        document.body.style.backgroundColor = generateColor();
    }
}

let stopChangingColor = function(){
    clearInterval(id)
}

start.addEventListener("click",startChangingColor)
stop.addEventListener("click",stopChangingColor)