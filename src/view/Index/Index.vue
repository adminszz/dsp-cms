<template>
  <div class="index">
    <el-container style="height: 100%; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: #022050">
        <img src="../../../static/img/lo.png" alt="" style="width: 100%; height: 50px;">
        <span class="setUp" @click="tosetup"> <b>＋</b>新建广告</span>
        <el-menu router :default-openeds="['2']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i><span @click="toPath('home')">首页概览</span></template>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i><span>广告管理</span></template>
            <el-menu-item index="/index/plan">广告计划</el-menu-item>
            <el-menu-item index="/index/elements">广告单元</el-menu-item>
            <el-menu-item index="/index/originality">广告创意</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i><span @click="toPath('database')">数据中心</span></template>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"><i class="el-icon-setting"></i><span @click="toPath('workbox')">工具箱</span></template>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header style="text-align: right; font-size: 12px; height: 50px;">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          
          <el-popover
            ref="popover2"
            placement="bottom"
            title="用户信息"
            width="200"
            trigger="click"
          >
          <el-button
            plain
            @click="open5">
            退出登录
          </el-button>
          </el-popover>
          <el-button v-popover:popover2>{{username}}</el-button>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      username: ''
    }
  },
  methods: {
    open5() {
      window.localStorage.removeItem('user');
      window.localStorage.removeItem('token');
      this.$notify.info({
        title: '登录信息',
        message: '成功退出登录'
      });
      location.reload()
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    toPath (path) {
      this.$router.push({
        path: `/index/${path}`
      })
    },
    tosetup () {
      this.$router.push({
        path: '/index/setup'
      })
    }
  },
  created () {
    if (window.localStorage.token) {
      this.username = window.localStorage.user
    } else {
      this.username = '请登录用户名'
    }
  }
}
</script>
<style scoped>
  .setUp b{
    font-size: 20px;
  }
  .el-menu-item[data-v-f933fd7e]:hover{
    background: #2873FF;
    color: #fff;
  }
  .setUp{
    cursor: pointer;
    margin: 20px 0;
    font-size: 15px;
    display: block;
    width: 100%;
    height: 40px;
    padding-left: 24px;
    line-height: 40px;
    color: #fff;
    background: linear-gradient(left,#095DE1,#081A6C);
  }
  .setUp:hover{
    background: linear-gradient(left,#081A6C,#095DE1);
  }
  .el-header {
    background-color: #fff;
    color: #333;
    line-height: 50px;
    border-bottom: 1px solid #ccc;
  }
  .el-aside {
    color: #333;
  }
  .index {
    width: 100%;
    height: 100%;
    display: flex;
  }
  .el-menu{
    background: #022050;
    border-right: 1px solid #022050;
  }
  .el-main{
    background: rgb(236, 236, 236);
    padding:0px;
  }
  .el-submenu__title span{
    color: #ccc;
  }
  .el-submenu__title i{
    color: #ccc;
  }
  .el-menu-item{
    background: #1C2941;
    color: #ccc;
  }
</style>
