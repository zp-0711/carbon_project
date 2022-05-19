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
    <el-table-column prop="status" label="核证报告" width="130px" align="center">
      
    </el-table-column>
    <el-table-column label="是否备案签发" width="130px" align="center" >
     <template slot-scope="scope">
       <div class="buttonStyle">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">同意</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">拒接</el-button>
          </div>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  name: "tableEntrust",
data(){
    return{
      tableData: [{
        "proName":"123",
        "proLeader":"proLeader",
        "proChecker":"proChecker",
        "proContractor":"proContractor",
        "status":"待备案",
        "createTime":"2022/4/15"
      },
      {
        "proName":"1243",
        "proLeader":"proLeader",
        "proChecker":"proChecker",
        "proContractor":"proContractor",
        "status":"待备案",
        "createTime":"2022/4/15"
      }],
    }
  },
  methods: {
     handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
  }
};
</script>

<style scoped>
.buttonStyle{
  display: flex;
  justify-content: space-around;
}
</style>
