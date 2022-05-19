<template>
  <div>
    <div class="listTitle">查询列表</div>
    <div class="inputBox">
      <div class="inputDiv">
        <el-input v-model="group.input1" placeholder="请填写项目名称"></el-input>
        <el-input v-model="group.input2" placeholder="请填写项目业主"></el-input>
        <el-input v-model="group.input3" placeholder="请填写项目负责单位"></el-input>
        <el-input v-model="group.input4" placeholder="请填写项目承建单位"></el-input>
        <el-select
              v-model="group.Organization"
              placeholder="请选择项目审定单位"
            >
              <el-option
                v-for="(item, i) in selectData"
                :label="item.organizationName"
                :value="item.organizationValue"
                :key="i"
              ></el-option>
            </el-select>
      </div>
      <el-button type="primary" class="queryButton">查询</el-button>
    </div>
    <list-table :tableData="tableData"></list-table>
  </div>
</template>

<script>
import ListTable from "../project-list/table-list";
export default {
  name: "all-query",
  components: {
    ListTable
  },
  data() {
    return {
      group: {
        input1: null,
        input2: null,
        input3: null,
        input4: null,
        Organization: null
      },
       selectData: [
        {
          // 机构名称
          organizationName:"中环联合（北京）认证中心有限公司",
          organizationValue:"CEC"
        },
        {
          // 机构名称
          organizationName:"中国质量认证中心",
          organizationValue:"CQC"
        },
        {
          // 机构名称
          organizationName:"深圳华测国际认证有限公司",
          organizationValue:"CTI"
        },
        {
          // 机构名称
          organizationName:"江苏省星霖碳业股份有限公司",
          organizationValue:"XLC"
        },
        {
          // 机构名称
          organizationName:"中国农业科学院",
          organizationValue:"CAAS"
        }
      ],
      tableData: [
        {
          id: "1edd963382514970b1a10db93cc6f731",
          proName: "二期风电项目",
          proLeader: "苏海利",
          proContractor: "龙源能源开发有限公司",
          proChecker: "灰腾梁风电场",
          creater: "卫瑄",
          status: "申请减排量审核",
          createTime: "2019年7月9日",
          isread: "0",
          updateTime: 1577967392000,
          updater: "修改人",
          ccers: null
        },
        {
          id: "1edd963382514970b1a10db93cc6f733",
          proName: "二期风电项目",
          proLeader: "苏海利",
          proContractor: "龙源能源开发有限公司",
          proChecker: "灰腾梁风电场",
          creater: "卫瑄",
          status: "申请减排量审核",
          createTime: "2019年7月9日",
          isread: "0",
          updateTime: 1577967392000,
          updater: "修改人",
          ccers: null
        },
        {
          id: "1edd963382514970b1a10db93cc6f734",
          proName: "二期风电项目",
          proLeader: "苏海利",
          proContractor: "龙源能源开发有限公司",
          proChecker: "灰腾梁风电场",
          creater: "卫瑄",
          status: "申请减排量审核",
          createTime: "2019年7月9日",
          isread: "0",
          updateTime: 1577967392000,
          updater: "修改人",
          ccers: null
        },
        {
          id: "1edd963382514970b1a10db93cc6f735",
          proName: "二期风电项目",
          proLeader: "苏海利",
          proContractor: "龙源能源开发有限公司",
          proChecker: "灰腾梁风电场",
          creater: "卫瑄",
          status: "申请减排量审核",
          createTime: "2019年7月9日",
          isread: "0",
          updateTime: 1577967392000,
          updater: "修改人",
          ccers: null
        },
        {
          id: "1edd963382514970b1a10db93cc6f736",
          proName: "二期风电项目",
          proLeader: "苏海利",
          proContractor: "龙源能源开发有限公司",
          proChecker: "灰腾梁风电场",
          creater: "卫瑄",
          status: "申请减排量审核",
          createTime: "2019年7月9日",
          isread: "0",
          updateTime: 1577967392000,
          updater: "修改人",
          ccers: null
        },
        {
          id: "1edd963382514970b1a10db93cc6f737",
          proName: "二期风电项目",
          proLeader: "苏海利",
          proContractor: "龙源能源开发有限公司",
          proChecker: "灰腾梁风电场",
          creater: "卫瑄",
          status: "申请减排量审核",
          createTime: "2019年7月9日",
          isread: "0",
          updateTime: 1577967392000,
          updater: "修改人",
          ccers: null
        },
        {
          id: "1edd963382514970b1a10db93cc6f738",
          proName: "二期风电项目",
          proLeader: "苏海利",
          proContractor: "龙源能源开发有限公司",
          proChecker: "灰腾梁风电场",
          creater: "卫瑄",
          status: "申请减排量审核",
          createTime: "2019年7月9日",
          isread: "0",
          updateTime: 1577967392000,
          updater: "修改人",
          ccers: null
        },
        {
          id: "1edd963382514970b1a10db93cc6f739",
          proName: "二期风电项目",
          proLeader: "苏海利",
          proContractor: "龙源能源开发有限公司",
          proChecker: "灰腾梁风电场",
          creater: "卫瑄",
          status: "申请减排量审核",
          createTime: "2019年7月9日",
          isread: "0",
          updateTime: 1577967392000,
          updater: "修改人",
          ccers: null
        },
        {
          id: "1edd963382514970b1a10db93cc6f716",
          proName: "二期风电项目",
          proLeader: "苏海利",
          proContractor: "龙源能源开发有限公司",
          proChecker: "灰腾梁风电场",
          creater: "卫瑄",
          status: "申请减排量审核",
          createTime: "2019年7月9日",
          isread: "0",
          updateTime: 1577967392000,
          updater: "修改人",
          ccers: null
        },
        {
          id: "1edd963382514970b1a10db93cc6f726",
          proName: "二期风电项目",
          proLeader: "苏海利",
          proContractor: "龙源能源开发有限公司",
          proChecker: "灰腾梁风电场",
          creater: "卫瑄",
          status: "申请减排量审核",
          createTime: "2019年7月9日",
          isread: "0",
          updateTime: 1577967392000,
          updater: "修改人",
          ccers: null
        }
      ]
    };
  }
};
</script>

<style scoped>
.listTitle {
  height: 57px;
  line-height: 57px;
  font-size: 18px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(49, 49, 49, 1);
}
.inputBox {
  display: flex;
  margin-bottom: 29px;
  position: relative;
}
.inputDiv {
  display: grid;
  grid-row-gap: 20px;
  grid-column-gap: 90px;
  grid-template-columns: 290px 290px 290px;
  width: 930px;
}
.inputDiv > .el-input {
  width: 290px;
  height: 40px;
}
.queryButton {
  z-index: 100;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100px;
  height: 40px;
}
</style>
