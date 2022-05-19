<template>
  <div>
    <Header></Header>
    <div class="guide-faq">
      <div class="guide-faqC">
        <div class="tabsC flex-spaceBwtween">
          <div class="tabs">
            <div
              class="tab f24 checked"
              :key="item"
              v-for="item in ['常见问题']"
            >
              {{ item }}
            </div>
          </div>
          <div class="goback" @click="goBack">
            <span class="flex-center"
              >返回上一级 <i class="el-icon-d-arrow-right"></i
            ></span>
          </div>
        </div>
      </div>
      <div class="faq-content">
        <div>
          <div class="faq-search">
            <el-input
              v-model="search"
              placeholder="输入关键词进行查询..."
            ></el-input>
          </div>
          <div class="faq-items" :key="i" v-for="i in 4">
            <div class="faq-item flex-center">
              <img class="faq-icon" src="@/assets/assets/question.png" alt="" />
              <span class="faq-title faq-item-content f18">常见问题1</span>
            </div>
            <div class="faq-item">
              <img class="faq-icon" src="@/assets/assets/answer.png" alt="" />
              <div class="faq-item-content">答案</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header.vue";
export default {
  name: "questions",
  components: { Header },
  data() {
    return {
      search: "",
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
  created() {},
};
</script>

<style scoped lang="stylus">
@import '~@/css/color.styl';

.guide-faqC {
  background-color: color-white;
  line-height: 28px;
  text-indent: 20px;
}

.guide-faq {
  padding: 20px 8% 40px 8%;
  color: color-grey;
  line-height: 16px;
}

.faq-content {
  background-color: color-white;
  padding: 30px;
}

.tabsC {
  border-bottom: 1px solid color-border;
}

.tabs {
  display: flex;
}

.tab {
  width: 180px;
  padding: 18px 20px;
  color: color-grey;
  text-align: center;

  &.checked {
    background-color: color-white;
    color: color-primary;
    border-bottom: 1px solid color-primary;
  }
}

.goback {
  color: color-primary;
  padding-right: 20px;
  padding-bottom: 10px;
  display: flex;
  align-items: flex-end;
}

.title {
  font-weight: 700;
  text-align: center;
}

.faq-search {
  min-width: 300px;
  max-width: 600px;
  padding: 20px;
}

.faq-icon {
  width: 25px;
  height: 25px;
  margin-right: 16px;
  float: left;
  flex: none;
}

.faq-content {
  overflow: hidden;
}

.faq-items {
  margin-bottom: 25px;
}

.faq-item {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
}

.faq-title {
  color: color-black;
}

.faq-item-content {
  line-height: 26px;
}
</style>
