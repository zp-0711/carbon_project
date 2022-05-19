<template>
  <div
    :class="{ fullscreen: fullscreen }"
    class="tinymce-container"
    :style="{ width: containerWidth }"
  >
    <textarea disabled :id="tinymceId" class="tinymce-textarea" />
    <div class="editor-custom-btn-container" />
  </div>
</template>

<script>
/**
 * docs:
 * https://panjiachen.github.io/vue-element-admin-site/feature/component/rich-editor.html#tinymce
 */
import plugins from "./plugins";
import toolbar from "./toolbar";
import load from "./dynamicLoadScript";

// why use this cdn, detail see https://github.com/PanJiaChen/tinymce-all-in-one
const tinymceCDN = "./tinymce-all-in-one@4.9.3/tinymce.min.js";
// const tinymceCDN = "https://cdn.jsdelivr.net/npm/tinymce@5.8.2/tinymce.min.js";

let that;
export default {
  name: "Tinymce",
  props: {
    id: {
      type: String,
      default: function () {
        return (
          "vue-tinymce-" +
          +new Date() +
          ((Math.random() * 1000).toFixed(0) + "")
        );
      },
    },
    value: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    toolbar: {
      type: Array,
      required: false,
      default() {
        return [];
      },
    },
    menubar: {
      type: String,
      default: "file edit insert view format table",
    },
    height: {
      type: [Number, String],
      required: false,
      default: 270,
    },
    width: {
      type: [Number, String],
      required: false,
      default: "auto",
    },
    NUploadUrl:{
      type: String,
      default: process.env.VUE_APP_VOTE_UPLOAD_API,
    },
    NFilesApi: {
      type: String,
      default: process.env.VUE_APP_VOTE_FILES_API,
    }
  },
  data() {
    that = this;
    return {
      uploadUrl: this.NUploadUrl,
      filesApi: this.NFilesApi,
      hasInit: false,
      tinymceId: this.id,
      fullscreen: false,
      languageTypeList: {
        en: "en",
        zh: "zh_CN",
        es: "es_MX",
        ja: "ja",
      },
    };
  },
  computed: {
    containerWidth() {
      const width = this.width;
      if (/^[\d]+(\.[\d]+)?$/.test(width)) {
        // matches `100`, `'100'`
        return `${width}px`;
      }
      return width;
    },
  },
  watch: {
    value(val) {
      if (val === null) {
        window.tinymce.get(this.tinymceId).setContent("");
      }
      if (
        this.hasInit &&
        window.tinymce.get(this.tinymceId) &&
        val !== window.tinymce.get(this.tinymceId).getContent()
      ) {
        this.$nextTick(() => {
          window.tinymce.get(this.tinymceId).setContent(val || "");
        });
      }
    },
  },
  mounted() {
    this.init();
  },
  activated() {
    if (window.tinymce) {
      this.destroyTinymce();
      this.initTinymce();
    }
  },
  destroyed() {
    this.destroyTinymce();
  },
  methods: {
    init() {
      // dynamic load tinymce from cdn
      load(tinymceCDN, (err) => {
        if (err) {
          this.$message.error(err.message);
          return;
        }
        this.initTinymce();
      });
    },
    initTinymce() {
      const _this = this;
      window.tinymce.init({
        selector: `#${this.tinymceId}`,
        language: this.languageTypeList["zh"],
        height: this.height,
        body_class: "panel-body ",
        object_resizing: false,
        toolbar: this.toolbar.length > 0 ? this.toolbar : toolbar,
        menubar: this.menubar,
        plugins: plugins,
        end_container_on_empty_block: true,
        powerpaste_word_import: "clean",
        ax_wordlimit_num: 40,
        ax_wordlimit_callback: function (editor, txt, num) {
          tipsJS("当前字数：" + txt.length + "，限制字数：" + num);
        },
        code_dialog_height: 450,
        code_dialog_width: 1000,
        advlist_bullet_styles: "square",
        advlist_number_styles: "default",

        imagetools_toolbar:
          "rotateleft rotateright | flipv fliph |  imageoptions",
        imagetools_cors_hosts: [
          "www.tinymce.com",
          "toupiao.mxzhou.cn",
          "codepen.io",
          "121.196.145.171",
        ],

        default_link_target: "_blank",
        link_title: false,
        nonbreaking_force_tab: true, // inserting nonbreaking space &nbsp; need Nonbreaking Space Plugin
        init_instance_callback: (editor) => {
          if (_this.value) {
            editor.setContent(_this.value);
          }
          _this.hasInit = true;
          editor.on("NodeChange Change KeyUp SetContent", () => {
            this.$emit("input", editor.getContent());
          });
        },
        setup(editor) {
          editor.on("FullscreenStateChanged", (e) => {
            _this.fullscreen = e.state;
          });
        },
        images_upload_handler(blobInfo, success, failure, progress) {
          progress(0);
          const formData = new FormData();
          // console.log("blobInfo :>> ", blobInfo);
          formData.append("file", blobInfo.blob());
          // console.log("formData :>> ", blobInfo.blob());
          that.$request
            .post(_this.uploadUrl, formData, {
              onUploadProgress(progressEvent) {
                progress(
                  ((progressEvent.loaded / progressEvent.total) * 100) | 0
                );
              },
            })
            .then((res) => {
              if (_this.filesApi.endsWith("/") && res.data.startsWith("/")) {
                res.data = res.data.substring(1);
              }
              success(_this.filesApi + res.data);
              progress(100);
            })
            .catch((err) => {
              failure("出现未知问题，刷新页面，或者联系程序员");
              console.error(err);
            });
        },
      });

      // 解决keep-alive下切换页面返回后导致不可见的问题
      if (document.querySelector(".mce-tinymce")) {
        document.querySelector(".mce-tinymce").style.display = "block";
      }
    },
    destroyTinymce() {
      const tinymce = window.tinymce.get(this.tinymceId);
      if (this.fullscreen) {
        tinymce.execCommand("mceFullScreen");
      }

      if (tinymce) {
        tinymce.destroy();
      }
    },
    setContent(value) {
      window.tinymce.get(this.tinymceId).setContent(value);
    },
    getContent() {
      window.tinymce.get(this.tinymceId).getContent();
    },
    imageSuccessCBK(arr) {
      const _this = this;
      arr.forEach((v) => {
        window.tinymce
          .get(_this.tinymceId)
          .insertContent(`<img class="wscnph" src="${v.url}" >`);
      });
    },
  },
};
</script>

<style scoped>
.tinymce-container {
  position: relative;
  line-height: normal;
}
.tinymce-container >>> .mce-fullscreen {
  z-index: 10000;
}
.tinymce-textarea {
  visibility: hidden;
  z-index: -1;
}
.editor-custom-btn-container {
  position: absolute;
  right: 4px;
  top: 4px;
  /*z-index: 2005;*/
}
.fullscreen .editor-custom-btn-container {
  z-index: 10000;
  position: fixed;
}
.editor-upload-btn {
  display: inline-block;
}
.tinymce-container >>> .mce-branding {
  display: none;
}
.tox-menu {
  z-index: 9000 !important;
}
.tox-dialog {
  z-index: 9000 !important;
}
</style>
