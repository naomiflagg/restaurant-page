(()=>{"use strict";const e=(e,t="#content",s,i,o)=>{let a=document.querySelector(t),c=document.createElement(e);return s&&(c.textContent=s),i&&c.setAttribute(i,o),a.appendChild(c),c},t=()=>{e("div",void 0,void 0,"class","text"),e("p",".text","Welcome to Flagg's Favorite Foods."),e("p",".text","The selection is eclectic, but there's something for everyone!"),e("img",void 0,void 0,"src","https://images.unsplash.com/photo-1502301103665-0b95cc738daf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"),document.querySelector("#content").classList.add("flex")},s=(t,s)=>{let o=`${t}List`;e("ul",`.${t}`,void 0,"class",`${t}List`),i(o,s)},i=(t,s)=>{s.forEach((s=>{e("li",`.${t}`,s)}))};(()=>{const t=document.querySelector("body"),s=document.createElement("header");t.prepend(s),e("h1","header","Flagg's Favorite Foods"),e("nav","header"),e("ul","nav",void 0,"class","nav-list"),["HOME","MENU","CONTACT"].forEach((t=>{e("li",".nav-list",t,"class",t.toLowerCase())}))})(),t();const o=document.querySelector(".home"),a=document.querySelector(".menu"),c=document.querySelector(".contact");function n(e){[o,a,c].forEach((t=>{t!==e||e.classList.contains("light-bg")?t!==e&&t.classList.remove("light-bg"):e.classList.add("light-bg")}))}function r(e){const t=document.querySelector("#content");for(t.classList.remove(...t.classList);t.firstChild;)t.removeChild(t.firstChild)}o.addEventListener("click",(e=>{r(e.target),t(),n(e.target)})),a.addEventListener("click",(t=>{r(t.target),e("h2",void 0,"Menu"),e("h3",void 0,"Appetizers","class","appetizers"),s("appetizers",["Tom Yum soup","Beetroot salad","Prawn crackers","Crab bisque"]),e("h3",void 0,"Mains","class","mains"),s("mains",["Spaghetti carbonara","Tofu and eggplant stirfry","Impossible burger","Pad see ew","Panang curry"]),e("h3",void 0,"Sides","class","sides"),s("sides",["Brussel sprouts","Sweet potato fries","Garlic green beans"]),e("h3",void 0,"Desserts","class","desserts"),s("desserts",["Lemon cheesecake","Blueberry crumble","Slice of Funfetti"]),n(t.target)})),c.addEventListener("click",(t=>{r(t.target),e("h2",void 0,"Contact the owner"),e("h3",void 0,void 0,"class","github"),e("i",".github",void 0,"class","fab").classList.add("fa-github"),e("a",".github","Github","href","https://github.com/naomiflagg/"),e("h3",void 0,void 0,"class","linkedin"),e("i",".linkedin",void 0,"class","fab").classList.add("fa-linkedin-in"),e("a",".linkedin","LinkedIn","href","https://www.linkedin.com/in/naomiflagg/"),document.querySelector("#content").classList.add("contact"),n(t.target)}))})();