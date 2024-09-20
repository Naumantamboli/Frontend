// 1)for loop
// for(let i=1 ;i<=15 ;i+2){
//     console.log(i);
// }

// for(let i=1 ;i>=0 ;i++){
//     console.log(i);
// }

//2)while loop
// let i=0;
// while( i<=20){
//     console.log(i);
//     i++;
// }

//3)for of loop
let fruits= ["mango","apple","banana","litchi","pineapple","grapes"];
for(fruit of fruits){
    console.log(fruit);
}
for(char of "naumantamboli"){
    console.log(char);
}

//nested for of loop
let heros = [["superman","batman","wonder woman"],["spiderman","ironman","thor"]];

for(list of heros){
    for(hero of list){
        console.log(hero);
    }
}