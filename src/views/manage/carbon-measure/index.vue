<template>
  <div class="listDiv">
    <div class="listTitle" style="margin-bottom: 20px">碳汇预测
    </div>
    <el-form ref="forecastForm" :model="forecastForm" >
  <el-form-item  label="项目名称">
    <el-input class="form-item" v-model="forecastForm.name" placeholder="请填写项目名称"></el-input>
  </el-form-item>
    <el-form-item label="碳汇造林树木种类">
            <el-select class="w-all"  v-model="forecastForm.tree" placeholder="请选择种类">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
    </el-form-item>
    <div class="parameter">
        <el-form-item label="树木的胸径(DHB)" style="margin:0 50px 0 0;">
             <el-input v-model="forecastForm.DHB" placeholder="请填写树木的胸径"></el-input>
        </el-form-item>
        <el-form-item label="树木的树高(H)">
             <el-input v-model="forecastForm.H" placeholder="请填写树高"></el-input>
        </el-form-item>
    </div>
    <el-form-item label="本次项目计量时间/年">
    <el-input v-model="forecastForm.time" placeholder="请填写时间"></el-input>
  </el-form-item>
  <el-form-item label="碳汇造林">
    <el-switch v-model="forecastForm.delivery"></el-switch>
  </el-form-item>
  <el-form-item label="碳库选择">
    <el-checkbox-group v-model="forecastForm.carbonPool">
      <el-checkbox label="地上生物量" name="type">
          <el-popover
                placement="top-start"
                title="地上生物量"
                width="200"
                trigger="hover"
                content="这是项目活动产生的主要碳库">
            <el-a slot="reference">地上生物量</el-a>
          </el-popover>
      </el-checkbox>
      <el-checkbox label="地下生物量" name="type">
           <el-popover
                placement="top-start"
                title="地下生物量"
                width="200"
                trigger="hover"
                content="这是项目活动产生的主要碳库">
            <el-a slot="reference">地下生物量</el-a>
          </el-popover>
      </el-checkbox>
      <el-checkbox label="枯死木" name="type">
           <el-popover
                placement="top-start"
                title="枯死木"
                width="200"
                trigger="hover"
                content="根据方法学的适用条件，项目活动的实施会增加这个碳库；也可以保守的忽略该碳库">
            <el-a slot="reference">枯死木</el-a>
          </el-popover>
      </el-checkbox>
      <el-checkbox label="枯落物" name="type">
           <el-popover
                placement="top-start"
                title="枯落物"
                width="200"
                trigger="hover"
                content="根据方法学的适用条件，项目活动的实施会增加这个碳库；也可以保守的忽略该碳库">
            <el-a slot="reference">枯落物</el-a>
          </el-popover>
      </el-checkbox>
      <el-checkbox label="土壤有机碳" name="type">
           <el-popover
                placement="top-start"
                title="土壤有机碳"
                width="200"
                trigger="hover"
                content="根据方法学的适用条件，项目活动的实施会增加这个碳库；也可以保守的忽略该碳库">
            <el-a slot="reference">土壤有机碳</el-a>
          </el-popover>
      </el-checkbox>
      <el-checkbox label="木产品" name="type">
           <el-popover
                placement="top-start"
                title="木产品"
                width="200"
                trigger="hover"
                content="根据方法学的适用条件，项目活动的实施会增加这个碳库；也可以保守的忽略该碳库">
            <el-a slot="reference">木产品</el-a>
          </el-popover>
      </el-checkbox>
    </el-checkbox-group>
  </el-form-item>
 <el-form-item label="温室气体排放源选择(温室气体种类)">
    <el-checkbox-group v-model="forecastForm.gas">
      <el-checkbox label="二氧化碳" name="type">
         <el-popover
                placement="top-start"
                title="二氧化碳"
                width="200"
                trigger="hover"
                content="生物质燃烧导致的二氧化碳的排放已在碳储量变化中考虑(必选)">
            <el-a slot="reference">二氧化碳</el-a>
          </el-popover>
      </el-checkbox>
      <el-checkbox label="甲烷" name="type">
         <el-popover
                placement="top-start"
                title="甲烷"
                width="200"
                trigger="hover"
                content="有火灾发生选择，没有火灾发生产生甲烷则不用选择">
            <el-a slot="reference">甲烷</el-a>
          </el-popover>
      </el-checkbox>
      <el-checkbox label="一氧化二氮" name="type">
          <el-popover
                placement="top-start"
                title="一氧化二氮"
                width="200"
                trigger="hover"
                content="有森林火灾发生，会导致生物质燃烧产生一氧化二氮">
            <el-a slot="reference">一氧化二氮</el-a>
          </el-popover>
      </el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="活动形式">
    <el-input type="textarea" v-model="forecastForm.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即计量</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
export default {
  name:"carbonMeasure",
  data() {
      return {
        forecastForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          gas:[],
          carbonPool: [],
          resource: '',
          desc: '',
          H:"",
          DHB:""
        },
         options: [
        {
          label: "桉树",
          value: 1,
        },
        {
          label: "柏树",
          value: 2,
        },
        {
          label: "柳树",
          value: 3,
        },
        {
          label: "黑松",
          value: 4,
        },
        {
          label: "落叶针",
          value: 5,
        },
        {
          label: "樟子松",
          value: 6,
        },
        {
          label: "华山松",
          value: 7,
        },
        {
          label: "杉木",
          value: 8,
        },
        {
          label: "赤松",
          value: 9,
        },
        {
          label: "思茅松",
          value: 10,
        },
        {
          label: "红松",
          value: 11,
        },
        {
          label: "云杉",
          value: 12,
        },
        {
          label: "枫香",
          value: 13,
        },
        {
          label: "相思",
          value: 14,
        },
        {
          label: "油松",
          value: 15,
        },
      ],
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
}
</script>

<style scoped>
.listDiv {
  width: 100%;
  padding: 20px 22px 60px 22px;
  background-color: white;
}
.parameter{
  display: flex;
}
</style>