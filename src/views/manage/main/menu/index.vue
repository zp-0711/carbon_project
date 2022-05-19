<template>
  <div class="menu">
    <div class="menuTop">
      <div class="logoBox flex-center">
        <img src="@/assets/assets/bengou-logo.jpg" />
        <div class="logoTitle">碳汇计量与监测管理系统</div>
      </div>
    </div>
    <div class="menuTitle">导航</div>
    <div class="menuLink">
      <div v-for="(item, i) in menus" :key="i">
        <router-link :to="item.menuPath" active-class="activeLink">
          <svg-icon
            :class="item.icon"
            style="font-size: 24px; margin-right: 10px"
          />
          <span>{{ item.title }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Storage from "@/util/storage";
import { mainConfig } from "@/router/index.js";
import { cloneDeep } from "lodash";
export default {
  name: "menu",
  data() {
    const userInfo = Storage.get("userInfo");
    return {
      userType: userInfo && userInfo.userType,
      menus: [],
    };
  },
  methods: {
    // 从router中动态获取菜单
    getMenus(menusConfing = [], path = "/") {
      for (let i = 0; i < menusConfing.length; i++) {
        const menu = menusConfing[i];
        if (menu.meta && menu.meta.isMenus) {
          const isMenus = menu.meta.isMenus;
          const hasPermission =
            menu.meta.userType.indexOf(this.userType) !== -1;
          // 如果权限类型为4，代表拥有所有菜单权限
          if (isMenus && (hasPermission || this.userType === 1)) {
            let cpMenus = cloneDeep(this.menus);
            cpMenus.push({
              ...menu,
              title: menu.meta.name,
              menuPath: `${path}/${menu.path}`,
            });
            this.menus = cpMenus;
          }
        }
        if (menu.children && menu.children.length) {
          const menuPath = `${path}/${menu.path}`;
          this.getMenus(menu.children, menuPath);
        }
      }
    },
  },
  components: {},
  mounted() {
    this.getMenus(mainConfig.children, "/main");
    console.log(mainConfig);
    console.log(mainConfig.children);
  },
};
</script>

<style scoped>
.menu {
  width: 280px;
  flex-shrink: 0;
  background-color: white;
}
.menuTitle {
  height: 50px;
  padding-left: 20px;
  line-height: 50px;
  background: rgba(255, 255, 255, 1);
  font-size: 18px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(165, 165, 165, 1);
}
.menuTop {
  width: 100%;
  height: 70px;
  background-color: #50945c;
}
.logoBox {
  height: 100%;
}
.logoBox img {
  margin-right: 10px;
}
.logoBox .logoTitle {
  width: 176px;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 22px;
}
.menuLink a {
  display: inline-block;
  padding-left: 20px;
  width: 100%;
  height: 40px;
  line-height: 40px;
}
.menuLink a > span {
  font-size: 16px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(85, 85, 85, 1);
}
.activeLink {
  background: rgba(218, 247, 223, 1);
  box-shadow: -3px 0px 0px 0px rgba(105, 180, 119, 1);
  border-right: 2px solid #38a64d;
}
.activeLink span {
  color: #38a64d !important;
}
</style>
