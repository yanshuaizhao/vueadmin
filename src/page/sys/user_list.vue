<template>
    <div id="testManagement">
        <el-tabs :active-name="activeName">
            <el-tab-pane label="页面一" name="first">
                <test-project></test-project>
            </el-tab-pane>
            <el-tab-pane label="页面二" name="second">
                <test-user></test-user>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
  import TestProject from './user_one.vue';
  import TestUser from './user_two.vue'
  export default{
    data(){
      return {
          activeName: 'first'
      }
    },
    components:{
      TestProject,
      TestUser
    }
  }
</script>

<style>
  .el-tabs{
    width: 100%;
  }
</style>
