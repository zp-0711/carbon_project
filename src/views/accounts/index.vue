<template>
  <div>
    <Header></Header>
    <div class="guide-accounts">
    <div class="guide-accountsC">
      <div class="tabsC flex-spaceBwtween">
        <div class="tabs">
          <div
            class="tab f18"
            :class="{'checked': routePath === item.path}"
            @click="goLink(item)"
            :key="item.name"
            v-for="item in tabs"
          >{{item.name}}</div>
        </div>
      </div>
    </div>
    <div class="accountsC">
      <router-view></router-view>
    </div>
  </div>
  </div>
</template>

<script>
import Header from "@/components/header";
export default {
  name: "guide-accounts",
  components: {
    Header
  },
  data() {
    return {
      tabs: [
        {
          path: "/accounts/login",
          name: "登录"
        },
        {
          path: "/accounts/register",
          name: "注册"
        }
      ],
      routePath: this.$route.path
    };
  },
  methods: {
    goLink(item) {
      this.routePath = item.path;
      this.$router.push({
        path: item.path
      });
    }
  },
  created() {}
};
</script>

<style scoped lang="stylus">
@import '~@/css/color.styl';

.guide-accountsC {
  background-color: color-white;
}

.tabsC {
  border-bottom: 1px solid color-border;
}

.tabs {
  display: flex;
}

.tab {
  width: 180px;
  padding: 10px 20px;
  color: color-grey;
  text-align: center;

  &.checked {
    background-color: color-white;
    color: color-primary;
    border-bottom: 1px solid color-primary;
  }
}

.guide-accounts {
  padding: 20px 8% 40px 8%;
}

.accountsC {
  background-color: color-white;
  padding: 20px 30%;
}
</style>