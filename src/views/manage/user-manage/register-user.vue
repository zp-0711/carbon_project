<template>
  <el-table stripe border :data="tableData" style="width: 100%">
    <el-table-column
      prop="username"
      label="用户名"
      align="center"
    ></el-table-column>
    <el-table-column prop="name" label="姓名" align="center"></el-table-column>
    <el-table-column
      prop="address"
      label="手机号"
      align="center"
    ></el-table-column>
     <el-table-column
      prop="time"
      label="注册时间"
      align="center"
    ></el-table-column>
    <el-table-column label="操作" props="radio" align="center">
      <template>
        <el-radio v-model="radio" label="1">开通</el-radio>
        <el-radio v-model="radio" label="2">禁用</el-radio>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "register-user",
  data() {
    return {
      radio: "1",
      tableData: [
        {
          username: "管理员",
          name: "王小虎",
          address: "13156111567",
          radio: "1",
          time:'2022/02/15'
        },
        {
          username: "管理员",
          name: "王小虎",
          address: "13156111567",
          radio: "1",
           time:'2022/02/15'
        },
        {
          username: "管理员",
          name: "王小虎",
          address: "13156111567",
          radio: "1"
          ,
           time:'2022/02/15'
        },
        {
          username: "管理员",
          name: "王小虎",
          address: "13156111567",
          radio: "1",
           time:'2022/02/15'
        },
        {
          username: "管理员",
          name: "王小虎",
          address: "13156111567",
          radio: "1",
           time:'2022/02/15'
        },
        {
          username: "管理员",
          name: "王小虎",
          address: "13156111567",
          radio: "1",
           time:'2022/02/15'
        },
        {
          username: "管理员",
          name: "王小虎",
          address: "13156111567",
          radio: "1",
           time:'2022/02/15'
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
.listDiv {
  width: 100%;
  min-height: 633px;
  padding: 20px 22px 60px 22px;
  background-color: white;
}
.radioBox {
}
</style>
