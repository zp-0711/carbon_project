<template>
  <div class="listDiv">
       <div class="listTitle" style="margin-bottom: 20px">文章管理</div>
    <ShowArtical v-model="type" v-if="type == 0"></ShowArtical>
    <EditArtical v-model="type" v-else-if="type == 1 || type == 2"></EditArtical>
  </div>
</template>

<script>
import EditArtical from "./EditArtical";
import ShowArtical from "./ShowArtical";
export default {
  name: "articalIndex",
  components: { EditArtical, ShowArtical },
  data() {
    return {
      //0：列表,1：添加,2：编辑
      type: 0,
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
.listDiv {
  width: 100%;
  padding: 20px 22px 60px 22px;
  background-color: white;
}
</style>