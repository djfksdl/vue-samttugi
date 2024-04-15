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
                            <span id="id">DS</span>
                        </div>
                        <div class="form-blank">
                            <label for="password">비밀번호*</label>
                            <input type="password" id="password" v-model="password" required>
                        </div>
                        <div class="form-blank">
                            <label for="confirmPassword">비밀번호 확인*</label>
                            <input type="password" id="confirmPassword" v-model="confirmPassword" required>
                        </div>
                        <div class="form-blank">
                            <label for="email">이메일*</label>
                            <input type="email" id="email" v-model="email" required>
                        </div>

                        <div class="form-blank">
                            <label for="birthdate">생년월일</label>
                            <input type="date" id="birthdate" v-model="birthdate">
                        </div>
                        <div class="form-blank">
                            <label class="address" for="address">주소</label>
                            <textarea class="addressbox" v-model="address"></textarea>
                            <button type="button" class="postal" v-on:click="postalCode">주소검색</button>
                        </div>
                        <div class="form-blank">
                            <label class="address" for="address">배송지</label>
                            <textarea class="addressbox" v-model="address"></textarea>
                            <button type="button" class="postal" v-on:click="postalCode">우편번호</button>
                        </div>
                        <button type="submit" class="mdfBtn" v-on:click="updateInfo">회원정보수정</button>
                    </form>
                    <div class="advImg">

                    </div>
                </div>
            </div>


        </div>

        <!-- 푸터 -->
        <AppFooter />
    </div>
</template>

<script>
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
        return {};
    },
    methods: {},
    created() { }
};
</script>