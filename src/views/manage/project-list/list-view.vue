<template>
  <div class="listDiv">
    <div class="listTitle">项目列表</div>
    <div class="inputBox">
      <div class="inputDiv">
        <el-input v-model="queryParam.proName" placeholder="请填写项目名称"></el-input>
        <el-input v-model="queryParam.proLeader" placeholder="请填写项目审定单位"></el-input>
        <el-input v-model="queryParam.proDuty" placeholder="请填写项目负责单位"></el-input>
      </div>
      <el-button type="primary" class="queryButton" @click="getQueryData">查询</el-button>
    </div>
    <list-table :tableData="tableData" :loading="loading"></list-table>
  </div>
</template>

<script>
import ListTable from "./table-list.vue";
import { getProjectlist } from "../api/projectlist";
export default {
  name: "table",
  components: {
    ListTable
  },
  data() {
    return {
      tableData: [{
        "proName":"123",
        "proLeader":"proLeader",
        "proChecker":"proChecker",
        "proContractor":"proContractor",
        "status":"审核中"
      }],
      loading: false,
      queryParam: {
        proName: null,
        proLeader: null,
        proDuty: null
      },
      params: {
        page: 1,
        size: 10
      }
    };
  },
  mounted() {
    this.getData(this.params);
  },
  methods: {
    async getData(params) {
      let result = await getProjectlist(params);
      if (!result) return;
      console.log("result", result);
      this.loading = false;
      this.tableData = result.content;
    },
    getQueryData() {
      const dealParam = {};
      Object.keys(this.queryParam).forEach(item => {
        if (this.queryParam[item]) {
          dealParam[item] = this.queryParam[item];
        }
      });
      Object.assign(dealParam, this.params);
      this.getData(dealParam);
    }
  }
};
</script>

<style scoped>
.listDiv {
  width: 100%;
  min-height: 633px;
  background-color: white;
  padding: 0 22px 60px 22px;
}
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
