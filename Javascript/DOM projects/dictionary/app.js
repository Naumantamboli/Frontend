const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

let btn = document.querySelector('#btn');
let result = document.querySelector('#result');

async function getData() {
    try {
        let inpWord = document.querySelector('#input').value;
        let response = await fetch(`${url}${inpWord}`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        let data = await response.json();
        console.log(data);
        result.innerHTML =
        `<div id="word">
            <h3>${inpWord}</h3>
            <button><i class="fa-solid fa-volume-off"></i></button>
        </div>
        <div id="details">
            <p>pos</p>
            <p>/Nauman/</p>
        </div>
    
        <div id="info">
            <p>${data[0].meanings[0].definitions[0].definition}</p>
        </div>
        <div id="example">
            <p>${data[0].meanings[1].definitions[0].definition}</p>
        </div>`;
    } catch (error) {
        console.error('Error:', error.message);
        result.innerHTML = `<h3 class= "error" >Invalid Word</h3>`;
    }
}

btn.addEventListener("click", (e) => {
    getData();
});
