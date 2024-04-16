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
                <ul class="headerBottom" >
                    <li v-for="(categoryVo, i) in categoryList" v-bind:key="i"><router-link v-bind:to="`/itemlist/${categoryVo.mcNo}`">{{ categoryVo.mcName }}</router-link></li>
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
        return {
            categoryList:[]
        };
    },
    methods: {
        getCategory(){
            console.log("카테고리 불러오기");
            axios({
                method: 'get', // put, post, delete 
                url: `${this.$store.state.apiBaseUrl}/api/navcategory`,
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response.data.apiData); //수신데이타
                this.categoryList = response.data.apiData;
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