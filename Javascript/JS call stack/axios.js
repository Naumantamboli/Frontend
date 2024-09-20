let btn = document.querySelector("button");
let p = document.querySelector("p");

btn.addEventListener("click", async ()=>{
    let fact = await getFacts();
    // console.log(fact);
    p.innerText = fact;
})

let url = "https://catfact.ninja/fact";

async function getFacts(){
    try{
    let res = await axios.get(url);
    return res.data.fact;
    }
    catch(err){
        console.log("Error: ",err);
        return "No fact found";
    }
}

let btn2 = document.querySelector("button");
let url2 = "https://dog.ceo/api/breeds/image/random";

btn2.addEventListener("click", async ()=>{
    let link = await getImage();
    let img = document.querySelector("#result");
    img.setAttribute("src",link);
    console.log(link);
})

async function getImage() {
    try{
    let res = await axios.get(url2);
    return res.data.message;
    }
    catch(err){
        console.log("Error: ",err);
        return "No image found";
    }
}

