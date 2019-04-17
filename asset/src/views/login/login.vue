<template>
    <div class="box">
        <title>后台登陆</title>
        <div class="logo">
            <img src="https://asset.yideamobile.com/Content/assets/images/login-logo.gif?t=20180504" alt=""
                 class="logoimg">
            <label class="logo-text">固定资产云系统</label>
        </div>
        <div class="formBox">
            <h3 ref="h3" style="color: #668eff;">管理员登陆</h3>
            <el-form ref="form" :model="form" :rules="rules">
                <el-form-item prop="name">
                    <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="form.password" placeholder="请输入密码" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit" style="margin-top: 10px;min-width: 300px;border-radius: 20px;margin-bottom: 10px">登陆</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import Login from '../../api/login'

    export default {
        name: "login",
        data() {
            return {
                form: {
                    name: '',
                    password: ''
                },
                rules: {
                    name: [
                        {required: true, message: '请输入用户名', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        {min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            onSubmit() {
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        Login.check(this.form).then(res => {
                            if (res.data.code == 1) {
                                this.$message.success('登陆成功');
                                // router route
                                this.$router.push('/main');
                            } else {
                                this.$message({
                                    message: '登陆失败',
                                    type: 'warning'
                                })
                            }
                        })
                    }
                })
            }
        }
    }
</script>
<style>

</style>
<style scoped>
    .box {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: url("./img/login-bg.jpg") center / cover;
    }

    .formBox {
        width: 25%;
        height: auto;
        background: #fff;
        border-radius: 10px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        padding: 22px;
        padding-bottom: 0;
    }

    .formBox > h3 {
        font-weight: normal;
        font-size: 24px;
        line-height: 2;
        margin-bottom: 20px;
    }

    .logo {
        display: block;
        text-align: center;
        margin: auto;
        margin-top: 160px;
    }

    .logo .logoimg {
        width: 150px;
        display: inline-block;
        vertical-align: middle;
    }


    .logo .logo-text {
        font-size: 24px;
        color: #fff;
        border-left: solid 1px #fff;
        vertical-align: middle;
        padding-left: 30px;
        line-height: 40px;
        margin-left: 20px;
    }

    label {
        font-weight: 400;
    }

    label {
        display: inline-block;
        max-width: 100%;
        margin-bottom: 5px;
        font-weight: bold;
    }
</style>