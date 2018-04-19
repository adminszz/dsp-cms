<template>
  <div class="originality">
    <p>所有广告计划 > DD-广告测试团队-2018/04/16 > 11234</p>
    <p>
      <span>单元：2012/12/21</span>
      <span>投放周期：2012/12/21-2018/2/3<i class="el-icon-edit"></i></span>
      <span>定向：南小学,10-123,领导看见了就散了</span>
      <span>出价方式：CPC</span>
      <span>出价：1.5元<i class="el-icon-edit"></i></span>
      <span>全部</span>
    </p>
    <ul>
      <li><i style="color: #2873FF;" class="el-icon-picture-outline"></i>广告创意</li>
    </ul>
    <div class="originality-seach">
      <div>
        <el-input 
          placeholder="请输入内容" 
          v-model="input5" 
          class="input-with-select"
          style="width:550px;"
        >
          <el-select 
            v-model="select" 
            slot="prepend" 
            style="width:100px;"
            placeholder="请选择">
            <el-option label="餐厅名" value="1"></el-option>
            <el-option label="订单号" value="2"></el-option>
            <el-option label="用户电话" value="3"></el-option>
          </el-select>
        </el-input>
      </div>
      <b style="line-height:40px;margin-left:30px;margin-left:10px;">状态</b>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <button class="seach-btn">查询</button>
    </div>
    <p>
      <el-button type="primary">+ 新建创意</el-button>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options1"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </p>
    <OriginalityTab/>
  </div>
</template>

<script>
import OriginalityTab from './children/OriginalityTab'
export default {
  name: 'originality',
  data() {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      options1: [{
        value: '选项1',
        label: '1'
      }, {
        value: '选项2',
        label: '2'
      }, {
        value: '选项3',
        label: '3'
      }, {
        value: '选项4',
        label: '4'
      }, {
        value: '选项5',
        label: '5'
      }],
      value: '',
      input5: '',
      select: ''
    }
  },
  components: {
    OriginalityTab
  }
}
</script>
<style scoped>
  .originality{
    width: 100%;
    height: 100%;
    background: #fff;
    padding: 10px;
  }
  .originality h2{
    font-weight: 400;
    margin-bottom: 15px;
  }
  .originality h2 em{
    margin-left: 10px;
    font-size: 10px;
    text-align: center;
    display: inline-block;
    width: 40px;
    height: 20px;
    background: #6759D6;
    color: #fff;
    border-radius: 100px;
  }
  .originality p:nth-child(2){
    color: #ccc;
    margin-bottom: 20px;
  }
  .originality p:nth-child(3){
    height: 50px;
    line-height: 50px;
    margin-bottom: 20px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    overflow: hidden;
  }
  .originality p:nth-child(3) span{
    margin-right: 75px;
    font-size: 14px;
  }
  .originality p:nth-child(3) span i{
    color: #2873FF;
    margin-left: 10px;
  }
  .originality ul{
    height: 30px;
  }
  .originality ul li{
    height: 30px;
    width: 100px;
    font-size: 18px;
    font-weight: 600;
    border-bottom: 2px solid #fff;
  }
  .originality ul li:hover{
    border-bottom: 2px solid #2873FF;
  }
  .originality ul li i{
    margin-right: 10px;
  }
  .originality-seach{
    background: #FAFAFA;
    display: flex;
    padding: 15px 0;
  }
  .originality-seach .seach-btn{
    margin-left: 30px;
    width: 130px;
    height: 38px;
    color: #fff;
    border: none;
    background: rgba(0,0,0,0.85);
    border-radius: 2px;
  }
</style>
