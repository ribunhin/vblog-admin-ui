<template>
    <el-container class="admin-container">
        <el-header>
            <div>
                <img src="../assets/logo.png" alt="" class="logo_img">
                <span>webblog后台管理</span>
            </div>
            <el-button type="info" @click="logout">退出</el-button>
        </el-header>

        <el-container>
            <el-aside :width="isCollapse ? '64px':'200px'">
                <div class="toggle-button" @click="toggleCollapase"><i :class="isCollapse ? 'el-icon-s-unfold':'el-icon-s-fold'"></i></div>
                <Sidebar ref="sidebar" />
            </el-aside>
            <el-main>
                <app-main ref="app-main" />
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import {AppMain, Sidebar} from './components'

    export default {
        components: {
            AppMain,
            Sidebar,
        },
        data() {
            return {
                isCollapse: false,
            }
        },
        methods: {
            logout() {
                const _this = this
                _this.$axios.get('/user/logout', {
                    headers: {
                        'Authorization': localStorage.getItem('token')
                    }
                }).then(res => {
                    _this.$store.commit('REMOVE_INFO')
                    _this.$router.push('/login')
                })
            },
            toggleCollapase() {
                this.isCollapse = !this.isCollapse
                this.$refs.sidebar.collapse(this.isCollapse)
            },
        }
    }
</script>

<style lang="less" scoped>

    .admin-container {
        height: 100%;
        .el-header {
            background-color: #373d41;
            display: flex;
            padding-left: 0%;
            justify-content: space-between; //左右贴边
            align-items: center;
            color: #ffffff;
            font-size: 20px;

            > div {
                display: flex;
                align-items: center;

                span {
                    margin-left: 15px;
                }
            }
        }
        .el-container {
            height: calc(100% - 60px);
        }
    }

    .logo_img {
        height: 100%;
        width: 20%;
    }



    .el-aside {
        background-color: #333744;
        .el-menu {
            border-right: 0;
        }
    }

    .toggle-button {
        background-color: #4A5064;
        line-height: 28px;
        text-align: center;
        color: #909399;;
        cursor: pointer;
    }

</style>