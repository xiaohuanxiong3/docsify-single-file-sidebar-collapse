const u = (n = { repoUrl }) => (i, e) => i.beforeEach((t) => "[📝 Edit on Github](" + (n.repoUrl + e.route.file) + `)
` + t), c = (n = { title, link }) => (i) => i.afterEach((e) => {
  let t = [
    "<hr/>",
    "<footer>",
    `<span>${n.title}</span>`,
    `<span><a href="${n.link}" target="_blank">✨</a></span>`,
    "</footer>"
  ].join("");
  return e + t;
}), a = () => (n, i) => n.doneEach(function(e, t) {
  r(document.querySelector(".sidebar-nav")), t(e);
});
function r(n) {
  n.querySelectorAll("ul").forEach(function(i) {
    i.querySelectorAll("li").forEach(function(e) {
      var t = e.nextElementSibling;
      t && t.tagName.toLowerCase() === "ul" && e.appendChild(t), r(e);
    });
  });
}
const o = window.$docsify || {}, l = {
  editOnGitPlugin: o.editOnGitPlugin,
  customFooterPlugin: o.customFooterPlugin
};
o.plugins = [].concat(
  o.plugins || [],
  u(l.editOnGitPlugin),
  c(l.customFooterPlugin)
);
o.plugins = [].concat(
  o.plugins || [],
  a()
);
