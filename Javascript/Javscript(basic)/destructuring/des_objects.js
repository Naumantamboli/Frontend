const student = {
    name : "nauman",
    age : 19,
    class : 12,
    subjects : ["hindi","english","math"],
    username : "nauman@123",
    password : "12345"
};

// let username = student.username;
// let password = student.password;

let {username , password} = student; //searching username and password key inside of the object and assigning them the values.

let{class:standard , age:ageofstudent} = student;
//here value of class will be stored in standard.