<template>
  <div class="listDiv">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "ccer-manage",

  data() {
    return {
      tabType: "1"
    };
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
</style>
