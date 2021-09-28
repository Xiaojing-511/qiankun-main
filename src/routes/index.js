/*
 * @Author: your name
 * @Date: 2021-09-22 13:27:24
 * @LastEditTime: 2021-09-22 16:33:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /qiankun-main/src/routes/index.js
 */
import Home from '../views/Home.vue'
const routes = [
    {
      /**
       * path: 路径为 / 时触发该路由规则
       * name: 路由的 name 为 Home
       * component: 触发路由时加载 `Home` 组件
       */
      path: "/",
      name: "Home",
      component: Home,
    },
   
  ];
  
  export default routes;