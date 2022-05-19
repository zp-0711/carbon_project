<template>
  <div class="listDiv">
    <div class="listTitle" style="margin-bottom: 20px">项目注册</div>
    <el-form ref="registerForm" :model="registerForm">
      <div class="listContent">
        <div class="listLeft">
          <el-form-item label="项目名称">
            <el-input
              v-model="registerForm.proName"
              placeholder="请填写项目名称"
            ></el-input>
          </el-form-item>
          <el-form-item label="项目简介">
            <el-input
              class="textArea"
              style="height: 50px"
              type="textarea"
              placeholder="请填写项目简介"
              v-model="registerForm.proContext"
            ></el-input>
          </el-form-item>
          <el-form-item label="项目类别">
            <el-select
              v-model="registerForm.proCategory"
              placeholder="请选择项目类别"
            >
              <el-option label="碳汇造林" value="碳汇造林"></el-option>
              <el-option label="竹子造林碳汇" value="竹子造林碳汇"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="方法学">
            <el-select
              v-model="registerForm.methodology"
              placeholder="请选择方法学"
            >
              <el-option label="碳汇造林方法学" value="碳汇造林方法学"></el-option>
              <el-option label="竹子造林碳汇方法学" value="竹子造林碳汇方法学"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="项目所在位置">
            <el-input v-model="registerForm.address"></el-input>
          </el-form-item>
          <el-form-item label="项目总面积(公顷)">
            <el-input
              placeholder="请填写项目总面积"
              v-model="registerForm.proArea"
            ></el-input>
          </el-form-item>
          <el-form-item label="碳汇造林树木种类">
            <el-select
              class="w-all"
              v-model="registerForm.tree"
              placeholder="请选择种类"
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
          <el-form-item label="项目位置图片">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="registerForm.dialogVisible">
              <img width="100%" :src="registerForm.biologicalImageUrl" alt />
            </el-dialog>
          </el-form-item>
          <!-- <div class="listRow" style="height: 40px; line-height: 40px">
            <div class="listLable">项目业主</div>
            <div class="listMsg">{{ proDuty }}</div>
          </div> -->
        </div>

        <div class="listRight">
           <el-form-item label="项目业主">
            <el-input
              placeholder="请填写项目业主"
              v-model="registerForm.proOwner"
            ></el-input>
          </el-form-item>
          <el-form-item label="项目负责单位">
            <el-input
              placeholder="请填写项目负责单位"
              v-model="registerForm.proContractor"
            ></el-input>
          </el-form-item>
            <el-form-item label="项目承建单位">
            <el-input
              placeholder="请填写项目承建单位"
              v-model="registerForm.proContractor"
            ></el-input>
          </el-form-item>
          <el-form-item label="项目审定单位选择">
            <el-select
              v-model="registerForm.Organization"
              placeholder="请选择项目审定单位"
            >
              <el-option
                v-for="(item, i) in selectData"
                :label="item.organizationName"
                :value="item.organizationValue"
                :key="i"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="碳汇造林项目土地合格性证明">
            <el-input
              placeholder="碳汇造林项目土地合格性证明"
              v-model="registerForm.proDesignbook"
            ></el-input>
          </el-form-item>
          <el-form-item label="林权证号">
            <el-input
              placeholder="请填写林权证号"
              v-model="registerForm.forestCode"
            ></el-input>
          </el-form-item>
          <el-form-item label="林地所有权利人">
            <el-input
              placeholder="请填写林地所有权利人"
              v-model="registerForm.forestOwner"
            ></el-input>
          </el-form-item>
          <el-form-item label="林地使用权利人">
            <el-input
              placeholder="请填写林地使用权利人"
              v-model="registerForm.forestOperator"
            ></el-input>
          </el-form-item>
          <!-- <el-form-item label="预计减排量" class="estimateInput">
            <el-input
              placeholder="请填写预计减排量"
              v-model="registerForm.estimateCount"
            >
              <template slot="append">tCO2e</template>
            </el-input>
          </el-form-item> -->
        </div>
      </div>
      <el-form-item>
        <el-button type="primary" @click="submitData('registerForm', '2')"
          >提交项目审定</el-button
        >
        <el-button @click="submitData('registerForm', '1')">保存草稿</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Storage from "@/util/storage";
// import { postRegister } from "@/views/manage/api/process";
// import { getOrganization } from "../api/ccermanage";
export default {
  name: "project-register",
  components: {},
  data() {
    return {
      params: {
        page: 1,
        size: 100,
      },
      // 树种类别及其序号
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
      phoneNumber: Storage.get("userInfo").phoneNumber,
      registerForm: {
        proName: "",
        // 项目承建单位
        region: "",
        // 项目简介
        proContext: "",
        // 项目类别
        proCategory: "",
        // 方法学
        methodology: "",
        // 项目地理位置
        address: "",
        // 项目面积
        proArea: "",
         //项目业主
        proOwner:"",
        // 项目负责单位
        proContractor:"",
        // 项目树种类
        tree: "",
        // 土地合格证明
        proDesignbook:"",
        // 林权证号码
        forestCode:"",
        // 林地所有权利人
        forestOwner:"",
        // 林地使用权利人
        forestOperator:"",
        delivery: false,
        // 当前项目状态（数字代替）
        type:"",
        // 机构代码
        Organization:"",
        resource: "",
        dialogImageUrl: "",
        dialogVisible: false,
        biologicalImageUrl: "",
        biologicalVisible: false,
      },
    };
  },
  mounted() {
    this.getListData(this.params);
  },
  methods: {
    async getListData(params) {
      let result = await getOrganization(params);
      if (!result) return;
      this.selectData = result.content;
      console.log("result", this.selectData, result.content);
    },
    submitData(formName, type) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          if (type === "1") {
            this.registerForm.process = "保存草稿";
          } else {
            this.registerForm.process = "提交";
          }
          // 把号码给表单传给后台作为数据归属
          this.registerForm.phoneNumber = this.phoneNumber;
          this.registerForm.status = type;
          console.log("this.form", this.registerForm);
          let result = await postRegister(this.registerForm);
          if (result.success) {
            this.$message({
              showClose: true,
              message: result.message,
              type: "success",
            });
            this.$router.push({ name: "project-list" });
            console.log("result", result);
          }
        } else {
          return false;
        }
      });
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.form.dialogImageUrl = file.url;
      this.form.dialogVisible = true;
    },
    biologicalRemove(file, fileList) {
      console.log(file, fileList);
    },
    biologicalPreview(file) {
      this.form.biologicalImageUrl = file.url;
      this.form.biologicalVisible = true;
    },
  },
};
</script>

<style scoped>
.listDiv {
  width: 100%;
  padding: 20px 22px 60px 22px;
  background-color: white;
}
.textArea .el-textarea__inner {
  height: 95px;
}
.borderInput {
  border-right: 1px solid rgba(168, 168, 168, 1);
}
.listContent {
  display: flex;
  justify-content: space-around;
}
.listLeft {
  width: 100%;
  padding: 20px 22px 60px 22px;
}
.listRight {
  width: 100%;
  padding: 20px 22px 60px 22px;
}
</style>
