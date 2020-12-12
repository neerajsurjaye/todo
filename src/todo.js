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
        let todos = {};

        return {property , todos};
    }

    //creates default property
    projects.push(property_pair("default"));

    //add properties
    let add_project = (proj_title) => {
        projects.push(property_pair(proj_title));
    };

    
    //addes a todo to a property
    let add_todo = (project_name , iTitle ,iDesc ,  iDate , iPrior)=>{
        for(let i = 0 ;  i < projects.length ; i++){
            //console.log(projects[i].property);
            if(projects[i].property == project_name){
                console.log(projects[i].property);
            }
        }
    }
    

    return {add_project , add_todo};
})();

export {handler};