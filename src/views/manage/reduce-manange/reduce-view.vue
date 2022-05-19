<template>
  <div>
    <div class="listTitle">减排量列表</div>
    <div class="flex-spaceBwtween inputBox">
      <el-input v-model="input1" placeholder="请填写业主名称" />
      <el-button type="primary" class="queryButton">查询</el-button>
    </div>
    <el-table stripe border :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="业主" width="280" align="center"></el-table-column>
      <el-table-column prop="address1" label="总签发减排量" width="180" align="center"></el-table-column>
      <el-table-column prop="address" label="可用减排量" align="center"></el-table-column>
      <el-table-column prop="date" label="更新日期" align="center"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "reduce-view",
  components: {},
  data() {
    return {
      input1: null,
      tableData: [
        {
          date: "2006-05-12",
          name: "中国林业科学研究院",
          address: "3500",
          address1: "30000"
        },
        {
          date: "2017-05-12",
          name: "中国林业科学研究院",
          address: "3500",
          address1: "30000"
        },
        {
          date: "2017-05-12",
          name: "中国林业科学研究院",
          address: "3500",
          address1: "30000"
        },
        {
          date: "2017-05-12",
          name: "中国林业科学研究院",
          address: "3500",
          address1: "30000"
        },
        {
          date: "2017-05-12",
          name: "中国林业科学研究院",
          address: "3500",
          address1: "30000"
        },
        {
          date: "2017-05-12",
          name: "中国林业科学研究院",
          address: "3500",
          address1: "30000"
        },
        {
          date: "2017-05-12",
          name: "中国林业科学研究院",
          address: "3500",
          address1: "30000"
        },
        {
          date: "2017-05-12",
          name: "中国林业科学研究院",
          address: "3500",
          address1: "30000"
        },
        {
          date: "2017-05-12",
          name: "中国林业科学研究院",
          address: "3500",
          address1: "30000"
        },
        {
          date: "2017-05-12",
          name: "中国林业科学研究院",
          address: "3500",
          address1: "30000"
        }
      ]
    };
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
.inputBox .el-input {
  width: 280px !important;
}
.queryButton {
  width: 100px;
  margin-left: 20px;
}
.inputBox {
  margin-bottom: 30px;
}
</style>
