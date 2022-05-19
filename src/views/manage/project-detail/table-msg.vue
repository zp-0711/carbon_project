<template>
  <el-table stripe :data="tableData" border style="width: 100%">
    <el-table-column type="index" label="序号" width="180" align="center"></el-table-column>
    <el-table-column prop="operator" label="用户" width="180" align="center"></el-table-column>
    <el-table-column prop="status" label="环节" width="180" align="center"></el-table-column>
    <el-table-column prop="content" label="内容" align="center"></el-table-column>
    <el-table-column prop="createTime" label="日期" width="180" align="center"></el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "project-list",
  data() {
    return {};
  },
  props: {
    tableData: null //数据源
  }
};
</script>

<style scoped></style>
