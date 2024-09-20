const url = "https://icanhazdadjoke.com/api";

// let btn = document.querySelector("button");
// let h1 = document.querySelector("h1");

// btn.addEventListener("click",()=>{
//     let ans = getJokes();
//     h1.innerText = ans;
// })

async function getJokes() {
    try {
        const config = {Headers: { Accept: "application/json" }};
        let res = await axios.get(url, config);
        console.log(res.data);
    } catch (err) {
        console.log(err);
        return "Oops! Something went wrong.";
    }
}