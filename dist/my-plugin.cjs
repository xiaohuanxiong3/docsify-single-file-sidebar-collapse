(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".collapse-label{display:none;margin-left:20px}")),document.head.appendChild(e)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();
"use strict";const d=()=>(n,s)=>n.doneEach(function(a,e){c(document.querySelector(".sidebar-nav"),1),e(a)});function c(n,s){n.querySelectorAll("ul").forEach(function(a){a.querySelectorAll("li").forEach(function(e){var t=e.nextElementSibling;if(t&&t.tagName.toLowerCase()==="ul"){e.appendChild(t),c(e,s+1);var r=e.querySelector("a");s+1>1&&t.classList.add("collapse-label"),r.addEventListener("click",function(o){var u=o.target.parentElement,l=o.target.nextElementSibling;l&&(u.classList.contains("active")?l.style.display==="block"?l.style.display="none":l.style.display="block":l.style.display!=="block"&&(l.style.display="block"))})}})})}const i=window.$docsify||{};i.editOnGitPlugin,i.customFooterPlugin;i.plugins=[].concat(i.plugins||[],d());
