<template>
    <div>
        <header>
            <div class="headerInner">
                <!-- 헤더 상단 -->
                <div class="headerTop">
                    <!-- 로고 -->
                    <router-link to="/manager"><img src="@/assets/images/logo.png " class="logo"></router-link>

                    <!-- 헤더 우측상단 버튼들 -->
                    <div class="headerTopBtnBox">
                        <ul class="headerMenu">
                            <li><router-link to="/insertform">상품추가</router-link></li>
                            <li><router-link to="">매출현황</router-link></li>
                        </ul>
                        <router-link to="">
                            <img src="@/assets/images/icon_login.svg">
                            <p>로그인</p>
                        </router-link>
                        <!--<router-link to="">
                            <img src="@/assets/images/home.png">
                            <p>홈</p>
                        </router-link>-->
                    </div>
                </div>
                <!-- 헤더 하단 -->

            </div>
        </header>
    </div>
</template>
<script>
export default {
    name: "AppHeader",
    components: {},
    data() {
        return {};
    },
    methods: {},
    created() { }
};
</script>