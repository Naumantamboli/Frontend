let url = "https://world.openfoodfacts.org/api/v0/product/737628064502.json33"

let btn = document.querySelector("button")

btn.addEventListener("click",async ()=>{
    let ans = await getData()
    console.log(ans)
})

async function getData() {
    try {
        let res = await axios.get(url)
        console.log(res)
    } catch (err) {
        console.log(err)
    }
}
