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
    <el-table-column prop="status" label="项目审定报告" width="130px" align="center">
      <el-upload
           class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-change="handleChange"
            :file-list="fileList">
          <el-button size="mini" type="primary">点击上传</el-button>
      </el-upload>
    </el-table-column>
    <el-table-column  label="提交报告" width="130px" align="center">
       <template slot-scope="scope">
       <div class="buttonStyle">
        <el-button
          type="primary"
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">提交</el-button>
          </div>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  name: "period-table",
 data(){
    return{
      tableData: [{
        "proName":"123",
        "proLeader":"proLeader",
        "proChecker":"proChecker",
        "proContractor":"proContractor",
        "status":"待审定",
        "createTime":"2022/4/15"
      }],
    }
  },
  methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      
  }
};
</script>

<style scoped></style>
