import {handler} from "./todo"; 
import {domhandler} from "./domhandler";


let main = (()=>{
    let current_project = "default";

    

    let init_storage = ()=>{

        if("projects" in localStorage){
            handler.load();
            domhandler.init();
            handler.init();
            domhandler.draw_project(handler.get_projList());

            domhandler.draw_todos(handler.get_todos("default"));

        }
        else{
            handler.add_project("second" );

//temp
            handler.add_todo("second","list",324,234,0);
            handler.add_todo("second","asdf",324,234,0);
            handler.add_todo("second","asdfsda",324,234,2);

            handler.add_todo("default","projectA","Desc","33/44/44",0);
            handler.add_todo("default","projectB","Desc",234,0);


            handler.get_todos("second");
            handler.get_projList();
            handler.load();

            domhandler.init();
            domhandler.draw_project(handler.get_projList());

            domhandler.draw_todos(handler.get_todos("default"));
            handler.save();

        }
    }


    let init = ()=>{
        init_storage();
    };

    let clear_storage = ()=>{

    }


    return {init}
})();

main.init();

//