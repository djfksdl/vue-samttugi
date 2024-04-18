<template>
    <div class="wrap">
        <AppHeader />
        <!-- //header -->

        <div class="login-container">
            <div class="main-container">
                <div class="container">

                    <img class="loginLogo" src="@/assets/images/logo.png" alt="로고">

                    <div class="logoTitle">엔 다 있다!</div>
                </div>
                <div class="login-form">
                    <form v-on:submit.prevent="login" method="post">
                        <input type="text" placeholder="아이디" v-model="usersVo.id">
                        <input type="password" placeholder="비밀번호" v-model="usersVo.password">
                        <button type="submit" class="loginBtn">로그인</button>
                        <router-link to="/loginform" class="signupBtn" v-on:click.prevent="logoutAndsignup">회원가입</router-link>
                    </form>
                </div>
                <!-- //login-form -->
            </div>
        </div>
        <AppFooter />
        <!--//footer-->
    </div>
</template>


<script>
import axios from 'axios';
import "@/assets/css/user/login.css"
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';
export default {
    name: "LoginView",
    components: {
        AppFooter,
        AppHeader
    },
    data() {
        return {
            usersVo: {
                id: "",
                password: ""
            }
        };
    },
    methods: {
        login(){
            console.log("login");
            console.log(this.usersVo);
            axios({
                method: 'post', // put, post, delete
                url: `${this.$store.state.apiBaseUrl}/api/user/login`,
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                //params: usersVo, //get방식 파라미터로 값이 전달
                data: this.usersVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response.data); //수신데이타 authUser
                
                if(response.data.result == "success"){
                    //로그인 사용자 정보
                    let authUser = response.data.apiData;

                    //token은 응답문서의 헤더에 있음 
                    console.log(response.headers.authorization.split(" ")[1]);
                    //"Authorization Bearer dajofddjaoadfklh.adfafa"
                    const token = response.headers.authorization.split(" ")[1];

                    //vuex 저장
                    this.$store.commit("setAuthUser", authUser);
                    this.$store.commit("setToken", token);

                    console.log(authUser);
                    console.log(token);
                    console.log(authUser.userName);

                    //관리자/유저
                    if (authUser.id === "admin" && authUser.password === "admin") {
                    alert("관리자페이지로 이동합니다.");
                    // 관리자 페이지로 이동하는 코드 작성
                    this.$router.push("/manager");
                    } else {
                    // 일반 사용자일 경우 홈페이지로 이동
                    this.$router.push("/");
                    }

                
                } else {
                    console.log(response.data.message);
                    alert("아이디 패스워드를 확인하세요.");
                }
               

            }).catch(error => {
                console.log(error);
            });
        },
        
        /* login */

        logoutAndsignup(){
            console.log("로그아웃");
            this.$store.commit("setAuthUser", null);
            this.$store.commit("setToken", null);
        }
    },
    created() { 
       
    }
};
</script>


<style></style>