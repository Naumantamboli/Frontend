// const reqUrl = "https://api.github.com/users/hiteshchoudhary";
// const xhr = new XMLHttpRequest();

// xhr.open('GET', reqUrl);
// xhr.send(); // This line initiates the request

// xhr.onreadystatechange = function(){
//     console.log(xhr.readyState);
//     if(xhr.readyState === 4){
//         const data = JSON.parse(this.responseText);
//         console.log(data);
//     }
// };

// const photo = "https://avatars.githubusercontent.com/u/11613311?v=4";
// const xhr2 = new XMLHttpRequest();
// xhr2.open('GET',photo);
// xhr2.send();

const reqUrl = "https://api.github.com/users/hiteshchoudhary";
const xhr = new XMLHttpRequest();

xhr.open('GET', reqUrl);
xhr.send(); // This line initiates the request

xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if(xhr.readyState === 4){
        const data = JSON.parse(this.responseText);
        console.log(data);
    }
};

const photoUrl = "https://avatars.githubusercontent.com/u/11613311?v=4";
const xhr2 = new XMLHttpRequest();
xhr2.open('GET', photoUrl);
xhr2.responseType = 'blob'; // Set the responseType to 'blob' to handle binary data
xhr2.send();

xhr2.onreadystatechange = function(){
    if(xhr2.readyState === 4){
        if(xhr2.status === 200){ // Check if the request was successful
            const blob = xhr2.response;
            const imgUrl = URL.createObjectURL(blob); // Create a URL for the blob
            const img = new Image();
            img.src = imgUrl;
            // document.body.appendChild(img); // Append the image to the document body
            const imgElement = document.querySelector('.box img');
            imgElement.src = imgUrl            
        } else {
            console.error('Error fetching photo:', xhr2.statusText);
        }
    }
};
