<template>
  <div>
    <time-table :tableData="tableData"></time-table>
    <bar-chart :chartInitData="chartInitData1"></bar-chart>
    <bar-chart :chartInitData="chartInitData2"></bar-chart>
    <bar-chart :chartInitData="chartInitData3"></bar-chart>
    <pie-chart :chartInitData="chartInitData4"></pie-chart>
  </div>
</template>

<script>
import TimeTable from "./time-table.vue";
import BarChart from "@/components/echart/bar-chart.vue";
import PieChart from "@/components/echart/pie-chart.vue";
export default {
  name: "reduce-manange",
  components: {
    TimeTable,
    BarChart,
    PieChart
  },
  data() {
    return {
      chartInitData1: {
        color: "#A7E7B6",
        title: "颁发减排量数量(份)统计"
      },
      chartInitData2: {
        color: "#83D9DC",
        title: "签发减排量(tCO2e)统计"
      },
      chartInitData3: {
        color: "#7EBFE4",
        title: "实际可交易减排量(tCO2e)统计"
      },
      chartInitData4: {
        color: ["#D585EF", "#889EEF"],
        title: "减排量(tCO2e)统计"
      },
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "560",
          address: "3500",
          address1: "30000"
        },
        {
          date: "2016-05-02",
          name: "560",
          address: "3500",
          address1: "30000"
        },
        {
          date: "2016-05-02",
          name: "560",
          address: "3500",
          address1: "30000"
        },
        {
          date: "2016-05-02",
          name: "560",
          address: "3500",
          address1: "30000"
        },
        {
          date: "2016-05-02",
          name: "560",
          address: "3500",
          address1: "30000"
        },
        {
          date: "2016-05-02",
          name: "560",
          address: "3500",
          address1: "30000"
        },
        {
          date: "2016-05-02",
          name: "560",
          address: "3500",
          address1: "30000"
        },
        {
          date: "2016-05-02",
          name: "560",
          address: "3500",
          address1: "30000"
        },
        {
          date: "2016-05-02",
          name: "560",
          address: "3500",
          address1: "30000"
        },
        {
          date: "2016-05-02",
          name: "560",
          address: "3500",
          address1: "30000"
        }
      ]
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style scoped></style>
