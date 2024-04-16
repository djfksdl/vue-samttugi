<template>
    <div>
        <header>
            <div class="headerInner">
                <!-- 헤더 상단 -->
                <div class="headerTop">
                    <!-- 로고 -->
                    <router-link to="/"><img src="@/assets/images/logo.png " class="logo"></router-link>
                    <!-- 헤더 검색창 -->
                    <div class="headerSearch">
                        <input type="text" placeholder="역시 라면은 삼뚜기 라면~🍜">
                        <button class="searchBtn"><img src="@/assets/images/icon_search_21.svg"></button>
                    </div>
                    <!-- 헤더 우측상단 버튼들 -->
                    <div class="headerTopBtnBox">
                        <router-link to="/login">
                            <img src="@/assets/images/icon_login.svg">
                            <p>로그인</p>
                        </router-link>
                        <router-link to="/mypage">
                            <img src="@/assets/images/icon_my.svg">
                            <p>마이페이지</p>
                        </router-link>
                        <router-link to="/cart">
                            <img src="@/assets/images/icon_bag.svg">
                            <p>장바구니</p>
                        </router-link>
                    </div>
                </div>
                <!-- 헤더 하단 -->
                <ul class="headerBottom">
                    <li><router-link to="/itemlist">라면/컵누들/곤누들</router-link></li>
                    <li><router-link to="">카레/짜장/간편렌지</router-link></li>
                    <li><router-link to="">소스/드레싱/양념/식초</router-link></li>
                    <li><router-link to="">캔/통조림/오일</router-link></li>
                    <li><router-link to="">떡볶이/핫도그/간식</router-link></li>
                </ul>
            </div>
        </header>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    
    name: "AppHeader",
    components: {},
    data() {
        return {};
    },
    methods: {
        getCategory(){
            console.log("카테고리 불러오기");
            axios({
                method: 'get', // put, post, delete 
                url: `${this.$store.state.apiBaseUrl}/api/navcategory`,
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                // params: guestbookVo, //get방식 파라미터로 값이 전달
                // data: guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타
            }).catch(error => {
                console.log(error);
            });


        }
    },
    created(){
        this.getCategory();
    }
 };
</script>