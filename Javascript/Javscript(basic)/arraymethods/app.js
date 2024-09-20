let cars = ["audi","bmw","lambo","toyota"];
let fruits = ["mango","apple","papaya","banana"];

cars.includes("audi");  //tells if it is present or not (true/false)
cars.indexOf("bmw");

//push/pop/shift/unshift
cars.push("mercedes");
cars.pop();
cars.unshift("maruti");
cars.unshift("mahindra");
cars.unshift("honda");
cars.shift();

//concatenation
let mix = cars.concat(fruits);
 
//reverse
 cars.reverse();  //changes the orignal array of cars

 //slice
//  let sliced= cars.slice=(1,3);

 //splice
 cars.splice(2);

 //sort
 fruits.sort();
//(number wale array ko sort nahi kar pata kyuki woh pahale number ko character mai convert karta hai then sort karta hai)