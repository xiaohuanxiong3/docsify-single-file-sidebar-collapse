const u = () => (l, i) => l.doneEach(function(o, e) {
  a(document.querySelector(".sidebar-nav"), 1), e(o);
});
function a(l, i) {
  l.querySelectorAll("ul").forEach(function(o) {
    o.querySelectorAll("li").forEach(function(e) {
      var t = e.nextElementSibling;
      if (t && t.tagName.toLowerCase() === "ul") {
        e.appendChild(t), a(e, i + 1);
        var r = e.querySelector("a");
        i + 1 > 1 && t.classList.add("collapse-label"), r.addEventListener("click", function(s) {
          if (s.target.parentElement.classList.contains("active")) {
            var c = s.target.nextElementSibling;
            c.style.display === "block" ? c.style.display = "none" : c.style.display = "block";
          }
        });
      }
    });
  });
}
const n = window.$docsify || {};
n.editOnGitPlugin, n.customFooterPlugin;
n.plugins = [].concat(
  n.plugins || [],
  u()
);
