<template>
  <div class="setplan">
    <h1>建立广告计划</h1>
       <el-row :gutter="12" >
        <el-col :span="5" >
          <el-card shadow="hover">
            <router-link to='/index/setup/setplan/haveplan'>已有计划</router-link>
          </el-card>
        </el-col>
        <el-col :span="5">
          <el-card shadow="hover">
            <router-link to='/index/setup/setplan/newplan'>新建计划</router-link>
          </el-card>
        </el-col>
      </el-row>
      <router-view></router-view>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
  .setplan h1{
    font-size: 28px;
    font-weight: 400;
    margin: 20px 0;
  }
  .el-card__body a{
    color: rgb(48, 47, 47);
    display: block;
    width: 100%;
    height: 100%;
  }
</style>