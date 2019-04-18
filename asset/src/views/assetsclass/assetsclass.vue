<template>
    <div>
        <div class="box">
            <div class="topbox">
                <el-dropdown>
                    <el-button type="primary">
                        新增分类<i class="el-icon-arrow-down el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>
                            <el-button type="text" @click="dialogFormVisible = true">新增同级</el-button>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <div class="left-box">
                <el-tabs :tab-position="tabPosition">
                    <el-tab-pane :label="v.name" v-for="v in msg">
                        <el-table
                                :data="tableData"
                                border
                                style="width: 100%">
                            <el-table-column
                                    prop="aid"
                                    label="分类编号"
                                    width="180">
                            </el-table-column>
                            <el-table-column
                                    prop="cname"
                                    label="分类名称"
                                    width="280">
                            </el-table-column>
                            <el-table-column
                                    prop="ytime"
                                    label="使用年限"
                                    width="180">
                            </el-table-column>
                            <el-table-column>
                                <template slot-scope="scope">
                                    <el-button type="text" @click="dialogFormVisible = true">编辑</el-button>
                                    <el-button type="text" @click="del(scope.row)">删除</el-button>
                                    <el-button type="text" @click="dialogFormVisibleone = true">增加</el-button>
                                </template>
                            </el-table-column>

                        </el-table>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
        <div class="table">
            <el-dialog title="编号分类" :visible.sync="dialogFormVisible">
                <el-form :model="form">
                    <el-form-item label="名称" :label-width="formLabelWidth">
                        <el-input v-model="form.cname" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="年限 " :label-width="formLabelWidth">
                        <el-input v-model="form.ytime" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="onSubmit">确 定</el-button>
                </div>
            </el-dialog>
            <el-dialog
                    title="提示"
                    :visible.sync="dialogVisible"
                    width="50%"
            >
                <span>确定禁用该分类吗？该分类下所有子分类将一起被禁用！</span>
                <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
            </el-dialog>
            <el-dialog title="增加" :visible.sync="dialogFormVisibleone">
                <el-form :model="form">
                    <el-form-item label="名称" :label-width="formLabelWidth">
                        <el-input v-model="form.cname" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="年限" :label-width="formLabelWidth">
                        <el-input v-model="form.ytime" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="onSubmit">确 定</el-button>
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    import user from "../../api/assetsclass"

    let {add, query, del} = user;
    export default {
        data() {
            return {
                msg: [
                    {id: 0, name: '专业设备'},
                    {id: 1, name: '电气设备'},
                    {id: 2, name: '电子产品'}
                ],
                tabPosition: 'left',
                tableData: [{
                    aid: '',
                    cname: '',
                    ytime: ''
                },],
                dialogFormVisible: false,
                dialogFormVisibleone: false,
                dialogVisible: false,
                dialogVisibleone: false,
                form: {
                    aid: '',
                    cname: '',
                    ytime: ''
                },
                formLabelWidth: '50px'
            };
        },
        methods: {
            onSubmit() {
                add(this.form).then(res => {
                    if (res.data.code == 0) {
                        this.$message.success('成功');
                        this.getData()
                        this.form.ytime='';
                        this.form.cname='';
                    } else {
                        this.$message.error('未成功')
                    }
                });
                this.dialogFormVisibleone = false;
                this.dialogFormVisible=false;
                this.dialogVisible=false;
                this.dialogVisibleone=false;
            },
            del(row) {
                del({"aid": row.aid}).then(res => {
                    console.log(res);
                    if (res.data.code == 0) {
                       this.tableData=this.tableData.filter(ele=>ele.aid!=row.aid);
                    } else {
                        this.$message.error('未成功')
                    }
                })
            },
            getData() {
                query().then(res => {
                    if (res.data.code == 0) {
                        this.tableData = res.data.qwe;
                    } else {
                        // this.$message.error('未成功')
                    }
                })
            }
        },
        created() {
            this.getData()
        }

    };
</script>

<style scoped>
    .topbox {
        width: 300px;
        height: 40px;
        text-align: left;
    }
</style>
