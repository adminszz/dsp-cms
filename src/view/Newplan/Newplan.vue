<template>
  <div class="newplan">
    <ul>
            <li>
                <div>
                     推广目标：
                </div> 
                <div class="right">
                    <el-radio-group v-model="radio5" size="small">
                    <el-radio-button label="网页"></el-radio-button>
                    <el-radio-button label="ios应用"></el-radio-button>
                    <el-radio-button label="Android应用"></el-radio-button>
                    </el-radio-group>
                </div>
                
            </li>
            <li>
                <div>计划名称：</div>
                <div><input type="text" placeholder="请设置广告名称"></div>
            </li>
            <li>
                <div>每日限额：</div>
                <div>
                    <input type="text" placeholder="请设置广告名称"><span>元/天</span>
                    <el-tooltip placement="top">
                        <div slot="content">最低100元，若不设置<br/>按账户金额进行投放</div>
                        <i class="el-icon-question"></i>
                    </el-tooltip>
                </div>
            </li>
        </ul>  
        <div class="button">
            <el-row>
                <el-button class="next">下一步</el-button>
                <el-button>保存</el-button> 
            </el-row>
        </div> 
  </div>
</template>

<script>
export default {
  name: 'newplan'
};
</script>

<style scoped>
  .newplan{
    margin-top: 25px;
  }
  ul{
    width:100%;
    height: auto;
    margin-top:30px;
  }
  ul li{
      width: 100%;
      height: 32px;
      line-height:32px;
      margin-top:20px;
      list-style: none;
  }

  ul li div{
      float:left;
  }
  .el-radio-group{
      margin-left:10px;
  }
  li div input{
      display: inline-block;
      width:432px;
      height:32px;
      padding-left:15px;
      margin-left:8px;
  }
  li div span{
      padding-left:5px;
  }
  .button{
      margin-top:50px;
  }
  .el-button{
      display: inline-block;
      width: 120px;
      height:40px;
  }
  .next{
      background: #E8E8E8;
  }
</style>
