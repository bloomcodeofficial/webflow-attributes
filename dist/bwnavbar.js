"use strict";(()=>{var s=window.scrollY,e=document.querySelector('[bw-navbar="component"]');window.addEventListener("scroll",()=>{window.scrollY>200?e.classList.add("is-fixed"):e.classList.remove("is-fixed"),window.scrollY<s&&window.scrollY>200?e.classList.add("is-active"):e.classList.remove("is-active"),s=window.scrollY});var l=document.querySelector('[bw-navbar="toggle-dropdown1"]'),t=document.querySelector('[bw-navbar="dropdown1"]');l.addEventListener("click",()=>{t.classList.toggle("is-active"),t.classList.contains("is-active")?document.body.style.overflow="hidden":(window.innerWidth<991&&(document.body.style.overflow="hidden"),document.body.style.overflow="auto")});var o=document.querySelector('[bw-navbar="mobile-toggle"]'),i=document.querySelector('[bw-navbar="menu"]');o.addEventListener("click",()=>{o==null||o.classList.toggle("is-active"),i.classList.toggle("is-active"),i.classList.contains("is-active")&&window.innerWidth<991?document.body.style.overflow="hidden":document.body.style.overflow="auto"});})();
