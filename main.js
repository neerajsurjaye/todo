(()=>{"use strict";let o=(()=>{let o=[],t=o=>({property:o,todos:{}});return o.push(t("default")),{add_project:e=>{o.push(t(e))},add_todo:(t,e,d,r,p)=>{for(let e=0;e<o.length;e++)o[e].property==t&&console.log(o[e].property)}}})();o.add_project("second",234,324,234,543),o.add_todo("second")})();