// let fruits = ["mango","apple","banana","litchi","orange"];
// fruits.push("pineapple");
// for(let i=fruits.length-1 ;i>=0 ;i--){
//     console.log(i,fruits[i]);
// } 

let heros = [ ["ironman","spiderman","thor"],["superman","wonerwoman","flash"]];
for(let i=0 ;i<heros.length ;i++){
    console.log(`list #${i}`);
    for(let j=0 ;j<=heros[i].length ;j++){
        console.log(heros[i][j]);
    }
}
