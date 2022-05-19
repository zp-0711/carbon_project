<template>
  <div class="headerDiv">
    <div class="headerLeft flex-center">
      <span class="el-icon-s-fold" style="color: white;font-size: 29px;" ></span>
      <div class="headerImgBox">
        <span class="el-icon-message-solid" style="color: white;font-size: 26px;"></span>
      </div>
    </div>
    <div class="flex-center">
      <div class="headerRight">你好，{{data.phoneNumber}}</div>
      <!-- <svg-icon icon-class="loginout" style="color: white;font-size: 18px;margin-right: 10px;"/> -->
      <div class="loginOut" @click="loginOut('/')">退出</div>
    </div>
  </div>
</template>
<script>
import Storage from '@/util/storage';
export default {
  name: "mainHeader",
  data() {
    const userInfo = Storage.get('userInfo')
    const data = Storage.get('data')
    return {
      data,
      userInfo,
      // loginOut,
      name:"本构"
    };
  },
  methods: {
    loginOut(path) {
       this.$confirm('退出, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
             this.$router.push({path});
             Storage.clear();
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消退出登录'
          });          
        });
    }
  }
};
</script>

<style scoped lang="stylus">
@import '~@/css/color.styl';
.headerDiv {
  display: flex;
  height: 70px;
  background: rgba(88, 161, 101, 1);
}
.headerLeft {
  flex: 1;
  justify-content: space-between;
  padding: 0 32px;
  border-right: 1px solid color-white;
}
.headerRight {
  justify-content: center;
  color: color-white;
  padding 20px
}
.loginOut {
  color: color-white
  padding-right 30px
}
.loginOut:hover {
    cursor:pointer
}
</style>
