<template>
  <div class="setoriginality">
    <h1>广告创意</h1>
    <h4>落地页</h4>
    <p>着陆页地址：<input type="text" placeholder="请设置广告名称" v-model="address"/><span>预览</span></p>
    <h4>上传创意</h4>
    <div style="display:flex;position:relative;">
      <Originality1 :class="{addOri: active}" :dataArr="dataArr" :address="address"/>
      <div class="add" :style="sty"><button type="text" @click="open">+添加创意</button></div>   
    </div>
    <div :class="dialog">
        <div class="dialog-box">
          <h3>选择模版</h3>
          <ul>
            <li><img @click="addImage('single')" src="../../../static/img/dan.png" alt=""></li>
            <li><img @click="addImage('more')" src="../../../static/img/duo.png" alt=""></li>
          </ul>
        </div>
    </div>
  </div>
</template>

<script>
import Originality1 from './children/Originality1'
export default {
  name: 'setoriginality',
  data () {
    return {
      address: '',
      dialog: 'dialognone',
      dataArr: [],
      active: true,
      sty: 'left:0;'
    }
  },
  methods: {
    open () {
      this.dialog = 'dialogblock'
    },
    addImage (type) {
      this.active = false
      this.dataArr.push(type)
      this.dialog = 'dialognone'
      this.sty = 'left:' + 80 * this.dataArr.length + 'px'
    }
  },
  components: {
    Originality1
  }
};
</script>

<style scoped>
  .addOri{
    display: none;
  }
  .dialognone{
    display: none;
  }
  .dialogblock{
    display: block;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
  }
  .dialog-box{
    width: 439px;
    height: 282px;
    position: absolute;
    margin: auto;
    top: 0%;
    left: 150px;
    bottom: 0;
    right: 0;
    background: #fff;
  }
  .dialog-box h3{
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    font-weight: 400;
  }
  .dialog-box ul{
    width: 100%;
    height: 80%;
    display: flex;
    margin-top: 10px;
  }
  .dialog-box ul li img{
    width: 95%;
  }
  .setoriginality{
    width: 100%;
    height: auto;
    background: #fff;
  }
  .setoriginality h1{
    font-size: 28px;
    font-weight: 400;
    margin: 20px 0;
  }
  .setoriginality p{
    font-size: 14px;
    color: rgb(107, 107, 107);
    margin-top: 15px;
    margin-bottom: 40px;
  }
  .setoriginality p input{
    width: 300px;
    height: 25px;
    border: 1px solid #ccc;
  }
  .setoriginality p span{
    margin-left: 10px;
    color: rgb(160, 158, 158);
  }
  .setoriginality .add{
    margin-top: 10px;
    font-size: 12px;
    position: absolute;
    top: 0;
  }
  .setoriginality .add button{
    border: none;
    font-weight: 400;
    color: rgb(88, 187, 245);
    background: transparent;
    outline: none;
  }
</style>