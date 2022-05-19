<template>
  <div class="my-artical column">
    <div class="title row">
      <h3>我的文章</h3>
      <span class="tip font14">共有<span class="blue font14">0</span>篇</span>
    </div>
    <!-- <div class="non-data">
      <el-empty description="暂无数据"></el-empty>
    </div> -->
    <div>
      <el-button @click="clearFilter">清除</el-button>
      <el-button type="primary" @click="$emit('changeType', 1)">添加</el-button>
    </div>
    <el-table ref="filterTable" :data="pageData" style="width: 1000px">
      <el-table-column
        prop="createTime"
        label="日期"
        sortable
        width="280"
        column-key="date"
      >
      </el-table-column>
      <el-table-column prop="title" label="标题" width="380"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
      <el-table-column
        prop="category"
        label="分类"
        width="100"
        :filters="[
          { text: '新闻资讯', value: 0 },
          { text: '通知通告', value: 1 },
          { text: '文件下载', value: 2 },
        ]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope">
          <el-tag
            v-if="scope.row.category == 0"
            :type="'info'"
            disable-transitions
            ><span>新闻资讯</span></el-tag
          >
          <el-tag
            v-else-if="scope.row.category == 1"
            :type="'success'"
            disable-transitions
            ><span>通知通告</span></el-tag
          >
          <el-tag v-else :type="'primary'" disable-transitions
            ><span>文件下载</span></el-tag
          >
        </template>
      </el-table-column>
    </el-table>
    <div class="row center">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="10"
        layout="total, prev, pager, next"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
// import articalApi from "@/api/artical";
export default {
  name: "showArtical",
  data() {
    return {
      //后台返回的总数据
      listDataTotal: [],
      //表单数据
      tableData: [],
      //单页显示数据
      pageData: [],
      currentPage: 1,
      //总长度
      total: 0,
    };
  },
  mounted() {
    this.getArticalList();
  },
  props: {
    type: Number,
  },
  model: {
    prop: "type",
    event: "changeType",
  },
  methods: {
    getArticalList() {
      var formData = new FormData();
      articalApi.getListAll(formData).then((res) => {
        var data = res.data.data;
        console.log("getListAll", data);
        this.listDataTotal = data;
        this.tableData = data;
        this.filterData(data);
      });
    },
    filterData(data) {
      //根据当前页数进行分页操作
      this.pageData = data.slice(
        (this.currentPage - 1) * 10,
        (this.currentPage - 1) * 10 + 9
      );
      this.total = data.length;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      this.filterData(this.tableData);
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter();
    },
    filterTag(value, row) {
      console.log(`filter: `, value);
      return row.category === value;
    },
    handleEdit(index, row) {
      this.$confirm("此操作将编辑一条记录, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "info",
      })
        .then(() => {
          console.log(index, row);
          localStorage.setItem("currentArticalData", JSON.stringify(row));
          this.$emit("changeType", 2);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消操作",
          });
        });
    },
    handleDelete(index, row) {
      this.$confirm("此操作将删除一条记录, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          var formData = new FormData();
          formData.append("articalId", row.articalId);
          articalApi.deleteArtical(formData).then((res) => {
            this.$message({
              type: "success",
              message: "操作成功!",
            });
            this.getArticalList();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消操作",
          });
        });
    },
  },
};
</script>

<style scoped>
.my-artical {
  width: 100%;
  min-height: 633px;
  box-sizing: border-box;
  background-color: #fff;
}
.my-artical .title {
  margin-bottom: 20px;
  align-items: center;
}
.my-artical .title h3 {
  color: #343739;
  font-size: 24px;
  display: inline-block;
  margin: 0 15px 0 0;
  font-weight: normal;
  vertical-align: middle;
}
.my-artical .title .tip {
  color: #abb0b6;
  vertical-align: middle;
  display: inline-block;
}
.non-data {
  padding-top: 100px;
}
</style>