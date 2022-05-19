<template>
  <div class="listDiv">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "all-query",
  components: {},
  data() {
    return {};
  }
};
</script>

<style scoped>
.listDiv {
  width: 100%;
  background-color: white;
  padding: 0 22px 60px 22px;
}
</style>
