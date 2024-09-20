let url = "https://catfact.ninja/fact";

fetch(url)
.then((res)=>{
    console.log(res);
    return res.json()
})
.then((data)=>{
    console.log("data1 fact: ",data.fact);
    return fetch(url);
})
.then((res)=>{
    return res.json()
})
.then((data2)=>{
    console.log("data2 fact: ",data2.fact);
})
.catch((err)=>{
    console.log("Error: ",err);
})

console.log("nauman tamboli");