
<!-- ——————————————————————————————————————主体element—————————————————————————————————— -->
<template>

  <div class="table-box">
    <!-- 标题 -->
    <div class="title">
      <h2>简单的增删改查表格</h2>
    </div>

    <!-- 搜索框————新增按钮————多选删除按钮-->
    <div class="query-box">
      <el-input class='query-input' v-model="queryInput" placeholder="请输入🔍" @input="handleQueryName" />
      <div class="button-list">
        <el-button type="primary" @click="handleAdd">增加</el-button>
        <el-button type="danger" @click="handleDelList" v-if="multipleSelection.length>0">多选删除 </el-button>
      </div>
    </div>
    <!-- 表格 -->
    <el-table ref="multipleTableRef" :data="tableData" style="width: 100%" @selection-change="handleSelectionChange"
      border>
      <el-table-column type="selection" width="55" />
      <el-table-column prop="name" label="姓名" width="150" />
      <el-table-column prop="phone" label="电话" width="120" />
      <el-table-column prop="email" label="邮箱" width="120" />
      <el-table-column prop="status" label="状态" width="120" />
      <el-table-column prop="address" label="地址" width="300" />
      <el-table-column fixed="right" label="操作" width="120">
        <template #default="scope">
          <el-button link type="primary" size="small" @click="handRowdelect(scope.row)" style="color:#F56C6C;">删除
          </el-button>
          <el-button link type="primary" size="small" @click="handRowEdit(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 弹窗 -->
    <el-dialog v-model="dialogFormVisible" :title="dialogType === 'add' ? '新增' : '编辑修改'">
      <el-form :model="tableForm">
        <el-form-item label="名字" :label-width="80">
          <el-input v-model="tableForm.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="电话" :label-width="80">
          <el-input v-model="tableForm.phone" autocomplete="off" />
        </el-form-item>
        <el-form-item label="邮箱" :label-width="80">
          <el-input v-model="tableForm.email" autocomplete="off" />
        </el-form-item>
        <el-form-item label="状态" :label-width="80">
          <el-input v-model="tableForm.status" autocomplete="off" />
        </el-form-item>
        <el-form-item label="地址" :label-width="80">
          <el-input v-model="tableForm.address" autocomplete="off" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogconfirm">确定</el-button>
        </span>
      </template>
    </el-dialog>

  </div>
</template>




<script setup>
// <!-- ————————————————————————————————————————数据—————————————————————————————————————— -->
import { ref } from 'vue';

let dialogType = $ref('add')
let dialogFormVisible = $ref(false)
let multipleSelection = $ref([])
let queryInput = $ref('')
let tableData = $ref([
  {
    id: '1',
    name: 'Tom1',
    phone: '137236781636',
    email: 'Los Angeles@qq.com',
    status: '在职',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: '2',
    name: 'Tom2',
    phone: '137236781636',
    email: 'Los Angeles@qq.com',
    status: '在职',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: '3',
    name: 'Tom3',
    phone: '137236781636',
    email: 'Los Angeles@qq.com',
    status: '在职',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: '4',
    name: 'Tom4',
    phone: '137236781636',
    email: 'Los Angeles@qq.com',
    status: '在职',
    address: 'No. 189, Grove St, Los Angeles',
  },
])
let tableDataCopy = Object.assign(tableData)
let tableForm = $ref({
  name: 'hahah',
  phone: '',
  email: '',
  status: '',
  address: ''
})

// <!-- ————————————————————————————————————————方法—————————————————————————————————————— -->
const handleQueryName =()=>{
  if(queryInput.length>0){
    tableData = tableData.filter(item=>(item.name).toLowerCase().match(queryInput.toLowerCase()))
  }else{
    tableData = tableDataCopy
  }
}

// 多删除
const handleDelList = () => {
  // multipleSelection.value.forEach(id=>{
  //   handRowdelect({id})
  // })
  // multipleSelection.value=[]
  // 遍历多选列表的ID，然后调用单删的方法进行删除，最后记得吧多选ID列表清空
  multipleSelection.forEach(id => {
    handRowdelect({ id })
  })
  multipleSelection = []
}
// 单删
const handRowdelect = ({ id }) => {
  // let index = tableData.value.findIndex(item => item.id === id)
  // tableData.value.splice(index, 1)
  let index = tableData.findIndex(item => item.id === id)
  tableData.splice(index, 1)
}
const handleSelectionChange = (val) => {
  // multipleSelection.value = []
  // val.forEach(item => {
  //   multipleSelection.value.push(item.id)
  // });
  // 多选删除，先将ID清空，然后将获取每个值的ID，然后将ID放入多选列表中
  multipleSelection = []
  val.forEach(item => {
    multipleSelection.push(item.id)
  });
}

const handleAdd = () => {
  dialogFormVisible = true
  tableForm = {}
  dialogType = 'add'
}

const handRowEdit = (row) => {
  // dialogFormVisible.value = true
  // dialogType.value = 'edit'
  // tableForm.value = { ...row }
  dialogFormVisible=true
  dialogType='edit'
  tableForm={...row}

}

const dialogconfirm = () => {
  if (dialogType=='add') {
    tableData.push({
      id: (tableData.length + 1).toString(),
      ...tableForm
    })
  }else{
    let index = tableData.findIndex(item=>item.id===tableForm.id)
    tableData[index] = tableForm
  }
  dialogFormVisible = false
}


</script>

<!-- ————————————————————————————————————————————装饰样式------------------------------- -->
<style scoped>
.table-box {
  width: 800px;
  margin: 200px auto;
}

.title {
  text-align: center;
}

.query-box {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.query-input {
  width: 200px;
}
</style>
