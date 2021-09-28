<!--
 * @Author: your name
 * @Date: 2021-09-22 13:20:52
 * @LastEditTime: 2021-09-27 15:02:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /qiankun-main/src/App.vue
-->
<template>
  <a-config-provider>
    <section id="main-app">
      <section class="menu-wrapper">
        <a-menu 
          style="width: 256px"
          mode="inline"
          theme="dark"
          :selectedKeys="[selectKey]"
        >
          <a-menu-item v-for="item in menus" :key="item.key" @click="menuClick(item)">
            <router-link :to="{path: item.path }">
              {{item.title}}
            </router-link>
          </a-menu-item>
        </a-menu>
      </section>
      <section class="frame-wrapper">
        <!-- 主应用渲染区。在触发主应用路由规则时（由路由配置表的 $route.name 判断），将渲染主应用的组件 -->
        <router-view v-show="$route.name"></router-view>
        <!-- 微应用渲染区。在未触发主应用路由规则时（由路由配置表的 $route.name 判断），将渲染微应用节点； -->
        <section v-show="!$route.name" id="frame"></section>
        <!-- 我们使用了在路由表配置的 name 字段进行判断，判断当前路由是否为主应用路由，最后决定渲染主应用组件或是微应用节点。 -->
        <!-- 我们主应用的组件和微应用是显示在同一片内容区域，根据路由规则决定渲染规则。 -->

      </section>
    </section>
  </a-config-provider>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      menus:[
        {
          key: "Home",
          title: "主页",
          path: "/",
        },
         // 对应微应用
        {
          key: "VueMicroApp",
          title: "Vue 主页",
          path: "/vue",
        },
        {
          key: "VueMicroAppList",
          title: "Vue 列表页",
          path: "/vue/list",
        },
        {
          key: "ReactMicroApp",
          title: "React",
          path: "/react",
        },
      ],
      selectKey: 'Home'
    }
  },
  watch:{
    '$route.name'(){
      console.log('$route.name', this.$route);
    }
  },
  methods:{
    menuClick(item){
      this.selectKey = item.key;
    }
  }
}
</script>

<style>
#main-app {
  display: flex;
}
.frame-wrapper{
  padding: 20px;
}
</style>
