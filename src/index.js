import {handler} from "./todo"; 
import {domhandler} from "./domhandler";



handler.add_project("second" );
handler.add_todo("second",234,324,234,543);
handler.get_project("second");
handler.get_projList();
//handler.save();
handler.load();


domhandler.draw_project(handler.get_projList());