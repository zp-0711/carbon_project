<template>
  <div class="layout">
    <mainMenu></mainMenu>
    <div class="mainContent">
      <app-header></app-header>
      <div class="contentDiv">
        <div class="breadDiv">
          位置：
          <div class="breadItem">{{$route.meta.name}}</div>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import mainMenu from "./menu/index.vue";
import AppHeader from "./header/index";
export default {
  name: "app-main",
  data() {
    return {};
  },
  components: {
    mainMenu,
    AppHeader
  },
  mounted() {
  }
};
</script>
<style scoped>
.layout {
  display: flex;
  width: 100vw;
  min-height: 100vh;
}
.mainContent {
  flex: 1;
}
.contentDiv {
  width: 100%;
  flex: 1;
  padding: 0 40px 0 30px;
  background-color: rgb(241, 248, 242);
}
.breadDiv {
  display: flex;
  height: 30px;
  line-height: 30px;
  color: rgba(110, 110, 110, 1);
}
.breadItem {
  font-size: 14px;
  font-weight: normal;
  color: rgba(56, 166, 77, 1);
}
</style>
