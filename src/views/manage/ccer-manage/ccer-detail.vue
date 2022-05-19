<template>
  <div>
    <div class="listTitle">江苏省星霖碳业股份有限 （XLC）</div>
    <el-table stripe border :data="tableData" style="width: 100%" show-header="false">
      <el-table-column prop="name" label="用户名" width="220px"></el-table-column>
      <el-table-column prop="address" label="机构名称"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "ccer-detail",
  data() {
    return {
      radio: "1",
      input: "",
      tableData: [
        {
          date: "2018年6月19日",
          address: "中国农业科学院"
        },
        {
          date: "2018年6月19日",
          address: "中国农业科学院"
        }
      ],
      props: {}
    };
  },
  components: {},
  mounted() {
    console.log(this.tableData);
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
</style>
