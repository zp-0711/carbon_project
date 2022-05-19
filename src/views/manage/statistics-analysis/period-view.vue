<template>
  <div>
    <period-table :tableData="tableData"></period-table>
    <PeriodBarchart></PeriodBarchart>
  </div>
</template>

<script>
import PeriodTable from "./period-table.vue";
import PeriodBarchart from "@/components/echart/period-barchart.vue";
export default {
  name: "reduce-manange",
  components: {
    PeriodTable,
    PeriodBarchart
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "6",
          address: "项目设计",
          address1: "30000"
        },
        {
          date: "2016-05-02",
          name: "6",
          address: "项目审定",
          address1: "30000"
        },
        {
          date: "2016-05-02",
          name: "6",
          address: "项目监测",
          address1: "30000"
        },
        {
          date: "2016-05-02",
          name: "6",
          address: "减排量核证",
          address1: "30000"
        },
        {
          date: "2016-05-02",
          name: "6",
          address: "减排量核证",
          address1: "30000"
        },
        {
          date: "2016-05-02",
          name: "6",
          address: "项目审定",
          address1: "30000"
        },
        {
          date: "2016-05-02",
          name: "6",
          address: "项目审定",
          address1: "30000"
        },
        {
          date: "2016-05-02",
          name: "6",
          address: "项目审定",
          address1: "30000"
        },
        {
          date: "2016-05-02",
          name: "6",
          address: "项目审定",
          address1: "30000"
        },
        {
          date: "2016-05-02",
          name: "6",
          address: "项目审定",
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
