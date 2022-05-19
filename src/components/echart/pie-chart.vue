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
        color: ["#D585EF", "#889EEF"],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["已用50%", "可用50%"]
        },
        series: [
          {
            name: "减排量统计",
            type: "pie",
            radius: "55%",
            center: ["50%", "45%"],
            data: [
              { value: 300, name: "已用50%" },
              { value: 300, name: "可用50%" }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
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