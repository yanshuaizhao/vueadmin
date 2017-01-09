<template>
    <div id="app">
        <div class="app_header">
            <layout-header></layout-header>
        </div>
        <div class="app_content">
            <div class="app_nav">
                <side-nav></side-nav>
            </div>
            <div class="app_right">
                <div class="breadcrumb">
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item>{{pathName}}</el-breadcrumb-item>

                    </el-breadcrumb>
                </div>
                <router-view></router-view>
            </div>
        </div>

    </div>
</template>

<script>
import LayoutHeader from './header.vue'
import SideNav from './sidenav.vue'
import Nothing from './nothing.vue'

export default {
  name: 'app',
  data () {
    return {
      pathName: this.$route.name,
    }
  },
  components:{
    LayoutHeader,
    SideNav,
    Nothing
  },
  watch: {
    '$route': function(){
      this.pathName = this.$route.name
    }
  }
}
</script>

<style>
    html, body{
        height: 100%;
        margin: 0;
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    }
  #app{
    height: 100%;
    margin: 0;
    display: flex;
    flex-flow: column;
  }
  .app_header{
    position: relative;
    flex: 0 0 auto;
    z-index: 2;

  }
  .app_header .title{
    margin-left: 16px;
    color: #fff;
  }
  .app_content{
    flex: 1;
    display: flex;
    flex-flow: row;
  }
  .app_nav{
    position: relative;
    flex: 0 0 280px;
    background: #EFF2F7;
  }
  .app_right{
    flex: 1;
    overflow: auto;
    padding: 20px;

  }
  .breadcrumb{
    padding-bottom: 20px;
    border-bottom: 1px solid #ddd;
  }
</style>
