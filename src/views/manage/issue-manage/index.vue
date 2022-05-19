<template>
  <div class="listDiv">
    <div class="listTitle">已签发减排量</div>
    <div class="flex-start inputBox">
      <div class="listTitle">可用减排量：1278</div>
      <el-button type="primary" class="queryButton">申 请</el-button>
      <el-input v-model="input1" placeholder="请输入核销的减排量" />
    </div>
    <el-table stripe border :data="tableData" style="width: 100%">
      <el-table-column
        prop="checkerTime"
        label="时间"
        align="center"
      ></el-table-column>
      <el-table-column prop="pid" label="项目" align="center"></el-table-column>
      <el-table-column
        prop="change"
        label="变量"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="balance"
        label="余额"
        align="center"
      ></el-table-column>
    </el-table>
  </div>
</template>

<script>
import Storage from "@/util/storage";
import { getIssue } from "../api/issuemanage";
export default {
  name: "issue-manage",
  components: {},
  data() {
    return {
      input1: null,
      tableData: null,
      params: {}
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      const userInfo = Storage.get("userInfo");
      this.params = userInfo && userInfo.companyName;
      let result = await getIssue(this.params);
      if (!result) return;
      this.tableData = result;
      console.log("result", result, this.tableData);
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
.inputBox .el-input {
  width: 280px !important;
}
.queryButton {
  width: 100px;
  margin-left: 45px;
  margin-right: 20px;
}
.inputBox {
  align-items: center;
  margin-bottom: 30px;
}
</style>
