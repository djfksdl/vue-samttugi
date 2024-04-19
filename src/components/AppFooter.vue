<template>
    <div>
        <footer>
            <div class="footerInner">
                <!-- 푸터 상단 -->
                <div class="footerTop">
                    <!-- 푸터 상단-왼쪽 -->
                    <div class="footerTopLeft">
                        <!-- 푸터 상단 메뉴 -->
                        <ul class="footerTopNav">
                            <li><router-link to="">삼뚜기몰 존재이유</router-link></li>
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
                            <router-link to="https://www.instagram.com/ottogi_daily/"><img src="@/assets/images/icon_insta.png"></router-link>
                            <router-link to="https://blog.naver.com/ottogitoday1"><img src="@/assets/images/icon_blog.png"></router-link>
                            <router-link to="https://pf.kakao.com/_paQtC"><img src="@/assets/images/icon_kakao.png"></router-link>
                            <router-link to="https://www.youtube.com/user/Ottogimkt"><img src="@/assets/images/icon_youtube.png"></router-link>
                        </div>
                    </div>
                </div>
                <!-- 푸처 하단 -->
                <div class="footerBottom">
                    <p>Copyright 2020-2023 Ottogi Corp. All Rights Reserved.</p>
                    <router-link to=""><img src="@/assets/images/icon_company.png" class="logo2"></router-link>
                    <router-link to=""><img src="@/assets/images/icon_okitchen.png"></router-link>
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    name: "AppFooter",
    components: {},
    data() {
        return {};
    },
    methods: {},
    created(){}
 };
</script>
<style></style>