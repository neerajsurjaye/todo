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


    let draw_todos = (list_todo)=>{
        let todos = document.getElementById("todos");
        let todos_arr = [];
        console.log("list todo" , list_todo);

        for(var i = 0 ; i < list_todo.length ; i++){
            todos_arr.push(document.createElement("div"));
            todos_arr[i].classList.add("todo-element");
            todos_arr[i].textContent = list_todo[i].title;
            todos.appendChild(todos_arr[i]);
        }
    }

    return {draw_project , draw_todos   };
})();   

export {domhandler};