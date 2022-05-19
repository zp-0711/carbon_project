<template>
  <div class="accounts-login">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="手机号" prop="phoneNumber">
        <el-input type="phoneNumber" placeholder="请输入手机号" v-model="ruleForm.phoneNumber" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码"  prop="password">
        <el-input show-password placeholder="请输入密码" v-model.number="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="code">
          <el-input v-model.number="ruleForm.code"></el-input>
          <div class="codeNuber">V9AM</div>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button class="w-all" type="primary" @click="submitForm('ruleForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import loginApi from "@/api/test";
import Storage from "@/util/storage";
export default {
  name: "accounts-login",
  components: {},
  data() {
    return {
      ruleForm: {
        phoneNumber: "",
        password: "",
        // 后面有时间改下
        code: "V9AM"
      },
      rules: {
        phoneNumber: [{ required: true, trigger: "blur" }],
        password: [{ required: true, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          var formData = new FormData();
          formData.append("phoneNumber", "admin")
          formData.append("password", "123")
          let data ={
            phoneNumber:this.ruleForm.phoneNumber,
            password:this.ruleForm.password
          }
          let userInfo = {
           userType:1
          }
          Storage.set("userInfo", userInfo);
          Storage.set("data", data);          
          this.$router.push({
            name: "main"
          })
          // loginApi.login(formData).then((res) => {
          //   console.log(res)
          // })
        } else {
          return false;
        }
      });
    }
  },
  created() { }
};
</script>

<style scoped lang="stylus">
@import '~@/css/color.styl';

.code {
  display: flex;
}

.codeNuber {
  padding: 0 10px;
  border: 1px solid color-primary;
  margin-left: 10px;
  border-radius: 5px;
}
</style>
