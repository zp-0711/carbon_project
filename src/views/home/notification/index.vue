<template>
  <div>
    <Header></Header>
    <div class="guide-notice">
      <div class="guide-noticeC">
        <div class="tabsC flex-spaceBwtween">
          <div class="tabs">
            <div
              class="tab indent0 f18 checked"
              :key="item"
              v-for="item in ['通知公告']"
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
        <div class="notice-content">
          <div class="title f16">
            中共中央
            国务院关于完整准确全面贯彻新发展理念做好碳达峰碳中和工作的意见
          </div>
          <div class="title f16">中发[2021]36号</div>
          <div>
            近日，中共中央国务院印发《关于完整准确全面贯彻新发展理念做好碳达峰碳中和工作的意见》。文件提出:研究碳减排相关税收政策。建立健全促进可再生能源规模化发展的价格机制，完善差别化电价、分时电价和居民阶梯电价政策。严禁对高耗能、高排放、资源型行业实施电价优惠。加快推进供热计量改革和按供热量收费。加快形成具有合理约束力的碳价机制。
          </div>
          <div>
            到2025年，单位国内生产总值二氧化碳排放比2020年下降18%;非化石能源消费比重达到20%左右;森林覆盖率达到24.1%，森林蓄积量达到180亿立方米，为实现碳达峰、碳中和奠定坚实基础。到2030年，经济社会发展全面绿色转型取得显著成效，重点耗能行业能源利用效率达到国际先进水平。单位国内生产总值能耗大幅下降;单位国内生产总值二氧化碳排放比2005年下降65%以上;非化石能源消费比重达到25%左右，风电、太阳能发电总装机容量达到12亿千瓦以上;森林覆盖率达到25%左右，森林蓄积量达到190亿立方米，二氧化碳排放量达到峰值并实现稳中有降。
          </div>
          <div>
            积极发展非化石能源。实施可再生能源替代行动，大力发展风能、太阳能、生物质能、海洋能、地热能等，不断提高非化石能源消费比重。坚持集中式与分布式并举，优先推动风能、太阳能就地就近开发利用。因地制宜开发水能。积极安全有序发展核电。合理利用生物质能。加快推进抽水蓄能和新型储能规模化应用。统筹推进氢能“制储输用”全链条发展。构建以新能源为主体的新型电力系统，提高电网对高比例可再生能源的消纳和调控能力。
          </div>
          <div>
            深化能源体制机制改革。全面推进电力市场化改革，加快培育发展配售电环节独立市场主体，完善中长期市场、现货市场和辅助服务市场衔接机制，扩大市场化交易规模。推进电网体制改革，明确以消纳可再生能源为主的增量配电网、微电网和分布式电源的市场主体地位。加快形成以储能和调峰能力为基础支撑的新增电力装机发展机制。完善电力等能源品种价格市场化形成机制。从有利于节能的角度深化电价改革，理顺输配电价结构，全面放开竞争性环节电价。推进煤炭、油气等市场化改革，加快完善能源统—市场。
          </div>
          <div>
            完善财税价格政策。各级财政要加大对绿色低碳产业发展、技术研发等的支持力度。完善政府绿色采购标准，加大绿色低碳产品采购力度。落实环境保护、节能节水、新能源和清洁能源车船税收优惠。研究碳减排相关税收政策。建立健全促进可再生能源规模化发展的价格机制，完善差别化电价、分时电价和居民阶梯电价政策。严禁对高耗能、高排放、资源型行业实施电价优惠。加快推进供热计量改革和按供热量收费。加快形成具有合理约束力的碳价机制。
          </div>
          <div>
            推进市场化机制建设。依托公共资源交易平台，加快建设完善全国碳排放权交易市场，逐步扩大市场覆盖范围，丰富交易品种和交易方式，完善配额分配管理。将碳汇交易纳入全国碳排放权交易市场，建立健全能够体现碳汇价值的生态保护补偿机制。健全企业、金融机构等碳排放报告和信息披露制度。完善用能权有偿使用和交易制度，加快建设全国用能权交易市场。加强电力交易、用能权交易和碳排放权交易的统筹衔接。发展市场化节能方式，推行合同能源管理，推广节能综合服务。
          </div>
          <div>
            原文：<a
              class="colorBlue"
              href="http://www.gov.cn/zhengce/2021-10/24/content_5644613.htm"
              >中共中央
              国务院关于完整准确全面贯彻新发展理念做好碳达峰碳中和工作的意见</a
            >
          </div>
          <div>中共中央 国务院</div>
          <div>2021年10月24日</div>
          <div class="indent0">来源：国务院官网</div>
          <div class="indent0">时间：2021-10-25</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header.vue";
export default {
  name: "notification",
  components: { Header },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>


<style scoped lang="stylus">
@import '~@/css/color.styl'
.guide-noticeC
  background-color color-white
  line-height 28px
  text-indent 20px
.guide-notice
  padding 20px 8% 40px 8%
  color color-grey
  line-height 16px
.tabsC
  border-bottom 1px solid color-bgc
.tabs
  display flex
.tab
  width 180px
  padding 10px 20px
  color color-grey
  text-align center
  &.checked
    background-color color-white
    color color-primary
    border-bottom 1px solid color-primary
.goback
  color color-primary
  padding-right 20px
  padding-bottom 10px
  display flex
  align-items flex-end
.notice-content
  padding 30px
.title
  font-weight 700
  text-align center
.indent0
  text-indent 0
.colorBlue
  color color-blue
</style>