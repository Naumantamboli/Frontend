const num = prompt("Enter any number that you want");

const random = Math.floor(Math.random() * num) + 1;
// console.log(random);
let guess = prompt("Guess any number between 1 and the number you entered");

while (true) {
    if(guess=="quit"){
        console.log("You quit...,better luck next time");
        break;
    }

    if (random == guess) {
        console.log("Congratulations!!, right guess random number was",random);
        break;
    }
    else if(guess < random){
        guess = prompt("hint :your guess was too small, try again");
    }
    else{
        guess = prompt("hint :your guess was too large, try again");
    }
}

Math.floor(Math.random()*10)+1;

