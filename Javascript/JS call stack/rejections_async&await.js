function async() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10 + 1);
            if (num > 5) {
                console.log(num);
                 resolve("number greater than 5");
            }
            else if (num == 5) {
                console.log(num);
                 reject("number is equal to 5");
            }
            else {
                console.log(num);
                 reject("number less than 5");
            }
        }, 500);
    })
}

// let ans = async();

async function abcd(){
    //handling rejections
    try{
        await async();
        await async();
        await async();
        await async();
    }
    catch(err){
        console.log("error caught");
        console.log(err);
    }
    console.log("last line executed");
}

// ans
//     .then(function (value) {
//         console.log("resolved");
//         console.log(value);
//     })
//     .catch(function (value) {
//         console.log("rejected");
//         console.log(value);
//     })