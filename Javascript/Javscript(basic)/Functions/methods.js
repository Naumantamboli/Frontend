//functions that are defined in an object are called as methods

const calculator = {
    num : 55,
    add : function(a,b){
        return a+b;    
    },
    sub : function(a,b){
        return a-b;    
    },
    mul : function(a,b){
        return a*b;    
    },
};

//we can also write this as
const calc = {
    num : 55,
    add(a,b){
        return a+b;    
    },
    sub(a,b){
        return a-b;    
    },
    mul(a,b){
        return a*b;    
    },
};
