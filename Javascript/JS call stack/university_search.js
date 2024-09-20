let url = "http://universities.hipolabs.com/search?name="

let btn = document.querySelector("button")

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value
    let colArr = await getData(country)
    show(colArr)
})

async function getData(country) {
    try {
        let res = await axios.get(url+country)
        return res.data
    } catch (err) {
        console.log(err)
    }
}

function show(colArr) {
    let list = document.querySelector("#list")
    list.innerText = ""
    for (ele of colArr) {
        let li = document.createElement("li")
        li.innerText = ele.name
        list.appendChild(li)
    }
}