let todo = [];

let req = prompt("please enter your request");
// console.log(req);

while(true){
    if(req=="quit"){
        console.log("quitting app");
        break;
    }

    if(req=="list"){
        console.log("--------");
        for(let i=0 ; i<=todo.length ;i++){
            console.log(i, todo[i]);
        }
        console.log("--------");
    }

    else if(req == "add"){
        let task =prompt("enter the task you want to add");
        todo.push(task);
        console.log("task added");
    }

    else if(req == "delete"){
        let index =prompt("enter the index of task you want to delete");
        todo.splice(index,1);
        console.log("task deleted");
    }
    else{
        console.log("invalid request");
    }
    req = prompt("please enter your request");
}