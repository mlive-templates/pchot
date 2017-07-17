<template>
    <div id="app">
        <header>
            <div class="login fr" v-show="!islogin" @click="login">登录</div>
            <div class="logout fr" v-show="islogin" @click="logout">注销</div>
        </header>
        <h1>Hello Mtimei</h1>
        <div class="pic"></div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data: function () {
            return {
                islogin: false
            }
        },
        methods: {
            login() {
                this.$ajax.post('/api/admin/login').then(res => {
                    this.islogin = !this.islogin
                    console.log(res)
                })
            },
            logout() {
                this.$ajax.get('/admin/logout').then(res => {
                    this.islogin = !this.islogin
                    console.log(res)
                })
            }
        }
    }
</script>

<style lang="less">
    body {
        max-width: 960px;
        margin: 0 auto;
    }

    header {
        overflow: hidden;
    }

    .fr {
        float: right;
        padding-right: 20px;
        padding-top: 10px;
        color: #2345ff;
        cursor: pointer;
        font-size: 20px;
    }

    .pic {
        background-image: url('../assets/image/logo.jpg');
        background-repeat: no-repeat;
        background-position: center center;
        height: 200px;
    }

    h1 {
        color: #f90;
        border-bottom: 2px blue solid;
        text-align: center;
        padding: 8px 0;
    }
</style>