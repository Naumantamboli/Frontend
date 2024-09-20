
function avg(a,b,c){
    let avg = (a+b+c)/3;
    console.log(avg);
}

function table(a){
    for(let i=1 ;i<=10 ;i++){
        console.log(i*a);
    }
}

// avg(1,4,8);
// avg(5,30,20);

let num = prompt("Enter any number");
table(num);