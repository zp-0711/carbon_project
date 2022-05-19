<template>
 <el-table
    stripe
    border
    class="comTable"
    :data="tableData"
    style="width: 100%;max-height:440px"
    max-height="440"
    @row-click="clickRow"
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
  </el-table>
</template>
<script>
export default {
  name: "tableAll",
  data(){
    return{
      tableData: [{
        "proName":"123",
        "proLeader":"proLeader",
        "proChecker":"proChecker",
        "proContractor":"proContractor",
        "status":"审核中",
        "createTime":"2022/4/15"
      }],
    }
  },
  methods: {}
};
</script>

<style scoped></style>
