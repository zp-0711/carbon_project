<template>
  <el-table
    stripe
    border
    class="comTable"
    :data="tableData"
    style="width: 100%;max-height:440px"
    max-height="440"
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(255, 255, 255, 0.7)"
  >
    <el-table-column prop="proName" label="项目名称" align="center"></el-table-column>
    <el-table-column prop="proLeader" label="项目业主" width="100px" align="center"></el-table-column>
    <el-table-column prop="proChecker" label="项目负责单位" align="center"></el-table-column>
    <el-table-column prop="proContractor" label="项目承建单位" align="center"></el-table-column>
    <el-table-column prop="proChecker" label="项目审定单位" align="center"></el-table-column>
    <el-table-column prop="status" label="状态" width="130px" align="center"></el-table-column>
    <el-table-column prop="createTime" label="注册时间" width="130px" align="center"></el-table-column>
    <el-table-column label="项目详情" width="130px" align="center">
      <el-button type="primary" @click="clickRow" size="mini">查看</el-button>
    </el-table-column>
  </el-table>
</template>

<script>
import Storage from "@/util/storage";
import { getProjectRead } from "../api/projectlist";
export default {
  name: "project-list",
  props: {
    tableData: null, //菜单界面的联系我们
    loading: null
  },
  methods: {
    clickRow(row) {
      // getProjectRead(row.uuid);
      // Storage.set("tableRow", row);
      // const routName = this.$router.history.current.name.split("-")[0];
      this.$router.push({
        name:'list-detail',
        // params: { id: row.uuid, status: row.status }
      });
    }
  },
  mounted() {
    console.log("this.$router", this.$router);
  }
};
</script>

<style scoped></style>
