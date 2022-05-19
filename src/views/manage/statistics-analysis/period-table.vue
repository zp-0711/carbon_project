<template>
  <el-table stripe border :data="tableData" style="width: 100%">
    <el-table-column
      prop="name"
      label="序号"
      width="180"
      align="center"
    ></el-table-column>
    <el-table-column
      prop="address"
      label="阶段"
      align="center"
    ></el-table-column>
    <el-table-column
      prop="address1"
      label="数量"
      align="center"
    ></el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "period-table",
  props: {
    tableData: null //菜单界面的联系我们
  },
  methods: {}
};
</script>

<style scoped></style>
