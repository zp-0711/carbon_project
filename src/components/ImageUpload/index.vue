<template>
  <div>
    <el-upload
      :show-file-list="false"
      class="upload-demo"
      drag
      :headers="{ Token: getToken() }"
      :action="uploadUrl"
      accept="image/png,image/jpeg"
      :before-upload="handleBeforeUpload"
      :on-success="handleFileUploadSuccess"
      :on-error="handleFileUploadError"
    >
      <img v-if="images" :src="filesApi + images" class="image" />
      <i v-if="!images" class="el-icon-upload"></i>
      <div v-if="!images" class="el-upload__text">
        将图片拖到此处，或<em>点击上传</em>
      </div>
    </el-upload>
  </div>
</template>

<script>
// import { getToken } from "@/utils/auth";
// import request from "@/utils/request";
export default {
  name: "ImageUpload",
  components: {},
  data() {
    return {};
  },
  model: {
    prop: "images",
    event: "change",
  },
  props: {
    uploadUrl: {
      type: String,
      default: process.env.VUE_APP_UPLOAD_API,
    },
    filesApi: {
      type: String,
      default: process.env.VUE_APP_FILES_API,
    },
    images: {
      type: String,
      default: null,
    },
    maxSize: {
      type: Number,
      default: Number.MAX_VALUE,
    },
  },
  methods: {
    getToken,
    /**
     * 上传前校验文件
     */
    handleBeforeUpload(file) {
      if (["image/jpeg", "image/png"].indexOf(file.type) == -1) {
        this.$message.warning("只能上传jpg/png");
      }
      if (file.size > this.maxSize) {
        this.$message.warning("文件超出大小");
        return false;
      } else {
        this.uploadingCount++;
        return true;
      }
    },
    /**
     * 上传成功
     */
    handleFileUploadSuccess(res, file, fileList) {
      console.log(fileList);
      if (res.code === 0) {
        file.url = res.data;
        this.$emit("change", fileList[fileList.length - 1].url);
      } else {
        this.$emit(
          "change",
          this.images.filter((item) => item !== file)
        );
        this.$message.error(res.msg);
      }
    },
    /**
     * 上传失败
     */
    handleFileUploadError(err, file, fileList) {
      this.$emit(
        "change",
        this.images.filter((item) => item !== file)
      );
      this.$message.error("文件上传失败");
    },
  },
};
</script>
<style scoped>
.image {
  width: 100%;
  height: 100%;
}
.upload-demo {
  width: 100%;
}
.el-upload {
  width: 100%;
}
.el-upload-dragger {
  width: 100%;
}
</style>
