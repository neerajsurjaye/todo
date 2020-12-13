let handler = (()=>{
    let projects = [];

    //creates todo object
    let todo = (iTitle ,iDesc ,  iDate , iPrior )=>{
        let title = iTitle;
        let description = iDesc;
        let dueDate = iDate;
        let priority = iPrior;
        let status = 0;
    
    
        return {title , description , dueDate , priority , status};
    }

    //creates propery names or group
    let property_pair = (property_name)=>{
        let property = property_name;
        let todos = [];

        return {property , todos};
    }

    //creates default property
    projects.push(property_pair("default"));

    //add properties
    let add_project = (proj_title) => {
        projects.push(property_pair(proj_title));
    };

    
    //addes a todo to a project
    let add_todo = (project_name , iTitle ,iDesc ,  iDate , iPrior)=>{
        for(let i = 0 ;  i < projects.length ; i++){
            //console.log(projects[i].property);
            if(projects[i].property == project_name){
                projects[i].todos.push(todo(iTitle ,iDesc ,  iDate , iPrior));
            }
        }
    }

    //return todos of a project 
    let get_todos = (project_name)=>{
        for(let i = 0 ;  i < projects.length ; i++){
            if(projects[i].property == project_name){
                return projects[i].todos;
            }
        }
    }


    //returns project list 
    let get_projList = ()=>{
        let proj_list = [];
        for(let i = 0 ; i < projects.length ; i++){
            proj_list.push(projects[i].property);
        }
        return proj_list;
    }

    let save = ()=>{
        localStorage.setItem("projects" , JSON.stringify(projects));
    }

    let load = ()=>{
        let newObj = JSON.parse(localStorage.getItem("projects"));
        console.log(newObj);
    }
    

    return {add_project , add_todo , get_todos , get_projList , save , load};
})();

export {handler};