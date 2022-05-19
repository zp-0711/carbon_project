<template>
  <div class="guide-header">
    <div class="guide-nav flex-spaceBwtween f14">
      <div class="nav-left">
        <span class="goHome nav-btn pr39" @click="goLink('/')"
          >首页</span
        >
        <span class="about nav-btn pr39" @click="goLink('/about')"
          >开发团队</span
        >
        <span
          class="successCase nav-btn pr39"
          @click="goLink('/notification')"
          >通知公告</span
        >
        <span class="faq nav-btn" @click="goLink('/questions')">常见问题</span>
      </div>
      <div class="nav-right flex-spaceBwtween">
        <span class="login nav-btn" @click="goLink('/accounts/login')"
          >登录</span
        >
        <div class="li nav-btn"></div>
        <span
          class="register nav-btn"
          @click="goLink('/accounts/register')"
          >注册</span
        >
      </div>
    </div>
    <div class="carousel">
      <el-carousel trigger="click">
        <el-carousel-item>
          <img src="@/assets/assets/banner/banner1.jpg" alt class="banner" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="@/assets/assets/banner/banner2.jpg" alt class="banner" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="@/assets/assets/banner/banner3.jpg" alt class="banner" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="@/assets/assets/banner/banner4.jpg" alt class="banner" />
        </el-carousel-item>
        <el-carousel-item>
          <img src="@/assets/assets/banner/banner6.jpg" alt class="banner" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  methods: {
    goLink(path) {
      this.$router.push({
        path
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

.guide-nav {
  padding: 10px 8%;
  background-color: #FFF;
}

.goHome {
  font-size: 14px;
  font-family: Microsoft YaHei;
}

.nav-right {
  width: 95px;
}

.li {
  width: 1px;
  height: 100%;
  background-color: #000;
}

.nav-btn:hover, .nav-btn:active {
  color: #00953E;
  font-weight: bold;
  cursor:pointer
}
.pr39 {
  padding-right: 39px
}

.banner {
  width: 100%;
  overflow: hidden;

  > img {
    width: 100%;
  }
}
</style>
