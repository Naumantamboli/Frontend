let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("resolved after 2 seconds");
        resolve(56);
    }, 2000);
})

p1.then((value) => {
    console.log(value);
    return new Promise((resolve, reject) => {
        resolve("promise 2 is resolved");
}).then((value) => {
    console.log(value);

    })
})