let form  = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if (isNaN(height) || height <= 0) {
        result.textContent = "Give a valid height: " + height;
    } else if (isNaN(weight) || weight <= 0) {
        result.textContent = "Give a valid weight: " + weight;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = "<span>" + bmi + "</span>"; // You can also use template literals here like: `"<span>${bmi}</span>"`
    }
});
