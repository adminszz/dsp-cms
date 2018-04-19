<template>
    <div>
      <!-- 表格 -->
      <el-table
        ref="multipleTable"
        :data="tableData3"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      
        <!-- <template slot-scope="scope">
          <el-switch
          v-model="value2"
          active-color="#13ce66"
          inactive-color="#ff4949">
          </el-switch>
        </template> -->
      <el-table-column
        prop="src"
        label="创意素材"
        width="120">
        <template slot-scope="scope">
          <img  :src="scope.row.src" alt="" style="width: 50px;height: 50px">
        </template>
      </el-table-column>
      <el-table-column
        prop="id"
        label="创意ID"
        width="120">
      </el-table-column>
      <el-table-column
        prop="type"
        label="创意类型"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="size"
        label="尺寸"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="luolink"
        label="落地页链接"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="celink"
        label="监测链接"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="element"
        label="所属单元"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="plan"
        label="所属计划"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="exposure"
        label="曝光量"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="hits"
        label="点击量"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="state"
        label="状态"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        type="hand"
        width="55">
        <template slot-scope="scope">
          <i class="el-icon-edit" style="color:#2873FF;font-weight:900;"></i>
          <i class="el-icon-close" style="color:#f00;font-weight:900;"></i>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[3, 4, 5, 6]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="40">
      </el-pagination>
  </div>
    </div>
</template>

<script>
export default {
  name: "originalitytab",
  data() {
    return {
      tableData3: [
        {
          src: "http://localhost:9000/upload/react%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F-1523937588144.png",
          id: 123,
          type: "单",
          size: "640*320",
          luolink: "safjljfsl",
          celink: "asfda",
          element: "1511",
          plan: "DD-广告",
          exposure: 1234,
          hits: 4567,
          state: '好',
          hand: "删除"
        },
        {
          src: "http://localhost:9000/upload/react%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F-1523937588144.png",
          id: 123,
          type: "单",
          size: "640*320",
          luolink: "safjljfsl",
          celink: "asfda",
          element: "1511",
          plan: "DD-广告",
          exposure: 1234,
          hits: 4567,
          state: '好',
          hand: "删除"
        },
        {
          src: "http://localhost:9000/upload/react%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F-1523937588144.png",
          id: 123,
          type: "单",
          size: "640*320",
          luolink: "safjljfsl",
          celink: "asfda",
          element: "1511",
          plan: "DD-广告",
          exposure: 1234,
          hits: 4567,
          state: '好',
          hand: "删除"
        },
        {
          src: "http://localhost:9000/upload/react%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F-1523937588144.png",
          id: 123,
          type: "单",
          size: "640*320",
          luolink: "safjljfsl",
          celink: "asfda",
          element: "1511",
          plan: "DD-广告",
          exposure: 1234,
          hits: 4567,
          state: '好',
          hand: "删除"
        },
        {
          src: "http://localhost:9000/upload/react%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F-1523937588144.png",
          id: 123,
          type: "单",
          size: "640*320",
          luolink: "safjljfsl",
          celink: "asfda",
          element: "1511",
          plan: "DD-广告",
          exposure: 1234,
          hits: 4567,
          state: '好',
          hand: "删除"
        }
      ],
      multipleSelection: [],
      currentPage: 4,
      value1:true,
      value2:true
    };
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

<style scoped>
</style>