function savetoDb(data, success, failure) {

    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
        success();
    } else {
        failure();
    }
}

savetoDb("nauman",
    () => {
        console.log("success: your data was saved");
        savetoDb("hello world", () => {
            console.log("success2: data was saved");
            savetoDb("tamboli", () => {
                console.log("success3 : data was saved");
            }, () => {
                console.log("failure3: data was not saved");
            })
        }, () => {
            console.log("failure2: data was not saved")
        });
    },
    () => {
        console.log("failure: data not saved");
    })

    
