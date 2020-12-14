
import {handler} from "./todo"; 



let domhandler = (()=>{
    

    //draws side project list
    let draw_project = (proj_list)=>{
        let project_list = document.getElementById("project-list");
        console.log("draw proj" , proj_list);
        let project_arr = [];

        for(var i = 0 ; i < proj_list.length ; i++){
            project_arr.push(document.createElement("div"));
            project_arr[i].classList.add("project-element");
            project_arr[i].textContent = proj_list[i];
            project_list.appendChild(project_arr[i]);
        }

    }

    let remove_project = ()=>{
        let project_list = document.getElementById("project-list");
        project_list.innerHTML = "";
    }

    //draws todo
    let draw_todos = (list_todo)=>{
        let todos = document.getElementById("todos");
        let todos_arr = [];
       

        for(var i = 0 ; i < list_todo.length ; i++){
            todos_arr.push(todo_card(list_todo[i]));
            //console.log(todos_arr[i]);
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

    //displays form
    let display_form = (e)=>{
        let form_projects = document.getElementById("projects-add");
        let form_todo = document.getElementById("todo-add");
    
        if(e.target.id == "add-projects"){
            form_projects.style.display = "flex";
        }

        else if(e.target.id == "add-todo"){
            form_todo.style.display = "flex";
        }
    }

    //initializes add buttons
    let init_add = ()=>{
        let projects_add = document.getElementById("add-projects");
        let todo_add = document.getElementById("add-todo");

        projects_add.addEventListener("click" , display_form);
        todo_add.addEventListener("click" , display_form);
    }

    let close_form = (e)=>{
        e.target.parentElement.parentElement.style.display = "none";
    }

    //initializes close buttons
    let init_close = ()=>{
        let close_button = document.getElementsByClassName("close");
        for(var i = 0 ; i < close_button.length ; i++){
            close_button[i].addEventListener("click" , close_form);
        }
    }
    //handles project submit
    let submit_project = ()=>{
        let form_submit = document.getElementById("submit-projects");
        
        form_submit.addEventListener("click" , event_sub_project);
    }

    let event_sub_project = ()=>{      
        let input_project = document.getElementById("input-project");
        
        handler.add_project(input_project.value);
        
        remove_project();
        draw_project(handler.get_projList());
        input_project.parentElement.parentElement.style.display = "none";
    }




    //initializes
    let init = ()=>{
        init_add();
        init_close();
        submit_project();
       
    }

    return {draw_project , draw_todos , init};
})();   

export {domhandler};