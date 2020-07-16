<template>
    <el-container class="m-login-container">
        <el-form @submit.native.prevent :model="loginObj" :rules="loginRules" ref="loginForm" class="m-login-form">
            <div class="m-login-title-container">
                <h3 class="m-title"> 用户登录 </h3>
            </div>
            <el-form-item prop="username">
                <el-input prefix-icon="el-icon-user" v-model="loginObj.username"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input prefix-icon="el-icon-lock" type="password" v-model="loginObj.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
                <el-button @click="resetForm('loginForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </el-container>
</template>

<script>

    export default {
        name: 'login',
        data() {
            return {
                loginObj: {
                    username: 'webbleen',
                    password: '111111'
                },
                loginRules: {
                    username: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                        {min: 3, max: 15, message: '长度在3到15个字符', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'change'}
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        const _this = this
                        this.$axios.post('/user/login', this.loginObj).then(res => {
                            // console.log(res.headers)
                            // console.log(res)
                            const jwt = res.headers['authorization']
                            const userInfo = res.data.data

                            // share date to Storage
                            _this.$store.commit('SET_TOKEN', jwt)
                            _this.$store.commit('SET_USERINFO', userInfo)

                            // get data from Storage
                            // console.log(_this.$store.getters.getUser)

                            _this.$router.push('/admin')

                            _this.$message({
                                message: 'Hi,' + userInfo.nickname + '欢迎登录',
                                type: 'success'
                            })
                        });
                    } else {
                        // console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style lang="less" scoped>

    .mlogo {
        height: 60%;
        margin-top: 10px;
    }

    .m-login-container {
        min-height: 100%;
        width: 100%;
        /*background-color: #333333;*/
        overflow: hidden;
    }

    .m-login-form {
        max-width: 500px;
        margin: 0 auto;
    }

    .m-login-title-container {

    }

    .m-title {
        text-align: center;
    }


</style>
