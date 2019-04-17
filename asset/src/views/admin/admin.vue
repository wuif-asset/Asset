<template>
    <div>
        <el-button type="primary" @click="dialogVisible = true" icon="el-icon-edit" circle></el-button>
        <!-- 表格展示开始-->
        <el-table
                :data="tableData"
                stripe
                style="width: 100%">
            <el-table-column
                    prop="id"
                    label="id"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="管理员名称"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="password"
                    label="管理员密码">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    width="100">
                <template slot-scope="scope">
                    <el-button class="el-icon-edit-outline" @click="handleClick(scope.row)" type="text" size="small"></el-button>
                    <el-button class="el-icon-delete" @click="deleteonSubmit(scope.row.id)" type="text" size="small"></el-button>
                </template>
            </el-table-column>
        </el-table>
        <!--表格展示结束-->

        <!-- 管理员添加开始-->
        <el-dialog
                title="添加管理员"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose">
            <el-form :model="form">
                <el-form-item label="管理员名称">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item label="管理员密码">
                    <el-input v-model="form.password" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="onSubmit('this.form')">确认添加</el-button>

                <el-button @click="dialogVisible = false">取 消</el-button>
            </div>
        </el-dialog>
        <!--管理员添加结束-->

        <!-- 编辑表格开始-->
        <el-dialog
                title="修改管理员"
                :visible.sync="updateVisible"
                width="30%"
                :before-close="handleClose">
            <el-form :model="updateform">
                <el-form-item label="管理员名称">
                    <el-input v-model="updateform.name" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item label="管理员密码">
                    <el-input v-model="updateform.password" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="updateonSubmit('this.updateform')">确认修改</el-button>

                <el-button @click="updateVisible = false">取 消</el-button>
            </div>
        </el-dialog>
        <!-- 编辑表格结束-->
    </div>
</template>

<script>
    //引入api
    import allmet from '../../api/login';
    export default {
        name:'admin',
        data(){
            return {
                tableData:[],
                dialogVisible: false,
                updateVisible:false,
                form:{
                    name:'',
                    password:''
                },
                updateform:{
                    name:'',
                    password:''
                }
            }
        },
        methods:{
            getData(){
                allmet.querys().then(res=>{
                    this.tableData = res.data.data;
                })
            },
            handleClose() {
                this.updateVisible = false;
                this.dialogVisible = false
            },
            onSubmit(){
                this.dialogVisible = false;
                allmet.add(this.form).then(res=>{
                    if(res.data.code==1){
                        this.form.id=res.data.id;
                        this.tableData.push(this.form);
                        this.form={name:'',password:''};
                        this.$message.success('数据插入成功')
                    }else if(res.data.code==0){
                        this.$message.error('数据插入失败')
                    }
                })
            },
            handleClick(row) {
                this.updateVisible=true;
                this.updateform=row;
            },
            updateonSubmit(){
                allmet.update(this.updateform).then(res=>{
                    if(res.data.code==1){
                        this.$message.success('数据修改成功！');
                        this.updateVisible=false
                    }else if(res.data.code==0){
                        this.$message.error('数据修改失败！');
                    }
                })
            },
            deleteonSubmit(id){
                let ids=id;
                allmet.deletes(id).then(res=>{
                    if(res.data.code==1){
                        this.$message.success('数据删除成功');
                        let newtableData=this.tableData.filter(ele=>ele.id!=ids);
                        this.tableData=newtableData
                    }else if(res.data.code==0){
                        this.$message.error('数据删除失败');
                    }
                })
            }
        },
        beforeMount() {
            this.getData()
        }
    }
</script>

<style scoped>

</style>