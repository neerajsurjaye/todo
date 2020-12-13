import {handler} from "./todo"; 
import {domhandler} from "./domhandler";



handler.add_project("second" );
//temp
handler.add_todo("second",234,324,234,543);
handler.add_todo("second",234,324,234,543);
handler.add_todo("second",234,324,234,543);

handler.get_todos("second");
handler.get_projList();
//handler.save();
handler.load();


domhandler.draw_project(handler.get_projList());

domhandler.draw_todos(handler.get_todos("second"));