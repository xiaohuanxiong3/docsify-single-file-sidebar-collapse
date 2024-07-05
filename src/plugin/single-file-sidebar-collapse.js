import './collapse.css'

const singleFileSidebarCollapse = () => (hook,vm) =>

    hook.doneEach(function (html, next) {
        rewriteHtmlRecursively(document.querySelector(".sidebar-nav"),1)
        next(html)
    })


function rewriteHtmlRecursively(element,depth) {
    element.querySelectorAll("ul").forEach(function (ul) {
        ul.querySelectorAll("li").forEach(function (li) {
            var nextElement = li.nextElementSibling;

            // 当前<li>标签的下一个子标签是<ul>标签
            if (nextElement && nextElement.tagName.toLowerCase() === "ul") {
                // 将<ul>标签修改为<li>标签的子标签
                li.appendChild(nextElement);

                // 递归调用
                rewriteHtmlRecursively(li,depth + 1);

                // 给 <a> 标签添加点击函数，<ul> 标签添加标签折叠属性
                var a = li.querySelector("a");
                // 此时nextElement的深度为 depth + 1
                if (depth + 1 > 1) {
                    // 初始化时显示 1 级标签
                    nextElement.classList.add("collapse-label");
                }
                a.addEventListener("click", function (e) {
                    // 目前只有点击前a标签对应的li标签是active，即重复点击时，才会进行展开和折叠操作
                    if (e.target.parentElement.classList.contains("active")) {
                        var nextUlLabel = e.target.nextElementSibling;
                        if (nextUlLabel.style.display === "block") {
                            nextUlLabel.style.display = "none";
                        } else {
                            nextUlLabel.style.display = "block";
                        }
                    }
                });
            }
        });
    })
}

export {singleFileSidebarCollapse};