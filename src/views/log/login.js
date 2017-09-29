import cookie from 'js-cookie'

export default {
    data() {
        return {
            logining: false,
            form: {
                account: 'admin',
                checkPass: '123456'
            },
            rules: {
                account: [
                    { 
                        required: true, 
                        message: '请输入账号', 
                        trigger: 'blur' 
                    }
                ],
                checkPass: [
                    {
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur'
                    }
                ]
            },
            checked: true
        }
    },
    methods: {
        handleSubmit() {
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    this.logining = true
                    setTimeout(() => {
                        this.logining = false
                        cookie.set('isLogin', 'yes')
                        this.$message({
                            message: '登录成功',
                            type: 'success'
                        })
                        setTimeout(() => {
                            this.$router.push('/main')
                        }, 1000)
                    }, 1000)
                }
                else {
                    return false
                }
            })
        }
    }
}