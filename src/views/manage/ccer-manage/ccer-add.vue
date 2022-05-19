<template>
  <div>
    <div class="listTitle">新建机构</div>
    <el-form ref="ccerForm" :model="ccerForm">
      <div class="listContent">
        <div class="listLeft">
          <el-form-item label="机构名称">
            <el-input v-model="ccerForm.organizationName" placeholder="请填写机构名称"></el-input>
          </el-form-item>
          <el-form-item label="联系人">
            <el-input placeholder="请填写联系人" v-model="ccerForm.contact"></el-input>
          </el-form-item>
          <el-form-item label="通讯地址">
            <el-input placeholder="请填写通讯地址" v-model="ccerForm.address"></el-input>
          </el-form-item>
          <el-form-item label="机构网站">
            <el-input v-model="ccerForm.site" placeholder="请填写机构网站"></el-input>
          </el-form-item>
          <el-form-item label="机构简介">
            <el-input
              class="textArea"
              style="height: 190px"
              type="textarea"
              placeholder="请填写机构简介"
              v-model="ccerForm.introduction"
            ></el-input>
          </el-form-item>
        </div>

        <div class="listRight">
          <el-form-item label="统一社会信用代码">
            <el-input v-model="ccerForm.companyCode" placeholder="请填写统一社会信用代码"></el-input>
          </el-form-item>
          <el-form-item label="联系方式">
            <el-input placeholder="请填写联系方式" v-model="ccerForm.tel"></el-input>
          </el-form-item>
          <el-form-item label="传真">
            <el-input placeholder="请填写传真" v-model="ccerForm.fax"></el-input>
          </el-form-item>
          <el-form-item label="电子邮箱">
            <el-input v-model="ccerForm.email" placeholder="请填写电子邮箱"></el-input>
          </el-form-item>
        </div>
      </div>
      <el-form-item>
        <el-button type="primary" @click="submitData('ccerForm')">提交</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getOrganizationAdd } from "@/views/manage/api/ccermanage";
export default {
  name: "ccer-add",
  components: {},
  data() {
    return {
      ccerForm: {
        organizationName: "",
        companyCode: "",
        contact: "",
        tel: "",
        address: "",
        fax: "",
        site: "",
        email: "",
        introduction: ""
      }
    };
  },
  mounted() {},
  methods: {
    submitData(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          console.log("this.form", this.ccerForm);
          let result = await getOrganizationAdd(this.ccerForm);
          if (result.success) {
            this.$message({
              showClose: true,
              message: result.message,
              type: "success"
            });
            this.$router.push({ name: "ccer-list" });
            console.log("result", result);
          } else {
            this.$message.error(result.message);
          }
        } else {
          return false;
        }
      });
    }
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
.textArea .el-textarea__inner {
  height: 95px;
}
.gpsBox {
  display: flex;
  width: 350px;
}
.borderInput {
  border-right: 1px solid rgba(168, 168, 168, 1);
}
</style>
