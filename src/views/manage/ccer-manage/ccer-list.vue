<template>
  <div>
    <div class="listTitle">审定与核证机构管理</div>
    <div class="inputBox">
      <div class="inputDiv">
        <el-input v-model="proName" placeholder="请填写名称"></el-input>
        <el-input v-model="proLeader" placeholder="请填写编号"></el-input>
      </div>
      <el-button type="primary" class="queryButton" @click="getQueryData">查询</el-button>
      <el-button type="primary" class="queryButton" @click="newForm">新 建</el-button>
    </div>
    <el-table
      stripe
      border
      :data="tableData"
      style="width: 100%"
      @row-click="clickRow"
      max-height="440"
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(255, 255, 255, 0.7)"
    >
      <el-table-column prop="companyCode" label="统一社会信用代码" align="center"></el-table-column>
      <el-table-column prop="organizationName" label="机构名称" align="center"></el-table-column>
      <el-table-column prop="adminUserName" label="管理员姓名" align="center">
        <template>
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="introduction" label="机构功能" align="center"></el-table-column>
      <el-table-column label="操作" props="radio" align="center">
        <template>
          <el-radio v-model="radio" label="1">开通</el-radio>
          <el-radio v-model="radio" label="2">禁用</el-radio>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getOrganization } from "../api/ccermanage";
export default {
  name: "ccer-list",
  data() {
    return {
      radio: "1",
      input: "",
      proName: "",
      proLeader: "",
      props: {},
      loading: true,
      params: {
        page: 1,
        size: 10
      },
      tableData: []
    };
  },
  components: {},
  mounted() {
    this.getListData(this.params);
  },
  methods: {
    clickRow(row) {
      console.log("row", row);
      const routName = this.$router.history.current.name.split("-")[0];
      this.$router.push({
        name: `${routName}-detail`,
        params: { id: row.uuid }
      });
    },
    newForm() {
      this.$router.push({
        name: "ccer-add"
      });
    },
    async getListData(params) {
      let result = await getOrganization(params);
      if (!result) return;
      this.tableData = result.content;
      this.loading = false;
      console.log("result", this.tableData, result, result.content);
    }
  }
};
</script>

<style scoped>
.listTitle {
  height: 57px;
  line-height: 57px;
  font-size: 18px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(49, 49, 49, 1);
}
.radioBox {
}
.inputBox {
  display: flex;
  padding-bottom: 29px;
}
.inputDiv {
  display: flex;
}
.inputBox .el-input {
  width: 290px;
  height: 40px;
  margin-right: 40px;
}
.queryButton {
  width: 100px;
  height: 40px;
  margin-right: 40px;
}
</style>
