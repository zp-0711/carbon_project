<template>
  <el-steps :active="stepData" finish-status="success" class="detailStep">
    <el-step title="项目设计"></el-step>
    <el-step title="项目审定"></el-step>
    <el-step title="项目备案注册"></el-step>
    <el-step title="项目实施"></el-step>
    <el-step title="项目监测"></el-step>
    <el-step title="减排量核证"></el-step>
    <el-step title="减排量备案签发"></el-step>
  </el-steps>
</template>
<script>
export default {
  name: "progress-step",
  data() {
    return {};
  },
  props: {
    stepData: null
  }
};
</script>

<style scoped></style>
