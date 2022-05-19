<template>
  <div class="change-pwd column">
    <div class="title row">
      <h3> 编辑资料</h3>
    </div>
    <el-divider></el-divider>
    <el-form
      :model="formData"
      status-icon
      :rules="rules"
      ref="formData"
      label-width="100px"
      label-position="top"
      class="formData"
    >
      <el-form-item label="">
        <div class="column center">
          <el-image
            style="width: 50px; height: 60px; margin:0 0 0 220px"
            src="http://scsbk.ycfuture.cn/ucenter/static/img/pad_icon.png"
            fit="cover"
          ></el-image>
          <br />
          <span class="font14 gray">建议经常更换密码，确保你账户的安全！</span>
        </div>
      </el-form-item>
      <el-form-item label="旧密码：" prop="oldPass">
        <el-input
          type="password"
          placeholder="请输入旧密码"
          v-model.number="formData.oldPass"
        ></el-input>
      </el-form-item>
      <el-form-item label="新密码：" prop="pass">
        <el-input
          type="password"
          v-model="formData.pass"
          autocomplete="off"
          placeholder="请输入新密码"
        ></el-input>
      </el-form-item>
      <el-form-item label="确认新密码：" prop="checkPass">
        <el-input
          type="password"
          v-model="formData.checkPass"
          autocomplete="off"
          placeholder="请再次输入新密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('formData')"
          >提交</el-button
        >
        <el-button @click="resetForm('formData')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import userApi from "@/api/user";
export default {
  name: "changePwd",
  data() {
    var checkOldPass = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("旧密码不能为空"));
      }
      var formData = new FormData();
      formData.append("password", value);
      formData.append("userId", this.userInfo.userId);
      userApi.checkOldPass(formData).then((res) => {
        var code = res.data.code;
        console.log("code", code);
        if (code == 200) {
          callback();
        } else {
          callback("密码不正确");
        }
      });
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.formData.checkPass !== "") {
          this.$refs.formData.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.formData.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      formData: {
        oldPass: "",
        pass: "",
        checkPass: "",
      },
      rules: {
        oldPass: [{ validator: checkOldPass, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  computed: {
    userInfo() {
      return JSON.parse(localStorage.getItem("userInfo"));
    },
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var formData = new FormData();
          formData.append("password", this.formData.pass);
          formData.append("userId", this.userInfo.userId);
          userApi.updatePass(formData).then((res) => {
            this.$message({
              message: "修改成功",
              type: "success",
            });
            this.resetForm(formName);
          });
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped>
.change-pwd {
  width: 100%;
  box-sizing: border-box;
  padding: 5px 0;
  background-color: white;
}
.change-pwd {
  align-items: center;
}
.title {
  height: 25px;
   padding: 0px 22px 0px 25px;
  line-height: 57px;
  font-size: 18px;
  font-family: Adobe Heiti Std;
  font-weight: normal;
  color: rgba(49, 49, 49, 1);
}
.change-pwd {
  color: #343739;
  font-size: 24px;
  display: inline-block;
  margin: 0 10px 0 0;
  font-weight: normal;
  vertical-align: middle;
}
.formData {
  width: 40%;
  margin-left: 20px;
}
.gray {
  margin: 0 0 0 126px;
}
</style>