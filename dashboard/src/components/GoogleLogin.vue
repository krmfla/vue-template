<template>
    <!-- TODO: coding style for 2 space? -->
    <div id="customBtn" class="customGPlusSignIn">
        <span class="buttonText">Login</span>
    </div>
</template>

<script>
export default {
    name: 'GoogleLogin',
    props: {
        msg: String
    },
    data() {
        return {
            auth2: null,
            id_token: null,
            google_data: {
                img: null,
                name: null,
                email: null
            }
        }
    },
    methods: {
        init_google_api: function() {
            var vm = this;
            gapi.load('auth2', function () {
                vm.auth2 = gapi.auth2.init({
                    client_id: '670707730619-0c9tvs0avve7pkmct51csp0ko322s96u.apps.googleusercontent.com',
                    cookiepolicy: 'single_host_origin',
                });
                vm.attach_signin(document.getElementById('customBtn'));
            });
        },
        attach_signin: function(element) {
            var vm = this;
            vm.auth2.attachClickHandler(element, {},
                function (google_user) {
                    var profile = google_user.getBasicProfile();
                    vm.google_data.name = profile.getName();
                    vm.google_data.img = profile.getImageUrl();
                    vm.google_data.mail = profile.getEmail();
                    // 登入資訊
                    var signin_data = google_user.getAuthResponse();
                    vm.id_token = signin_data.id_token;
                    // 檢查授權api
                    vm.dataPass(vm.id_token).then(
                        function (success) {
                            // 將token存入sessionStorage
                            sessionStorage.setItem('JWT', success.token);
                            sessionStorage.setItem('name', vm.google_data.name);
                            window.location.href = "index";
                        },
                        function (error) {
                            window.alert('取得授權失敗 (datapass failure) \r\n' + JSON.stringify(error));
                        }
                    )
                }, function (e) {
                    window.alert('目前無授權 \r\n' + JSON.stringify(error));
                }
            );
        },
        dataPass: function(token) {
            var App_ApiUrl;
            if (this.production) {
                App_ApiUrl = "https://asgardian.azurewebsites.net/";
            } else {
                if (this.is_local) {
                    App_ApiUrl = "http://localhost:42144/";
                } else {
                    App_ApiUrl = "https://devapi.friendo.com.tw/";
                }
            }
            return $.ajax({
                async: true,
                crossDomain: true,
                url: App_ApiUrl + "api/projects/auth?code=" + token,
                method: "GET",
                error: function (error) {
                    window.alert('取得授權失敗(datapass error) \r\n' + JSON.stringify(error));
                },
            });
        }

    },
    mounted: function() {
        this.init_google_api();
    }
}
</script>