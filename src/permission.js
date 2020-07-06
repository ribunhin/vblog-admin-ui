
import router from './router'

// 根据路由文件的参数，判断路由登录
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireAuth)) { // 判断该路由是否需要登录权限
        const token = localStorage.getItem('token')
        // console.log('--------------------------------' + token)
        if (token) {
            if (to.path === '/login') {

            } else {
                next()
            }
        } else {
            next({
                path: '/login'
            })
        }
    } else {
        next()
    }
})