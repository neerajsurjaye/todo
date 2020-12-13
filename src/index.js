import {handler} from "./todo"; 
import {domhandler} from "./domhandler";



handler.add_project("second" );
//temp
handler.add_todo("second","list",324,234,0);
handler.add_todo("second","asdf",324,234,0);
handler.add_todo("second","asdfsda",324,234,2);

handler.get_todos("second");
handler.get_projList();
//handler.save();
handler.load();


domhandler.draw_project(handler.get_projList());

domhandler.draw_todos(handler.get_todos("second"));