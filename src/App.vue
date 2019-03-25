<template>
  <div id="app">
    <img src="./assets/logo.png">
      <el-tabs :tab-position="tabPosition" style="height:200px;">
        <el-tab-pane label="组件一">
          <router-view class="header"></router-view>
        </el-tab-pane>
        <el-tab-pane label="可连通的组件二">
          <router-view  name="home"></router-view>
        </el-tab-pane>
        <el-tab-pane label="点击组件二可以更改的组件三">
          <router-view  name="main"></router-view>
        </el-tab-pane>
      </el-tabs>
    
    
  </div>
  
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      tabPosition:'top'
    }
  }
}
</script>

<style>
  *{
    list-style: none;
    margin:0;
    padding:0;
    text-decoration: none;
    color:#030303;
  }
#app {
 width:1200px;
 text-align: center;
 margin: 0 auto;
}
</style>
