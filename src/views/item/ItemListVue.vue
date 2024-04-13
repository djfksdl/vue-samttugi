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
            <!-- 내용 -->
            <div class="container">

            </div>
            <!-- 푸터 -->
            <footer>
                <div class="footerInner">
                    <!-- 푸터 상단 -->
                    <div class="footerTop">
                        <!-- 푸터 상단-왼쪽 -->
                        <div class="footerTopLeft">
                            <!-- 푸터 상단 메뉴 -->
                            <ul class="footerTopNav">
                                <li><router-link to="">오뚜기몰 존재이유</router-link></li>
                                <li><router-link to="">고객센터</router-link></li>
                                <li><router-link to="">이용약관</router-link></li>
                                <li><router-link to="">개인정보처리방침</router-link></li>
                                <li><router-link to="">대량주문문의</router-link></li>
                            </ul>
                            <!-- 푸터 상단 주소 -->
                            <div class="footerTopAddress">
                                <div>
                                    <p>대표이사 황성만</p>
                                    <p>14060 경기 안양시 동안구 흥안대로 405  (평촌동)</p>
                                </div>
                                <div>
                                    <p>
                                        사업자등록번호 138-81-03238
                                        <router-link to="">사업자정보확인</router-link>
                                    </p>
                                    <p>통신판매업신고 제 2003-경기안양-169호</p>
                                </div>
                               <div>
                                    <p>건강기능식품 판매업 신고 제 2007-00002호</p>
                                    <p>개인정보 보호책임 및 청소년보호 책임자 서흥덕</p>
                               </div>
                            </div>
                        </div>
                        <!-- 푸터 상단-오른쪽 -->
                        <div class="footerTopRight">
                            <p>고객센터</p>
                            <p>080-433-8888</p>
                            <p>
                                월~금 09:00~17:00<br>(점심시간 12:30~13:30)<br>
                                토/일/공휴일 휴무
                            </p>
                            <div class="footerBtnBox">
                                <router-link to=""><img src="@/assets/images/icon_insta.png"></router-link>
                                <router-link to=""><img src="@/assets/images/icon_blog.png"></router-link>
                                <router-link to=""><img src="@/assets/images/icon_kakao.png"></router-link>
                                <router-link to=""><img src="@/assets/images/icon_youtube.png"></router-link>
                            </div>
                        </div>
                    </div>
                    <!-- 푸처 하단 -->
                    <div class="footerBottom">
                        <p>Copyright 2020-2023 Ottogi Corp. All Rights Reserved.</p>
                        <router-link to=""><img src="@/assets/images/icon_company.png"></router-link>
                        <router-link to=""><img src="@/assets/images/icon_okitchen.png"></router-link>
                    </div>
                </div>
            </footer>
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