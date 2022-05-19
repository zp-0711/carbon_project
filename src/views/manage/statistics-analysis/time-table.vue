<template>
  <el-table stripe border :data="tableData" style="width: 100%">
    <el-table-column
      prop="date"
      label="时间"
      width="180"
      align="center"
    ></el-table-column>
    <el-table-column
      prop="name"
      label="签发减排量项目(个)"
      align="center"
    ></el-table-column>
    <el-table-column
      prop="address"
      label="总签发减排量(tCO2e)"
      align="center"
    ></el-table-column>
    <el-table-column
      prop="address1"
      label="可用减排量"
      align="center"
    ></el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "time-table",
  props: {
    tableData: null //菜单界面的联系我们
  },
  methods: {}
};
</script>

<style scoped></style>
