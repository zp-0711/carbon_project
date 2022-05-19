<template>
  <div class="accounts-register">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户类型" prop="userType">
        <el-select
          class="w-all"
          v-model="ruleForm.userType"
          placeholder="请选择"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="机构代码" prop="organizationValue" v-if="ruleForm.userType">
        <el-input
          type="organizationValue"
          v-model="ruleForm.organizationValue"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="用户名" prop="userName">
        <el-input
          type="userName"
          v-model="ruleForm.userName"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model.number="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="phoneNumber">
        <el-input v-model.number="ruleForm.phoneNumber"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input v-model.number="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="部门" prop="department">
        <el-input v-model.number="ruleForm.department"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button class="w-all" type="primary" @click="submitForm('ruleForm')"
          >提交</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "register",
  components: {},
  data() {
    return {
      options: [
        {
          label: "项目业主",
          value: 4,
        },
        {
          label: "审定与核证机构",
          value: 3,
        },
        {
          label: "省级发改委",
          value: 2,
        },
      ],
      ruleForm: {
        // 用户类型
        userType: "",
        // 用户名
        userName: "",
        // 密码
        password: "",
        // 手机号
        phoneNumber: "",
        // 姓名
        name: "",
        // 部门
        department: "",
        // 机构代码
        organizationValue:"",
      },
      rules: {
        userType: [{ required: true, trigger: "blur" }],
        userName: [{ required: true, trigger: "blur" }],
        password: [{ required: true, trigger: "blur" }],
        phoneNumber: [{ required: true, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(ruleForm){
      console.log(this.ruleForm)
    }
  },
  created() {},
};
</script>

<style scoped lang="less">
.submit {
  width: 100%;
}
</style>