<template>
    <el-menu
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#409eff"
            unique-opened
            :collapse="isCollapse"
            :collapse-transition="false"
            :router="true"
            :default-active="activeMenu">
        <el-submenu :index="item.id+''" v-for="item in menuList" :key="item.id">
            <template slot="title">
                <i :class="iconsObject[item.id]"></i>
                <span>{{item.title}}</span>
            </template>

            <el-menu-item :index="item.path+it.path" v-for="it in item.slist" :key="it.id" @click="saveNavState(item.path+it.path)">
                <template slot="title">
                    <i :class="iconsObject[item.id]"></i>
                    <span>{{it.title}}</span>
                </template>
            </el-menu-item>
        </el-submenu>
    </el-menu>
</template>

<script>
    export default {
        name: "Sidebar",
        computed: {
            activeMenu() {
                const route = this.$route
                const { meta, path } = route
                // if set path, the sidebar will highlight the path you set
                if (meta.activeMenu) {
                    return meta.activeMenu
                }
                return path
            },
        },
        data() {
            return {
                menuList: [],
                iconsObject: {
                    '100': 'el-icon-s-home',
                    '102': 'el-icon-s-home',
                    '200': 'el-icon-document',
                    '201': 'el-icon-document',
                    '202': 'el-icon-document',
                    '300': 'el-icon-collection',
                    '301': 'el-icon-collection',
                    '302': 'el-icon-collection',
                    '400': 'el-icon-collection-tag',
                    '401': 'el-icon-collection-tag',
                    '402': 'el-icon-collection-tag',
                    '500': 'el-icon-s-comment',
                    '502': 'el-icon-s-comment',
                    '600': 'el-icon-files',
                    '602': 'el-icon-files',
                    '700': 'el-icon-setting',
                    '702': 'el-icon-setting',
                },
                isCollapse: false,
                // activePath: ''
            }
        },
        methods: {
            getMenuList() {
                const menuList = [
                    {
                        "id": '100',
                        "path": "/admin",
                        "slist": [
                            {"id": 101, "path": "/index", "title": "管理首页"}
                        ],
                        "title": "管理首页"
                    },
                    {
                        "id": '200',
                        "path": "/admin",
                        "slist": [
                            {"id": 201, "path": "/blogs", "title": "文章列表"},
                            {"id": 202, "path": "/blogs/input", "title": "新建文章"}
                        ],
                        "title": "文章管理"
                    },
                    {
                        "id": '300',
                        "path": "/admin",
                        "slist": [
                            {"id": 301, "path": "/types", "title": "分类列表"},
                            {"id": 302, "path": "/types/input", "title": "新建分类"}
                        ],
                        "title": "分类管理"
                    },
                    {
                        "id": '400',
                        "path": "/admin",
                        "slist": [
                            {"id": 401, "path": "/tags", "title": "标签列表"},
                            {"id": 402, "path": "/tags/input", "title": "新建标签"}
                        ],
                        "title": "标签管理"
                    },
                    {
                        "id": '500',
                        "path": "/admin",
                        "slist": [
                            {"id": 501, "path": "/comments", "title": "评论管理"}
                        ],
                        "title": "评论管理"
                    },
                    {
                        "id": '600',
                        "path": "/admin",
                        "slist": [
                            {"id": 601, "path": "/pages", "title": "页面管理"}
                        ],
                        "title": "页面管理"
                    },
                    {
                        "id": '700',
                        "path": "/admin",
                        "slist": [
                            {"id": 701, "path": "/setting", "title": "博客设置"}
                        ],
                        "title": "博客设置"
                    }
                ]

                this.menuList = menuList
            },
            saveNavState(activePath){
                // window.sessionStorage.setItem('activePath',activePath);// 存放点击的二级菜单
                // this.activePath = activePath;// 给点击的菜单添加高亮
            },
            collapse(isCollapse) {
                this.isCollapse = isCollapse
            },
        },
        created() {
            this.getMenuList()
            // this.activePath = window.sessionStorage.getItem('activePath')// 取出session里的访问路径
        }
    }
</script>

<style lang="less" scoped>

</style>