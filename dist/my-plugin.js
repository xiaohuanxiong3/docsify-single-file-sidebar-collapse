(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".collapse-label{display:none;margin-left:20px}")),document.head.appendChild(e)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();
const d = () => (i, a) => i.doneEach(function(o, e) {
  c(document.querySelector(".sidebar-nav"), 1), e(o);
});
function c(i, a) {
  i.querySelectorAll("ul").forEach(function(o) {
    o.querySelectorAll("li").forEach(function(e) {
      var t = e.nextElementSibling;
      if (t && t.tagName.toLowerCase() === "ul") {
        e.appendChild(t), c(e, a + 1);
        var r = e.querySelector("a");
        a + 1 > 1 && t.classList.add("collapse-label"), r.addEventListener("click", function(s) {
          var u = s.target.parentElement, l = s.target.nextElementSibling;
          l && (u.classList.contains("active") ? l.style.display === "block" ? l.style.display = "none" : l.style.display = "block" : l.style.display !== "block" && (l.style.display = "block"));
        });
      }
    });
  });
}
const n = window.$docsify || {};
n.editOnGitPlugin, n.customFooterPlugin;
n.plugins = [].concat(
  n.plugins || [],
  d()
);
