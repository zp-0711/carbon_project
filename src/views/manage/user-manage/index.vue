<template>
  <div class="listDiv">
    <div class="listTitle" style="margin-left: 5px">用户管理</div>
    <!-- <RegisterUser></RegisterUser> -->
       <div class="radioBox">
      <el-tabs type="border-card" style="margin-left: 5px">
        <el-tab-pane label="审定机构管理"><RegisterUser></RegisterUser></el-tab-pane>
        <el-tab-pane label="业主管理"><RegisterUser></RegisterUser></el-tab-pane>
       <el-tab-pane label="省级发改委管理"><RegisterUser></RegisterUser></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import RegisterUser from "./register-user.vue";
export default {
  name: "user-manage",
  components: {
    RegisterUser
  },

  data() {
    return {};
  },
  mounted() {}
};
</script>

<style scoped>
.listDiv {
  width: 100%;
  min-height: 633px;
  background-color: white;
  padding: 0 22px 60px 22px;
}
.listTitle {
  height: 57px;
  line-height: 57px;
  font-size: 18px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(49, 49, 49, 1);
}
</style>
