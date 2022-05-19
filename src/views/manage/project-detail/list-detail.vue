<template>
  <div class="listDiv">
    <div class="radioBox">
      <el-radio-group v-model="tabType" style="margin-bottom: 30px;">
        <el-radio-button label="1">项目信息</el-radio-button>
        <el-radio-button label="2">追溯信息</el-radio-button>
      </el-radio-group>
    </div>
    <div v-if="tabType === '1'">
      <project-form :formData="formData"></project-form>
    </div>
    <div v-if="tabType === '2'">
      <div class="flex-center">
        <progress-step :stepData="stepData"></progress-step>
      </div>
      <table-msg :tableData="tableData"></table-msg>
    </div>
  </div>
</template>

<script>
import TableMsg from "./table-msg";
import ProgressStep from "./progress-step";
import ProjectForm from "./project-form.vue";
import Storage from "@/util/storage";
// import {
//   getProjectDetail,
//   getRecordTable,
//   getRecordStep
// } from "../api/projectlist";
export default {
  name: "project-list",
  data() {
    return {
      tabType: "1",
      id: this.$router.currentRoute.params.id,
      formData: null,
      tableData: [],
      stepData: null
    };
  },
  components: {
    TableMsg,
    ProgressStep,
    ProjectForm
  },
  mounted() {
    this.getData();
    this.getRecordData();
    this.getRecordStep();
  },
  methods: {
    async getData() {
      let result = await getProjectDetail(this.id);
      if (!result) return;
      const rowData = Storage.get("tableRow");
      this.formData = Object.assign(result, rowData);
      console.log("this.formData", this.formData, "result", result);
    },
    async getRecordData() {
      let resultTable = await getRecordTable(this.id);
      if (!resultTable) return;
      this.tableData = resultTable;
      console.log("this.tableData", this.tableData, "resultTable", resultTable);
    },
    async getRecordStep() {
      let resultStep = await getRecordStep({
        pid: this.id
      });
      if (!resultStep) return;

      this.stepData = resultStep;
    }
  }
};
</script>

<style scoped>
.listDiv {
  width: 100%;
  min-height: 533px;
  padding: 20px 22px 60px 22px;
  background-color: white;
}
.radioBox {
}
</style>
