<template>
    <el-menu default-active="/sys" class="el-menu-vertical-demo" router>
        <el-submenu index="1">
            <template slot="title"><i class="el-icon-setting"></i>系统管理</template>
            <el-menu-item index="/sys/user_list">用户管理</el-menu-item>
        </el-submenu>

        <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>业务管理</template>
            <el-menu-item-group title="项目管理">
                <el-menu-item index="/project/list">项目列表</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="文章管理">
                <el-menu-item index="/article/list">文章列表</el-menu-item>
            </el-menu-item-group>
        </el-submenu>

        <el-menu-item index="/index/help"><i class="el-icon-information"></i>帮助中心</el-menu-item>
    </el-menu>
    </el-col>

</template>

<style>
    .el-submenu .el-menu-item{
        height: 40px;
        line-height: 40px;
    }
    .el-menu-item-group__title{
        padding-top: 10px;
    }
</style>