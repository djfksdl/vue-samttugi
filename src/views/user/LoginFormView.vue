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
                <input type="text" id="id" v-model="usersVo.id">
                <button class="dvcheck" v-on:click="idCheck" type="button">중복체크</button><br>
            </div>
            <div class="form-field">
                <label for="password">비밀번호*</label>
                <input type="password" id="password" v-model="usersVo.password" required>
            </div>
            <div class="form-field">
                <label for="name">이름*</label>
                <input type="text" id="name" v-model="usersVo.userName" required>
            </div>
            <div class="form-field">
                <label for="phone">휴대폰번호*</label>
                <input type="tel" id="phone" v-model="usersVo.hp" required>
            </div>
            <div class="form-field">
                <label for="email">이메일*</label>
                <input type="email" id="email" v-model="usersVo.email" required>
            </div>

            <h3>선택정보</h3>
            <hr />
            <div class="radioGender">
                <label for="gender" id="gender">성별</label>
                <input type="radio" name="gender" id="male" value="Male" v-model="usersVo.gender">남성
                <input type="radio" name="gender" id="female" value="Female" v-model="usersVo.gender">여성
            </div>
            <div class="form-field">
                <label class="address" for="address">주소</label>
                <textarea class="addressbox" v-model="usersVo.address"></textarea>
                <button type="button"  v-on:click="postalCode">우편번호</button>
            </div>
            <div class="form-field">
                <label for="birthdate">생년월일</label>
                <input type="date" id="birthdate" v-model="usersVo.birthdate">
            </div>



            <button type="submit" class="submitForm">회원가입</button>
        </form>
    </div>
    <AppFooter />
    <!--//footer-->
</template>

<script>
import axios from "axios";
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
        return {
            usersVo:{
                id: "",
                password: "",
                userName: "",
                phone: "",
                email: "",
                gender: "",
                address: "",
                birthdate: ""

            },
            check: 0,
            isDuplicated: false,
            isNotDuplicated: false
        
        };
    },
    methods: {
        idCheck() {
            console.log("=============================");
            console.log(this.usersVo.id);
            if (this.usersVo.id == "") {
                alert("아이디를 입력해주세요")
            } else {
                console.log(this.usersVo);
                axios({
                    method: 'post', // put, post, delete
                    url: 'http://localhost:9009/api/user/idcheck',
                    headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                    //params: userVo, //get방식 파라미터로 값이 전달
                    data: this.usersVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
                    responseType: 'json' //수신타입
                }).then(response => {
                    console.log(response.data); //수신데이타

                    if (response.data == 0) {
                        alert("사용가능한 아이디입니다.");
                        this.isNotDuplicated = true;
                        this.isDuplicated = false;
                        this.check = 1;
                    } else {
                        alert("이미 사용중인 아이디입니다.")
                        this.isDuplicated = true;
                        this.isNotDuplicated = false;
                    }

                }).catch(error => {
                    console.log(error);
                });
            }
        },
        signup() {
            console.log(this.usersVo)
                axios({
                    method: 'post', // put, post, delete 
                    url: 'http://localhost:9009/api/user/join',
                    headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                    //params: usersVo, //get방식 파라미터로 값이 전달
                    data: this.usersVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
                    responseType: 'json' //수신타입
                }).then(response => {
                    console.log(response.data); //수신데이타

                    if (response.data == 1) {
                        alert("축하합니다. 회원가입에 성공하셨습니다.");
                        console.log("-----------------------------------");
                        console.log(this.usersVo.userName);
                        this.$router.push({ path: '/loginsuccess', query: { name: this.usersVo.userName } });
                        console.log("-----------------------------------");
                    } else {
                        alert("회원가입에 실패하였습니다.");
                    }


                }).catch(error => {
                    console.log(error);
                });

        }
    },
    created() { }
};
</script>