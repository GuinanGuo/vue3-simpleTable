
<!-- ——————————————————————————————————————主体element—————————————————————————————————— -->
<template>

  <div class="table-box">
    <!-- 标题 -->
    <div class="title">
      <h2>简单的增删改查表格</h2>
    </div>

    <!-- 搜索输入框 与搜索按钮-->
    <div class="query">
      <el-input v-model="queryInput" placeholder="请输入🔍" />
      <el-button type="primary">增加</el-button>
    </div>
    <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column fixed prop="date" label="Date" width="150" />
      <el-table-column prop="name" label="Name" width="120" />
      <el-table-column prop="state" label="State" width="120" />
      <el-table-column prop="city" label="City" width="120" />
      <el-table-column prop="address" label="Address" width="600" />
      <el-table-column prop="zip" label="Zip" width="120" />
      <el-table-column fixed="right" label="Operations" width="120">
        <template #default>
          <el-button link type="primary" size="small" @click="handRowClick">删除</el-button>
          <el-button link type="primary" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>



<!-- ————————————————————————————————————————数据和方法—————————————————————————————————————— -->
<script setup>

import { ref } from 'vue';
// 数据
let queryInput = ref('')
let tableData = ref([
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
])

// 方法
const handRowClick = ()=>{
  console.log(click);
}

</script>

<!-- ————————————————————————————————————————————装饰样式------------------------------- -->
<style scoped>
.table-box{
  width: 800px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
</style>
