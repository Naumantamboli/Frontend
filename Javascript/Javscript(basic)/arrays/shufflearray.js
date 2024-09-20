function shuffle(arr) {
    let area = arr.length;
    while (area > 0) {
        area--;
        let indexExchanged = Math.floor(Math.random() * area);
        let temp = arr[indexExchanged];
        arr[indexExchanged] = arr[area];
        arr[area] = temp;
    }
    console.log(arr);
}


let arr = [1, 2, 3, 4, 5, 6, 7];
shuffle(arr);