<template>
  <div>
    <Header />
    <div class="guide-about">
      <div class="guide-content">
        <div class="tabsC flex-spaceBwtween">
          <div class="tabs">
            <div
              class="tab f24 checked"
              :key="item"
              v-for="item in ['关于我们']"
            >
              {{ item }}
            </div>
          </div>
        </div>
        <div class="about-content">
          <div>机构简介</div>
          <div>一、机构简介</div>
          <div>应对气候变化为主要目标的研究团队。</div>
          <br />
          <div>二、宗旨</div>
          <div>
            本基金会的宗旨是：应对气候变化，发展碳汇事业，推动绿色发展，建设美丽中国。
          </div>
          <br />
          <div>三、业务范围</div>
          <div>本基金会的业务范围包括：</div>
          <div>
            （一）组织开展以增汇减排、应对气候变化为目的的植树造林、森林经营、荒漠化治理、湿地和草原的保护与修复、生物多样性保护；
          </div>
          <div>
            （二）支持和参与以减缓和适应气候变化为目的的林业和草原科学研究、决策咨询、标准化建设和成果推广；
          </div>
          <div>
            （三）组织开展碳汇项目开发、碳汇交易和碳汇计量监测相关的培训及业务咨询；
          </div>
          <div>
            （四）宣传林业和草原应对气候变化的作用和成效，展示社会各界支持参与应对气候变化行动的典型和经验；
          </div>
          <div>（五）开展林业和草原应对气候变化领域的国际合作与交流；</div>
          <div>（六）开展符合本基金会宗旨的其他业务活动。</div>
          <div>
            业务范围中属于法律法规规章规定须经批准的事项，依法经批准后开展。
          </div>
          <br />
          <div>四、秘书处职能和组成</div>
          <div>
            基金会秘书处在理事会领导下，由秘书长负责，执行理事会的决议、决定，负责公益资金募集，组织实施公益项目活动，处理日常工作。
          </div>
          <div>秘书处内设综合部、财务部、项目部、国际部四个部门。</div>
          <br />
          <div>五、主要项目活动及展望</div>
          <div>
            本基金会成立以来，在社会各界的广泛关注和大力支持下，围绕国家应对气候变化战略目标，结合企业、组织和公众参加适应和减缓气候变化公益活动的需要，积极募集资金，开展了一系列以增汇减排为主要目标的造林和森林经营项目以及相关的活动。本基金会为企业、组织和公众成功搭建了一个通过林业措施“储存碳信用、履行社会责任、增加农民收入、改善生态环境”四位一体的公益平台。同时，创办了将义务植树与减少碳足迹有机结合的“绿化祖国·低碳行动”植树节，以鼓励和帮助广大公众以网上出资造林“购买碳汇”的低碳方式履行植树义务，实现了“足不出户、低碳植树”，创新了义务植树尽责形式，提高了义务植树尽责率，该活动得到有关中央国家机关、地方政府、企业和公众的积极响应和踊跃参与。截至2018年底，本基金会已获得来自国内外捐款67164.15万元人民币，其中境内捐款65101.56万元，境外捐款2062.59万元。先后在全国20多个省（市、区）营造和参与管理碳汇林120多万亩，并在全国部署了75片个人捐资与义务植树碳汇造林基地。组织营造了“国务院参事碳汇林”、“全国首个碳中和婚礼碳汇林”、“建院附中碳汇科普林”等不同主题的个人捐资碳汇林；实施了2010年联合国气候变化天津会议、联合国可持续消费论坛、2014年APEC会议、2011-2017中国绿公司年会、2016年G20杭州峰会和国际竹藤组织等60多个大型会议和组织机构的碳中和林项目；组织开发了国内首个可进入市场交易的中国核证减排量（CCER）林业碳汇项目，开发了包括造林、森林经营、竹林、灌木等碳汇项目方法学和林业碳汇项目注册平台。本基金会已成为国内以造林增加碳汇、保护森林减少排放等措施开展碳补偿、碳中和的专业权威机构。
          </div>
          <br />
          <div>七、联系方式</div>
          <div>通讯地址：杭州电子科技大学</div>
          <div>邮政编码：310000</div>
          <div>微信公众号：xxxxxx</div>
          <img class="qrcode" src="http://www.thjj.org/files/2015/wx.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header.vue";
export default {
  name: "about",
  components: { Header },
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>

<style scoped lang="stylus">
@import '~@/css/color.styl';

.guide-about {
  padding: 20px 8% 40px 8%;
  color: color-grey;
  line-height: 22px;
}

.guide-content {
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
  padding: 18px 20px;
  color: color-grey;
  text-align: center;

  &.checked {
    background-color: color-white;
    color: color-primary;
    border-bottom: 1px solid color-primary;
  }
}

.about-content {
  padding: 15px 30px 30px 30px;
}

.qrcode {
  width: 150px;
  height: 150px;
  margin-top: 10px;
}
</style>