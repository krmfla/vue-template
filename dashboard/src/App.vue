<!-- main template -->
<template>
  <div id="app">
    
    <div id="nav" class="hide">
      <router-link to="/">Home</router-link>
      <router-link to="/index">Index</router-link>
      <router-link to="/login">Login</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
      return {
        production: false,
        is_local: false
      }
  },
  methods: {
    access_control: function() {
      var login_info = sessionStorage.getItem('JWT');
      var login_name = sessionStorage.getItem('name');

      if (!login_info) { // 尚未登錄
          if (location.pathname.indexOf("/login") < 0) { // 且不在登錄頁
              window.alert("請先登入");
              window.location.href = "login";
          }
      } else { // 已登錄
          if (location.pathname.indexOf("/login") > -1) { // 在登錄頁
              window.location.href = "/index";
          } else {
            this.bind_account_info(login_name);
          }
      }
    },
    bind_account_info: function(login_name) {
      var logout_btn;
      var element = "<div style='color:#333;font-size:16px;position: absolute;right: 60px;line-height: 54px;font-weight:500;'>"
          + "<span id='login_name'>Hello! " + login_name + "</span>"
          + "<a id='google-logout' style='margin-left:15px;cursor:pointer;color: #1e88e5;font-weight: 500;'>登出</a>"
          + "<div>";
      // TODO: need refactoring for account section
      document.querySelector("#header").innerHTML = element;
      logout_btn = document.querySelector("#google-logout");

      logout_btn.addEventListener("click", function() {
        var check = confirm('是否確定登出');
        if (check == true) {
            sessionStorage.removeItem('JWT');
            sessionStorage.removeItem('name');
            window.location.href = "login";
        }
      });
    }
  },
  mounted: function() {
    this.access_control();
  }
}
</script>

<style lang="scss">
body {
  margin:0;
  width:100vw;
  height:100vh;
}

.hide {
  display:none;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:100%;
  height:100%;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    margin-right:10px;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
