<template>
  <div style="margin-top: 40px;">
    <div class="chartTitle">{{chartInitData.title}}</div>
    <div
      :id="chartID"
      class="statisticsChart"
      style="display:inline-block;margin:10px auto;margin-left:1%;text-align:left;"
      :style="{ height: pieHeight + 'px', width: lineWidth }"
    ></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pieWidth: 600,
      pieHeight: 380,
      chartID: Math.random()
        .toString(36)
        .substr(2),
      lang: "zh",
      lineWidth: "100%",
      barOption: {
        color: [this.chartInitData.color],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
            ],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "碳汇",
            type: "bar",
            barWidth: "40%",
            data: [10, 52, 200, 334, 390, 330, 220, 390, 330, 220, 390, 330]
          }
        ]
      }
    };
  },
  props: {
    chartInitData: null, //数据
    specialWidth: null, //兼容其他布局
    isDeepChannel: null //是否是深度分析模块的数据
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById(this.chartID));
      // 绘制图表
      myChart.setOption(this.barOption);
    }
  }
};
</script>
<style scoped>
.chartTitle {
  width: 100%;
  text-align: center;
}
</style>
