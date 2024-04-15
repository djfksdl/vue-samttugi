<template>
    <AppHeader />
    <!-- //header -->
    <div class="signupForm">
        <h2>회원가입</h2>
        <form v-on:submit.prevent="signup" action="">
            <h3>필수정보</h3>
            <hr />
            <div class="form-field">
                <label for="id">아이디*</label>
                <input type="text" id="id" v-model="id" required>
                <button class="dvcheck" v-on:click="idCheck" type="button">중복체크</button><br>
            </div>
            <div class="form-field">
                <label for="password">비밀번호*</label>
                <input type="password" id="password" v-model="password" required>
            </div>
            <div class="form-field">
                <label for="name">이름*</label>
                <input type="text" id="name" v-model="name" required>
            </div>
            <div class="form-field">
                <label for="phone">휴대폰번호*</label>
                <input type="tel" id="phone" v-model="phone" required>
            </div>
            <div class="form-field">
                <label for="email">이메일*</label>
                <input type="email" id="email" v-model="email" required>
            </div>

            <h3>선택정보</h3>
            <hr />
            <div class="radioGender">
                <label for="gender" id="gender">성별</label>
                <input type="radio" name="gender" id="male" value="Male" v-model="gender">남성
                <input type="radio" name="gender" id="female" value="Female" v-model="gender">여성
            </div>
            <div class="form-field">
                <label class="address" for="address">주소</label>
                <textarea class="addressbox" v-model="address"></textarea>
                <button type="button"  v-on:click="postalCode">우편번호</button>
            </div>
            <div class="form-field">
                <label for="birthdate">생년월일</label>
                <input type="date" id="birthdate" v-model="birthdate">
            </div>



            <button type="submit" class="submitForm">회원가입</button>
        </form>
    </div>
    <AppFooter />
    <!--//footer-->
</template>

<script>
import "@/assets/css/user/loginform.css"
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';
export default {
    name: "LoginFormView",
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