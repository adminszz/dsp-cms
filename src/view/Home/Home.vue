<template>
  <div class="home">
    <el-row :gutter="24">
      <el-col :span="7">
        <el-card shadow="never">
          <p>现金账户</p>
          ￥126,560.00
        </el-card>
      </el-col>
      <el-col :span="7">
        <el-card shadow="never">
          <p>现金账户</p>
          ￥126,560.00
        </el-card>
      </el-col>
    </el-row>
    <div class="home-tab">
      <div class="home-tab-top">
        <h3>整体情况</h3>
        <div class="home-tab-top-right">
          <ul>
            <li>近7天</li>
            <li>近30天</li>
          </ul>
          <div class="block">
            <span class="demonstration">月</span>
            <el-date-picker
              v-model="month1"
              type="month"
              placeholder="选择月"
              value-format="yyyy/MM">
            </el-date-picker>
          </div>
          <div class="block">
            <span class="demonstration">至</span>
            <el-date-picker
              v-model="month2"
              type="month"
              placeholder="选择月"
              value-format="yyyy/MM">
            </el-date-picker>
          </div>
        </div>
      </div>
      <div class="home-tab-center">
        <el-row :gutter="50">
          <el-col :span="5" style="margin-right: -10px;">
            <el-card
              shadow="never"
            >
              <p>现金账户</p>
              ￥126,560.00
            </el-card>
          </el-col>
          <el-col :span="5" style="margin-right: -10px;">
            <el-card shadow="never">
              <p>现金账户</p>
              ￥126,560.00
            </el-card>
          </el-col>
          <el-col :span="5" style="margin-right: -10px;">
            <el-card shadow="never">
              <p>现金账户</p>
              ￥126,560.00
            </el-card>
          </el-col>
          <el-col :span="5" style="margin-right: -10px;">
            <el-card shadow="never">
              <p>现金账户</p>
              ￥126,560.00
            </el-card>
          </el-col>
        </el-row>
        <div class="home-tab-center-num">
          <el-select v-model="value1" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="value2" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="home-tab-center-cont">
          <div id="myChart" :style="{width: '1127px', height: '260px'}"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {home} from '@/utils/http'
export default {
  name: 'home',
  data () {
    return {
      pickerOptions1: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        }
      },
      value: '',
      month1: '2018/1',
      month2: '2018/7',
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value1: '',
      value2: '',
      dataX: ['2018/1', '2018/2', '2018/3', '2018/4', '2018/5', '2018/6', '2018/7'],
      seriesData: [966, 993, 385, 113, 181, 696, 1052]
    }
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        xAxis: {
          type: 'category',
          data: this.dataX
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: this.seriesData,
            type: 'line'
          }
        ]
      })
      window.onresize = function () {
        myChart.resize()
      }
    }
  },
  watch: {
    seriesData (newD, oldD) {
      this.drawLine()
    },
    month2 (nextYM, old) {
      let prevYM = this.month1 // 上一次
      // nextYM  下一次
      home({
        startTime: prevYM,
        endTime: nextYM,
        dimLeft: 6878,
        dimRight: 8102
      }).then(res => {
        this.seriesData = res.data.dataY1
      })
      
      let prevY = prevYM.split('/')[0]
      let nextY = nextYM.split('/')[0]
      let prevM = prevYM.split('/')[1]*1
      let nextM = nextYM.split('/')[1]*1
      let newarr = []
      let len = (nextY-prevY)*12+(nextM - prevM)
      let str = ''
      let num = 0
      for (let i = 0; i <= len; i++) {
          if (prevM+i > 12) {
            str = (prevY*1+Math.floor(num/12)*1+1)+'/'+((prevM+i)%12==0?12:(prevM+i)%12)
            ++num
          } else {
            str = prevY+'/'+(prevM+i)
          }
        newarr.push(str)
      }
      this.dataX = newarr
      this.drawLine()
    }
  },
  mounted () {
    this.drawLine()
  }
}
</script>
<style scoped>
.home-tab-center .el-card {
  height: 70px;
  margin-bottom: 10px;
}
.home {
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 10px;
}
.home-tab {
  background: #fff;
  margin-top: 15px;
}
.home-tab-top {
  display: flex;
  justify-content: space-between;
  height: 48px;
  font-size: 14px;
  line-height: 48px;
  padding: 0 10px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 15px;
}
.home-tab-top ul li {
  height: 46px;
  float: left;
  margin-right: 15px;
  border-bottom: 2px solid #fff;
}
.home-tab-top ul li:active {
  border-bottom: 2px solid rgb(119, 211, 248);
}
.home-tab-top-right {
  display: flex;
}
.home-tab-center {
  padding: 0 10px;
}
.home-tab-center-num {
  display: flex;
  justify-content: space-between;
}
.el-input--suffix .el-input__inner {
  background: #ccc;
  height: 30px;
}
</style>
