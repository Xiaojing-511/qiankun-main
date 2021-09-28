/*
 * @Author: your name
 * @Date: 2021-09-22 13:20:52
 * @LastEditTime: 2021-09-27 14:20:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /qiankun-main/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import routes from "./routes";
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
// 注册微应用并启动qiankun主应用
import startQiankun from "./micro/apps";
startQiankun();

Vue.config.productionTip = false
Vue.use(Antd)
Vue.use(VueRouter)
// 注册路由实例
const router = new VueRouter({
  mode: "history",
  routes,
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
