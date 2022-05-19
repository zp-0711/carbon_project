<template>
  <div class="listDiv">
    <div class="radioBox">
      <el-radio-group v-model="tabType" style="margin-bottom: 30px;">
        <el-radio-button label="1">项目信息</el-radio-button>
        <el-radio-button label="2">追溯信息</el-radio-button>
      </el-radio-group>
    </div>
    <div v-if="tabType === '1'">
      <project-form></project-form>
    </div>
    <div v-if="tabType === '2'">
      <table-msg></table-msg>
    </div>
  </div>
</template>

<script>
import TableMsg from "./table-msg";
import ProjectForm from "./project-form.vue";
export default {
  name: "project-list",
  data() {
    return {
      tabType: "1"
    };
  },
  components: {
    TableMsg,
    ProjectForm
  }
};
</script>

<style scoped>
.listDiv {
  width: 100%;
  min-height: 533px;
  padding: 20px 22px 60px 22px;
  background-color: white;
}
.radioBox {
}
</style>
