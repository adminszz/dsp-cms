<template>
  <div class="originality1">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane
         v-for="(item, ind) in dataArr" :key="ind"
        :label="'创意'+(ind+1)" 
        :name="ind+'0'"
        :value="ind"
      >
        <ItemTab :ind="ind" :address="address" :item="item"/> 
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ItemTab from './ItemTab'
export default {
  name: 'originality1',
  props: ["dataArr", "address"],
  components: {
    ItemTab
  },
  data() {
    return {
      activeName: '00'
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab);
    }
  }
}
</script>

<style scoped>

  .originality1{
    margin-top: 0px;
  }
  
</style>