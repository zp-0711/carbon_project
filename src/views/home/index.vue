<template>
    <div>
        <Header></Header>
        <div class="guide-home w">
            <!-- 审定项目 -->
            <div class="project flex-spaceBwtween">
                <!-- 左侧审定项目和备案项目 -->
                <div class="left-layout">
                    <div>
                        <div class="project-shending flex-spaceBwtween">
                            <div class="project-item">
                                <img class="project-banner" src="@/assets/assets/sdxm.png" alt />
                                <div class="flex-start">
                                    <ul class="project-ul">
                                        <li @click="goBeian()" class="project-li flex-center" :key="i" v-for="i in 4">
                                            <div class="circle"></div>
                                            <a class="gline1 f18" target="_blank">
                                                <span class="des">广东长隆碳汇造林项目审定报告</span>
                                                <span class="time f16">2014-07-02</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="more project-more" @click="goMore()">
                                <div class="flex-center">
                                    <span>更多</span>
                                    <i class="el-icon-d-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="project-beian flex-spaceBwtween">
                            <div class="project-item">
                                <img class="project-banner" src="@/assets/assets/baxm.png" alt />
                                <div class="flex-start">
                                    <ul class="project-ul">
                                        <li @click="goBeian()" class="project-li flex-center" :key="i" v-for="i in 4">
                                            <div class="circle baxm"></div>
                                            <a class="gline1 f18" target="_blank">
                                                <span class="des">广东长隆碳汇造林项目</span>
                                                <span class="time">2014-07-21</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="more project-more" @click="goMore()">
                                <div class="flex-center">
                                    <span>更多</span>
                                    <i class="el-icon-d-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 右侧备案 -->
                <div class="right-layout">
                    <div class="title f15">减排量备案</div>
                    <div class="navs">
                        <div class="nav f16" :key="i" v-for="i in ['监测报告', '已备案']" :class="{ checked: navType === i }"
                            @click="navType = i">
                            {{ i }}
                        </div>
                    </div>
                    <ul class="right-layout-items f18">
                        <li :key="i" v-for="i in 4" class="gline1">
                            <a @click="goBeian()">
                                <span>广东长隆碳汇造林项目核证报告</span>
                                <span class="time">2014-10-21</span>
                            </a>
                        </li>
                    </ul>
                    <div class="right-layout-more more flex-end" @click="goMore()">
                        <div class="flex-center pt7">
                            <span>更多</span>
                            <i class="el-icon-d-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 通知公共、管理方法... -->
            <div class="channel">
                <div class="tabsC flex-spaceBwtween">
                    <div class="tabs">
                        <div class="tab f24 gline1" :class="{ checked: channelNavKey === item }"
                            @click="channelNavKey = item" :key="item"
                            v-for="item in ['通知公告', '管理方法', '方法学', '审定与核证机构']">
                            {{ item }}
                        </div>
                    </div>
                    <div class="channel-more more flex-end">
                        <div class="flex-center">
                            <span>更多</span>
                            <i class="el-icon-d-arrow-right"></i>
                        </div>
                    </div>
                </div>
                <div class="channel-content">
                    <ul class="channel-ul">
                        <li class="channel-li" @click="goDetail()" :key="i" v-for="i in 6">
                            <div class="circle"></div>
                            <a target="_blank">
                                <span class="des gline1">中共中央 国务院关于完整准确全面贯彻新发展理念做好碳达峰碳中和工作的意见 2021年第36号</span>
                            </a>
                        </li>
                    </ul>
                    <img class="home-nav-banner" src="@/assets/assets/home-nav-banner1.jpg" alt />
                    <img class="home-nav-banner" src="@/assets/assets/home-nav-banner2.png" alt />
                </div>
            </div>
            <!-- 合作机构 -->
            <div class="agency">
                <div class="agency-title f24">合作机构</div>
                <div class="agency-items">
                    <div class="flex-spaceBwtween">
                        <img class="agency-logo" :key="i" v-for="i in 4" src="@/assets/assets/agency-logo.jpg" alt />
                    </div>
                    <div class="flex-spaceBwtween pt20">
                        <img class="agency-logo" :key="i" v-for="i in 4" src="@/assets/assets/agency-logo.jpg" alt />
                    </div>
                </div>
            </div>
            <!-- 项目位置 -->
            <!-- <div class="address">
                <div class="address-title f24">项目位置</div>
                <div class="address-items">
                    <img class="address-img" src="@/assets/assets/address.png" alt="" />
                </div>
            </div> -->
        </div>
    </div>
</template>
<script>
import Header from "@/components/header";
export default {
    name: "guide-home",
    components: { Header },
    data() {
        return {
            navType: "监测报告",
            channelNavKey: "通知公告"
        };
    },
    methods: {
        goBeian() {
            this.$router.push({
                path: "/guide/beian"
            });
        },
        goDetail() {
            this.$router.push({
                path: "/guide/detail"
            });
        },
        goMore() {
            this.$router.push({
                path: "/guide/list"
            });
        }
    },
    created() { }
};
</script>
<style lang="less">
.project {
    margin: 20px 0;
}

.project-banner {
    width: 155px;
    height: 120px;
    flex: none;
}

.left-layout {
    width: 60.4%;
    line-height: 28px;
}

.project-shending,
.project-beian {
    background-color: #FFF;
    display: flex;
    padding: 10px 25px 10px 10px;
    border-radius: 3px;
}

.project-item {
    display: flex;
}

.project-ul {
    padding-left: 20px;
}

.circle {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #1f3f99;
    margin-right: 5px;
    flex: none;

    &.baxm {
        background-color: #499074;
    }
}

.more {
    width: 85px;
    flex: none;
    color: #00953E;
    font-size: 16px
}

.project-more .flex-center {
    justify-content: flex-end;
}

.time {
    padding-left: 20px;
}

.right-layout {
    width: 36%;
    border-radius: 3px;
    background-color: #FFF;
}

.right-layout-more {
    width: 100%;
    justify-content: flex-end;
    padding-right: 20px;
}

.title {
    padding: 10px 15px;
    background-color: #499074;
    color: #FFF;
}

.navs {
    width: 170px;
    display: flex;
    margin: 10px auto;
    border: 1px solid #00953E;
}

.nav {
    flex: 1;
    padding: 8px;
    text-align: center;
    color: #00953E;

    &.checked {
        color: #FFF;
        background-color: #499074;
    }
}

.right-layout-items {
    padding: 10px;
    padding-top: 15px;
    line-height: 28px;
}

// 通知公共、管理方法...
.channel {
    background-color: #FFF;
}

.channel-more {
    padding-right: 12px;
    padding-bottom: 10px;
}

.tabsC {
    border-bottom: 1px solid #ccc;
}

.tabs {
    display: flex;
}

.tab {
    padding: 18px 62px;
    color: #666;
    text-align: center;

    overflow hidden &.checked {
        background-color: #FFF;
        color: #00953E;
        border-bottom: 1px solid #00953E;
    }
}

.channel-content {
    padding: 10px 20px;
    display: flex;
    align-items: center
}

.channel-ul {
    padding-left: 20px;
    width: 50.8%;
}

.channel-li {
    display: flex;
    align-items: center;
    line-height: 28px;
}

.home-nav-banner {
    width: 231px;
    height: 132px;
    margin-left: 30px;
}

// 合作机构
.agency {
    background-color: #FFF;
    margin-top: 20px;
    margin-bottom: 40px;
}

.agency-title {
    padding: 10px 20px;
    color: #666;
    border-bottom: 1px solid #ccc;
    padding: 20px 40px;
}

.agency-items {
    padding: 20px 40px;
}

.agency-logo {
    width: 202px;
    height: 100px;
}

// 项目位置
.address {
    background-color: #FFF;
    margin-top: 20px;
    margin-bottom: 40px;
}

.address-title {
    padding: 10px 20px;
    color: #666;
    border-bottom: 1px solid #ccc;
    padding: 20px 40px;
}

.address-items {
    padding: 20px 40px;
}

.address-img {
    width: 100%;
}

.pt20 {
    padding-top: 20px;
}

.pt7 {
    padding-top: 7px;
}
</style>