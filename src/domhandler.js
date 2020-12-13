let domhandler = (()=>{
    
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

    return {draw_project};
})();   

export {domhandler};