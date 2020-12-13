let domhandler = (()=>{
    

    //draws side project list
    let draw_project = (proj_list)=>{
        let project_list = document.getElementById("project-list");
        console.log(proj_list);
        let project_arr = [];

        for(var i = 0 ; i < proj_list.length ; i++){
            project_arr.push(document.createElement("div"));
            project_arr[i].classList.add("project-element");
            project_arr[i].textContent = proj_list[i];
            project_list.appendChild(project_arr[i]);
        }

    }

    //draws todo
    let draw_todos = (list_todo)=>{
        let todos = document.getElementById("todos");
        let todos_arr = [];
        console.log("list todo" , list_todo);

        for(var i = 0 ; i < list_todo.length ; i++){
            todos_arr.push(todo_card(list_todo[i]));
            console.log(todos_arr[i]);
            todos.appendChild(todos_arr[i]);
        }
    }


    //makes a todo card
    let todo_card = (todo)=>{
        let element = document.createElement("div");
        element.classList.add("cls-todo");

        let title = document.createElement("div");
        title.textContent = todo.title;
        title.classList.add("title")
        element.appendChild(title);

        let desc = document.createElement("div");
        desc.textContent = todo.description;
        element.appendChild(desc);
        desc.classList.add("desc");

        let due_date = document.createElement("div");
        due_date.textContent = todo.dueDate;
        element.appendChild(due_date);
        due_date.classList.add("due-date")

        let priority = document.createElement("div");

        if(todo.priority == 3){
            priority.style.backgroundColor = "red";
        }else if(todo.priority == 2){
            priority.style.backgroundColor = "yellow";
        }else{
            priority.style.backgroundColor = "green";
        }
        
        element.appendChild(priority);
        priority.classList.add("priority");

        let status = document.createElement("div");
        status.classList.add("curr-status");
        status.textContent = todo.status;
        element.appendChild(status);

        return element;
    }

    return {draw_project , draw_todos};
})();   

export {domhandler};