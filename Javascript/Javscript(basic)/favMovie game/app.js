let ans = prompt("Do you wanna play the game");
if (ans == "yes") {

    let favMovie = "Avatar";
    let guess = prompt("enter your guess");

    while ((guess != favMovie)) {
        if(guess=="quit"){
            console.log("you quit..");
            break;
        }
        guess = prompt("wrong guess, enter your guess again");
    }

    if (guess == favMovie) {
        console.log("Congratulations!, you are right");
    }
}