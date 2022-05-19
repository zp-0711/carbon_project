<style scoped></style>
<template>
  <div class="listDiv">
    <div class="listTitle">项目列表</div>
    <div class="inputBox" style="margin-left: 30px">
      <div class="inputDiv">
        <el-input
          v-model="queryParam.proName"
          placeholder="请填写项目名称"
        ></el-input>
        <el-input
          v-model="queryParam.proLeader"
          placeholder="请填写项目审定单位"
        ></el-input>
        <el-input
          v-model="queryParam.proDuty"
          placeholder="请填写项目负责单位"
        ></el-input>
      </div>
      <el-button type="primary" class="queryButton" @click="getQueryData"
        >查询</el-button
      >
    </div>
       <div class="radioBox">
      <el-tabs type="border-card" style="margin-left: 25px">
        <el-tab-pane label="全部项目"><tableAll></tableAll></el-tab-pane>
        <el-tab-pane label="待接收项目"><tableEntrust></tableEntrust></el-tab-pane>
        <el-tab-pane label="待审定项目"><tableJudgement></tableJudgement></el-tab-pane>
        <el-tab-pane label="待核证项目"><tableVerify></tableVerify></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
// 全部数据表格
import tableAll from "./table-all.vue";
// 待接收数据表格
import tableEntrust from "./table-entrust.vue"
// 待审定表格
import tableJudgement from "./table-judgement.vue"
// 待核证表格
import tableVerify from "./table-verify.vue"
export default {
  name: "project-list-jg",
   components: {
    tableAll,
    tableEntrust,
    tableJudgement,
    tableVerify
  },
  data() {
    return {
      tabType: "1",
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      queryParam: {
        proName: null,
        proLeader: null,
        proDuty: null,
      },
    };
  },
 
  methods: {
    getQueryData() {},
  },
};
</script>

<style scoped>
.listDiv {
  width: 100%;
  min-height: 633px;
  padding: 20px 22px 60px 22px;
  background-color: white;
}
/* .listDiv {
  width: 100%;
  min-height: 633px;
  background-color: white;
  padding: 0 22px 60px 22px;
} */
.listTitle {
  height: 57px;
  line-height: 57px;
  font-size: 18px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(49, 49, 49, 1);
}
.inputBox {
  display: flex;
  padding-bottom: 29px;
}
.inputDiv {
  display: flex;
  width: 930px;
  justify-content: space-between;
  margin-right: 20px;
}
.inputDiv > .el-input {
  width: 290px;
  height: 40px;
}
.queryButton {
  width: 100px;
  height: 40px;
}
</style>
