<template>
    <div>
        <div class="wrap">
            <!-- 헤더 -->
            <header>
                <div class="headerInner">
                    <!-- 헤더 상단 -->
                    <div class="headerTop">
                        <!-- 로고 -->
                        <router-link to=""><img src="@/assets/images/logo.png " class="logo"></router-link>
                        <!-- 헤더 검색창 -->
                        <div class="headerSearch">
                            <input type="text" placeholder="역시 라면은 삼뚜기 라면~🍜">
                            <button class="searchBtn"><img src="@/assets/images/icon_search_21.svg"></button>
                        </div>
                        <!-- 헤더 우측상단 버튼들 -->
                        <div class="headerTopBtnBox">
                            <router-link to="">
                                <img src="@/assets/images/icon_login.svg">
                                <p>로그인</p>
                            </router-link>
                            <router-link to="">
                                <img src="@/assets/images/icon_my.svg">
                                <p>마이페이지</p>
                            </router-link>
                            <router-link to="">
                                <img src="@/assets/images/icon_bag.svg">
                                <p>장바구니</p>
                            </router-link>
                        </div>
                    </div>
                    <!-- 헤더 하단 -->
                    <ul class="headerBottom">
                        <li><router-link to="">라면/컵누들/곤누들</router-link></li>
                        <li><router-link to="">카레/짜장/간편렌지</router-link></li>
                        <li><router-link to="">소스/드레싱/양념/식초</router-link></li>
                        <li><router-link to="">캔/통조림/오일</router-link></li>
                        <li><router-link to="">떡볶이/핫도그/간식</router-link></li>
                    </ul>
                </div>
            </header>
            <div class="container">

            </div>
            <footer></footer>
        </div>
    </div>
</template>
<script>
import '@/assets/css/item/item.css'
export default {
    name: "ItemList",
    components: {},
    data() {
        return {};
    },
    methods: {},
    created(){}
};
</script>
<style></style>