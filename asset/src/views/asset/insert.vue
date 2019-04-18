<template>
    <el-form :inline="true" :model="form" class="demo-form-inline" label-width="100px" label-position="right">
        <el-form-item label="资产类别">
            <el-select v-model="form.aid" placeholder="请选择资产分类" style="width: 200px">
                <el-option label="专用设备" value="1"></el-option>
                <el-option label="交通运输设备" value="2"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="标准型号">
            <el-select v-model="form.mid" placeholder="请选择标准型号" style="width: 200px">
                <el-option label="型号1" value="1"></el-option>
                <el-option label="型号2" value="2"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="资产条码">
            <el-input style="width: 200px" v-model="form.barcode" placeholder="资产条码" disabled></el-input>
        </el-form-item>
        <el-form-item label="资产名称">
            <el-input style="width: 200px" v-model="form.ename" placeholder="资产名称"></el-input>
        </el-form-item>
        <el-form-item label="规格型号">
            <el-input style="width: 200px" v-model="form.esizes" placeholder="规格型号"></el-input>
        </el-form-item>
        <el-form-item label="计量单位">
            <el-input style="width: 200px" v-model="form.euom" placeholder="计量单位"></el-input>
        </el-form-item>
        <el-form-item label="SN号">
            <el-input style="width: 200px" v-model="form.sn" placeholder="SN号"></el-input>
        </el-form-item>
        <el-form-item label="来源">
            <el-select v-model="form.source" placeholder="请选择来源" style="width: 200px">
                <el-option label="购入" value="1"></el-option>
                <el-option label="自建" value="2"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="金额">
            <el-input style="width: 200px" v-model="form.eprice" placeholder="金额"></el-input>
        </el-form-item>
        <el-form-item label="管理员">
            <el-select v-model="form.id" placeholder="请选择管理员" style="width: 200px">
                <el-option label="管理员1" value="1"></el-option>
                <el-option label="管理员2" value="2"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="使用人">
            <el-select v-model="form.uid" placeholder="请选择使用人" style="width: 200px">
                <el-option label="使用人1" value="1"></el-option>
                <el-option label="使用人2" value="2"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="使用期限">
            <el-input style="width: 200px" v-model="form.useyears" placeholder="使用期限"></el-input>
        </el-form-item>
        <el-form-item label="存放地点">
            <el-input style="width: 200px" v-model="form.deposit" placeholder="存放地点"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="desc">
            <el-input style="width: 200px" type="textarea" v-model="form.remarks"></el-input>
        </el-form-item>
        <el-form-item label="照片">
            <el-upload
                    class="avatar-uploader"
                    action="/upload"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
        </el-form-item>
        <el-form-item style="width: 90%;margin-left:50px">
            <el-button type="primary" @click="onSubmit" >立即创建</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    import Asset from '../../api/asset';

    const {insert} = Asset;
    export default {
        data() {
            return {
                form: {
                    aid: '',
                    mid: '',
                    barcode: '1',
                    ename: '',
                    esizes: '',
                    euom: '',
                    sn: '',
                    source: '',
                    eprice: '',
                    id: '',
                    uid: '',
                    useyears: '',
                    deposit: '',
                    remarks: '',
                    thumb: ''
                },
                imageUrl: '',
            }
        },
        methods: {
            onSubmit() {
                insert(this.form).then(res => {
                    if (res.data.code == 0) {
                        this.$message.success(res.data.msg);
                    } else {
                        this.$message.error(res.data.msg);
                    }
                })
            },
            handleAvatarSuccess(res) {
                this.form.thumb = res.url;
                this.imageUrl = res.url;
            },
        }
    }
</script>
<style scoped>
</style>
<style>
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }

    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px !important;
        text-align: center;
    }

    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>