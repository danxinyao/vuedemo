import { menuList } from '../../data/menu.js'
import cookie from 'js-cookie'

export default {
    data() {
        return {
            sysName: '后台管理系统',
            userInfo: {
                name: '曹大大',
                head: ''
            },
            menuList: []
        }
    },
    mounted() {
        this.menuList = menuList
    },
    methods: {
        handleDropdown(command) {
            if (command === 'logout') {
                this.$confirm('确定退出吗？', '提示', { type: 'warning' }).then(() => {
                    this.$message({
                        message: '退出登录成功',
                        type: 'success'
                    })
                    cookie.remove('isLogin')
                    this.$router.push('/log')
                }).catch(() => {

                })
            }
        }
    }
}