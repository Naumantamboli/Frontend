let name ="nauman";

let sum = function(a,b){     //sum is a variable but if we write it as sum() using parethesis it can be used as function
    return a+b;
}

let hello = function(){    // these are nameless functions 
    console.log("hello");
}

hello = function(){  //we can change the value of these variables
    console.log("hi");
}