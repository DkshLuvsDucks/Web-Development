let todo = [];

let req = prompt("please enter your request");

while(true){
    if(req=="quit"){
        console.log("quiting the app...");
        break;
    }

    if(req=="list"){
        console.log("------------------");
        for(let i=0; i<todo.length; i++){
            console.log(`${i+1}.) ${todo[i]}`);
        }
        console.log("------------------");
    }

    else if (req=="add"){
        let new_task = prompt("please enter the new task");
        todo.push(new_task);
        console.log("task added successfully...");
    }

    else if(req=="delete"){
        let num = prompt("enter task number to delete");
        num = parseInt(num);
        if(num>todo.length){
            console.log(`invalid number [${num}]... task doesnt exist!`);
        } else {
            todo.splice(num - 1,1);
            console.log("task deleted....")
        }
    }

    else {
        console.log("enter a valid request!");
    }

    req = prompt("please enter your request");
}
