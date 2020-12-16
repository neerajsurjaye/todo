import { domhandler } from "./domhandler";

let handler = (()=>{
    let projects = [];
    let current_project = "default";

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
        save();
    };

    
    //addes a todo to a project
    let add_todo = (project_name , iTitle ,iDesc ,  iDate , iPrior)=>{
        for(let i = 0 ;  i < projects.length ; i++){
            //s.log(projects[i].property);
            if(projects[i].property == project_name){
                projects[i].todos.push(todo(iTitle ,iDesc ,  iDate , iPrior));
            }
        }
        save();
    }

    //return todos of a project 
    let get_todos = (project_name)=>{
        for(let i = 0 ;  i < projects.length ; i++){
            if(projects[i].property == project_name){
                return projects[i].todos;
            }
        }
    }

    let removeNull = (e)=>{
        if(e != null){
            return e;
        }
    }

    let remove_todo = (loc)=>{
        
        console.log(current_project , projects);   
        for(let i = 0 ; i < projects.length ; i++){  
            
            if(current_project == projects[i].property){               

                projects[i].todos[loc] = null;
                projects[i].todos = projects[i].todos.filter(removeNull);
                //console.log (projects[i].todos);
                return;
            }
        }

        save();

        
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
        projects = newObj;
        console.log(projects);
    }


    let init = ()=>{
        domhandler.change_project(projects);
    }

    let update_current = (e)=>{
        current_project = e;
    }

    let get_current = ()=>{
        return current_project;
    }
   
    
    


    return {add_project , add_todo , get_todos , get_projList , save , load  , projects , current_project , remove_todo , update_current , get_current , init};
})();

export {handler};ve , load  , projects , current_project , remove_todo , update_current , get_current , init};
})();

export {handler};ve , load  , projects , current_project , remove_todo , update_current , get_current , init};
})();

export {handler};