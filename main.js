(()=>{"use strict";let t=(()=>{let t=[],e=(t,e,o,r)=>({title:t,description:e,dueDate:o,priority:r,status:0}),o=t=>({property:t,todos:[]});return t.push(o("default")),{add_project:e=>{t.push(o(e))},add_todo:(o,r,s,p,d)=>{for(let l=0;l<t.length;l++)t[l].property==o&&t[l].todos.push(e(r,s,p,d))},get_project:e=>{for(let o=0;o<t.length;o++)if(t[o].property==e)return t[o].todos},get_projList:()=>{let e=[];for(let o=0;o<t.length;o++)e.push(t[o].property);return e},save:()=>{localStorage.setItem("projects",JSON.stringify(t))},load:()=>{let t=JSON.parse(localStorage.getItem("projects"));console.log(t)}}})();t.add_project("second"),t.add_todo("second",234,324,234,543),t.get_project("second"),t.get_projList(),t.load()})();