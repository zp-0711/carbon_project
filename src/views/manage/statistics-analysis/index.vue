<style scoped></style>
<template>
  <div class="listDiv">
    <div class="radioBox">
      <el-radio-group v-model="tabType" style="margin-bottom: 30px;">
        <el-radio-button label="1">按时间统计</el-radio-button>
        <el-radio-button label="2">按阶段分析</el-radio-button>
      </el-radio-group>
    </div>
    <div v-if="tabType === '1'">
      <div class="dateBox">
        <div class="dateDiv">
          <el-date-picker
            class="datePicker borderRight"
            v-model="value1"
            type="year"
            placeholder="年"
          ></el-date-picker>
          <el-date-picker class="datePicker" v-model="value2" type="month" placeholder="月"></el-date-picker>
        </div>
        <span>至</span>
        <div class="dateDiv">
          <el-date-picker
            class="datePicker borderRight"
            v-model="value3"
            type="year"
            placeholder="年"
          ></el-date-picker>
          <el-date-picker class="datePicker" v-model="value4" type="month" placeholder="月"></el-date-picker>
        </div>
        <el-button type="primary" class="queryButton">查询</el-button>
      </div>
      <time-view></time-view>
    </div>
    <div v-if="tabType === '2'">
      <period-view></period-view>
    </div>
  </div>
</template>

<script>
import PeriodView from "./period-view.vue";
import TimeView from "./time-view.vue";
export default {
  name: "statistics-analysis",
  data() {
    return {
      tabType: "1",
      value1: "",
      value2: "",
      value3: "",
      value4: ""
    };
  },
  components: {
    PeriodView,
    TimeView
  }
};
</script>

<style scoped>
.listDiv {
  width: 100%;
  min-height: 633px;
  padding: 20px 22px 60px 22px;
  background-color: white;
}
.radioBox {
}
.dateBox {
  width: 100%;
  line-height: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  /* background-color: yellowgreen; */
}
.dateBox .borderRight {
  border-right: 1px solid rgba(168, 168, 168, 1);
}
.dateBox span {
  padding: 0 12px;
  color: rgba(85, 85, 85, 1);
  font-size: 16px;
}
.dateDiv {
  border: 1px solid rgba(168, 168, 168, 1);
}
.datePicker {
  width: 100px;
}
.queryButton {
  width: 100px;
  background-color: #69b477;
  border: none;
  margin-left: 20px;
}
</style>
