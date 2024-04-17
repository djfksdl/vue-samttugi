<template>
    <div class="wrap">
        <!-- 헤더 -->
        <AppHeader />

        <!-- container 부분 -->
        <div class="MpOrderContainer">
            <!-- 왼쪽내용영역 -->
            <div class="MpLeft">
                <!--nav-->
                <div class="sidetop">
                    <h2>마이페이지</h2>
                    <ul class="mypageMenu">
                        <li>쇼핑정보</li>
                        <li><router-link to="/mypage">주문배송조회</router-link></li>
                        <li>회원정보</li>
                        <li><router-link to="/modify">회원정보수정</router-link></li>
                    </ul>
                </div>
                <div class="sidebottom">
                    <img src="@/assets/images/mypage_banner2.png" alt="">
                </div>
            </div>
            <!-- 오른쪽내용영역 -->
            <div class="MpRight ">


                <h2 class="mbModifytxt">회원 정보 수정</h2>
                <div class="advImgBox">
                    <form v-on:submit.prevent="modifyMember" method="put">
                        <div class="id-group">
                            <label class="id" for="id">아이디</label>
                            <span id="fixid">{{ usersVo.id }}</span>
                        </div>
                        <div class="form-blank">
                            <label for="password">비밀번호*</label>
                            <input type="password" id="password" v-model="usersVo.password" required>
                        </div>
                        <div class="form-blank">
                            <label for="confirmPassword">비밀번호 확인*</label>
                            <input type="password" id="confirmPassword" v-model="usersVo.password" required>
                        </div>
                        <div class="form-blank">
                            <label for="email">이메일*</label>
                            <input type="email" id="email" v-model="usersVo.email" required>
                        </div>
                        <div class="form-blank">
                            <label class="address" for="address">주소</label>
                            <textarea class="addressbox" v-model="usersVo.address"></textarea>
                            <button type="button" class="postal" v-on:click="postalCode">주소검색</button>
                        </div>
                    
                        <button type="submit" class="mdfBtn" v-on:click="updateInfo">회원정보수정</button>
                    </form>
                    <img class="advImg" src="@/assets/images/goodsbanner.png" alt="굿즈홍보배너">

                    
                </div>
            </div>


        </div>

        <!-- 푸터 -->
        <AppFooter />
    </div>
</template>

<script>
import axios from "axios";
import "@/assets/css/mypage/MyPageOrder.css"
import "@/assets/css/mypage/modifyform.css"
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';
export default {
    name: "ModifyFormView",
    components: {
        AppFooter,
        AppHeader
    },
    data() {
        return {
            usersVo:{
                id:'',
                password: '',
                email: '',
                address: ''
            }
        };
    },
    methods: {
        modifyform() {
            console.log("modifyForm");
            console.log(this.usersVo);
            //서버로 전송
            axios({
                method: 'get', // put, post, delete  //불러오는것은 GET //저장은 POST
                url: 'http://localhost:9009/api/user/modify', //''따옴표 문법도 중요
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                    , "Authorization": "Bearer " + this.$store.state.token
                },
                //params: guestbookVo, //get방식 파라미터로 값이 전달 @ModelAttribute
                data: this.usersVo.userNo, //put, post, delete 방식 자동으로 JSON으로 변환 전달 @RequestBody

                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response.data.apiData); //수신데이타
                
                this.usersVo = response.data.apiData;

            }).catch(error => {
                console.log(error);
            });

        },
    },
    created() {
        this.modifyform();
     }
};
</script>