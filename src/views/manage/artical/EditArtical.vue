<template>
  <div class="artical-edit column">
    <div class="title row">
      <h3>文章编辑</h3>
    </div>
    <el-form
      :model="formData"
      status-icon
      ref="formData"
      label-width="100px"
      label-position="top"
      class="formData"
      :rules="rules"
    >
      <el-form-item label="文章标题：" prop="title">
        <el-input
          placeholder="请输入标题"
          v-model="formData.title"
          maxlength="50"
        ></el-input>
      </el-form-item>
      <el-form-item label="文章类型：" prop="category">
        <el-select v-model="formData.category" placeholder="请选择文章类型">
          <el-option label="新闻资讯" value="0"></el-option>
          <el-option label="通知通告" value="1"></el-option>
          <el-option label="文件下载" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="文章内容：">
        <Tinymce ref="tinymce" v-model="formData.content"></Tinymce>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('formData')"
          >确认</el-button
        >
        <el-button @click="resetForm('formData')">重置</el-button>
        <el-button @click="cancel('formData')">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import articalApi from "@/api/artical";
import Tinymce from "@/components/Tinymce";
// import ImageUpload from "@/components/ImageUpload/index";
export default {
  name: "editArtical",
  components: { Tinymce, },
  data() {
    var checkTitle = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入标题"));
      } else {
        callback();
      }
    };
    var checkCategory = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请选择文章类型"));
      } else {
        callback();
      }
    };
    return {
      formData: {
        articalId: "",
        title: "",
        category: "",
        content: "123",
      },
      rules: {
        title: [{ validator: checkTitle, trigger: "blur" }],
        category: [{ validator: checkCategory, trigger: "blur" }],
      },
    };
  },
  props: {
    type: Number,
  },
  model: {
    prop: "type",
    event: "changeType",
  },
  mounted() {
    this.getEditData();
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.formData.content = "";
    },
    getEditData() {
      if (
        localStorage.getItem("currentArticalData") != null &&
        this.type == 2
      ) {
        this.formData = JSON.parse(localStorage.getItem("currentArticalData"));
        this.formData.category = this.formData.category + "";
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var formData = new FormData();
          formData.append("title", this.formData.title);
          formData.append("category", this.formData.category);
          formData.append("content", this.formData.content);
          if (this.type == 1) {
            articalApi.addArtical(formData).then((res) => {
              this.$message({
                message: "添加成功",
                type: "success",
              });
              this.resetForm(formName);
            });
          } else {
            formData.append("articalId", this.formData.articalId);
            articalApi.editArtical(formData).then((res) => {
              this.$message({
                message: "编辑成功",
                type: "success",
              });
            });
          }
        } else {
          return false;
        }
      });
    },
    cancel(formName) {
      this.$emit("changeType", 0);
      this.resetForm(formName);
    },
  },
};
</script>

<style scoped>
.artical-edit {
  width: 1000px;
  box-sizing: border-box;
  padding: 35px 0 0 0;
}
.artical-edit .title {
  align-items: center;
}
.artical-edit .title h3 {
  color: #343739;
  font-size: 24px;
  display: inline-block;
  margin: 0 15px 15px 0;
  font-weight: normal;
  vertical-align: middle;
}
</style>