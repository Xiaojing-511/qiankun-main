/*
 * @Author: your name
 * @Date: 2021-09-22 15:10:19
 * @LastEditTime: 2021-09-27 15:28:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /qiankun-main/src/micro/apps.ts
 */
import {
  registerMicroApps,
  addGlobalUncaughtErrorHandler,
  start,
} from "qiankun";
import NProgress from "nprogress"; //加载进度条
import "nprogress/nprogress.css";
import { message } from "ant-design-vue";
// 注册微应用 - 注册信息在 apps 数组中
const apps = [
    /**
   * name: 微应用名称 - 具有唯一性
   * entry: 微应用入口 - 通过该地址加载微应用
   * container: 微应用挂载节点 - 微应用加载完成后将挂载在该节点上
   * activeRule: 微应用触发的路由规则 - 触发路由规则后将加载该微应用
   */
  {
    name: "VueMicroApp",
    entry: "//localhost:8082",
    container: "#frame",
    activeRule: "/vue", // 进入 /vue 路由时将加载我们的 Vue 微应用。
  },
  {
    name: "ReactMicroApp",
    entry: "//localhost:3000",
    container: "#frame",
    activeRule: "/react", // 进入 /react 路由时将加载我们的 React 微应用。
  },
];
registerMicroApps(apps,
  {
  // qiankun 生命周期钩子 - 微应用加载前
  beforeLoad: (app: any) => {
    // 加载微应用前，加载进度条
    NProgress.start();
    console.log("---------------before load", app.name);
    return Promise.resolve();
  },
  // qiankun 生命周期钩子 - 微应用挂载后
  afterMount: (app: any) => {
    // 加载微应用前，进度条加载完成
    NProgress.done()
    console.log("------------after mount", app.name);
    return Promise.resolve();
  },
}
)
/**
 * 添加全局的未捕获异常处理器
 */
addGlobalUncaughtErrorHandler((event: Event | string) => {
  console.error(event);
  const { message: msg } = event as any;
  // 加载失败时提示
  if (msg && msg.includes("died in status LOADING_SOURCE_CODE")) {
    message.error("微应用加载失败，请检查应用是否可运行");
  }
});

// 我们的微应用注册信息在 apps 数组中
// 然后使用 qiankun 的 registerMicroApps 方法注册微应用，最后导出了 start 函数，注册微应用的工作就完成了

// 导出 qiankun 的启动函数
export default start;
