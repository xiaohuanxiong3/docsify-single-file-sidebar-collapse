// import { editOnGitPlugin, customFooterPlugin } from "./my-plugin";
import {singleFileSidebarCollapse} from "./single-file-sidebar-collapse.js";

const docsify = window.$docsify || {};

const props =
  {
    editOnGitPlugin: docsify.editOnGitPlugin,
    customFooterPlugin: docsify.customFooterPlugin,
  } || {};

// docsify.plugins = [].concat(
//   docsify.plugins || [],
//   editOnGitPlugin(props.editOnGitPlugin),
//   customFooterPlugin(props.customFooterPlugin)
// );

docsify.plugins = [].concat(
  docsify.plugins || [],
  singleFileSidebarCollapse()
);
