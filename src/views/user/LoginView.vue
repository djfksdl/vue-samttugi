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
                        <input type="text" placeholder="아이디">
                        <input type="password" placeholder="비밀번호">
                        <button type="submit" class="loginBtn">로그인</button>
                        <router-link to="/loginform" class="signupBtn">회원가입</router-link>
                    </form>
                </div>
            </div>
        </div>
        <AppFooter />
        <!--//footer-->
    </div>
</template>


<script>
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
        return {};
    },
    methods: {},
    created() { }
};
</script>


<style></style>