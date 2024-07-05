const singleFileSidebarCollapse = () => (hook,vm) => {

    hook.doneEach(function (html, next) {
        rewriteHtmlRecursively(document.querySelector(".sidebar-nav"))
        next(html)
    })

}

function rewriteHtmlRecursively(element) {
    element.querySelectorAll("ul").forEach(function (ul) {
        ul.querySelectorAll("li").forEach(function (li) {
            var nextElement = li.nextElementSibling;

            // 当前<li>标签的下一个子标签是<ul>标签
            if (nextElement && nextElement.tagName.toLowerCase() === "ul") {
                // 将<ul>标签修改为<li>标签的子标签
                li.appendChild(nextElement);
            }

            rewriteHtmlRecursively(li);
        })
    })
}