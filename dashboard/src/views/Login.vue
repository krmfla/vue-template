<template>
    <div class="login">
        <div class="login-background"></div>
        <div class="logo"></div>
        <div class="login-box card text-center">
            <h1 class="login-title">Friendo 後台管理系統</h1>
            <h2 class="login-desc">請登入帳號</h2>
            <GoogleLogin/>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import GoogleLogin from '@/components/GoogleLogin.vue'

export default {
  name: 'login',
  components: {
    GoogleLogin
  }
}
</script>

<style lang="scss">
.login {
    width:100%;
    height:100%;
    position:relative;
}

.logo {
    width: 70px;
    height: 80px;
    // background-image: url('../images/logo.png');
    position: absolute;
    top: 30px;
    left: 30px;
    z-index: 2;
    background-size: 100%;
    background-repeat: no-repeat;
}

.login-background {
    width: 100%;
    height: 100%;
    position: relative;
    background-color: white;
    &::after {
        content: '';
        width: 100%;
        height: 100%;
        background-image: url('../images/login.jpg');
        opacity: 1;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        position: absolute;
        top: 0;
        left: 0;
    }
}

.login-box {
    width: 100%;
    max-width: 450px;
    padding: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 8px;
    box-sizing: border-box;
}

.login-title {
    text-align: center;
    font-size: 26px;
    color: white;
    font-weight: 700;
    margin-bottom: 25px;
    letter-spacing: 2px;
    text-shadow: 0 0 6px white;
}

.login-desc {
    text-align: center;
    font-size: 16px;
    color: white;
    font-weight: 700;
    margin-bottom: 25px;
    text-shadow: 0 0 6px white;
}

.login-btn {
    padding: 10px 20px;
    background-color: rgba(0, 0, 0, 0);
    border: 2px solid #FF9800;
    margin: 0 auto;
    border-radius: 5px;
    display: block;
    color: #FF9800;
    cursor: pointer;
}

#customBtn {
    padding: 10px 20px;
    background-color: transparent;
    border: 2px solid white;
    margin: 0 auto;
    border-radius: 5px;
    display: inline-block;
    color: white;
    cursor: pointer;
    margin-top: 30px;
    letter-spacing: 1px;
    text-shadow: 0 0 6px white;
    box-shadow: 0 0 6px white;
}

span.buttonText {
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;
    font-weight: bold;
}

.text-center {
    text-align: center;
}
</style>