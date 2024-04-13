<template>
    <div>
        <div class="wrap">
            <!-- 헤더 -->
            <AppHeader/>
            <!-- 내용 -->
            <div class="ItemListContainer">
                <div class="ItemListInner">
                    <!-- 경로 -->
                    <div class="channelSrc">
                        <router-link to="">홈</router-link>
                        <router-link to="">라면/컵누들/곤누들</router-link>
                    </div>
                    <!-- 타이틀 -->
                    <h2>라면/컵누들/곤누들</h2>
                    <!-- 상품리스트 -->
                    <div class="ItemListSection">
                        <!-- 탭메뉴 -->
                        <ul class="ItemTapMenu">
                            <li><router-link to="">전체</router-link></li>
                            <li><router-link to="">봉지라면</router-link></li>
                            <li><router-link to="">컵라면</router-link></li>
                            <li><router-link to="">컵누들</router-link></li>
                            <li><router-link to="">라면스프</router-link></li>
                            <li><router-link to="">곤누들</router-link></li>
                            <li><router-link to="">잡채</router-link></li>
                            <li><router-link to="">사리면</router-link></li>
                        </ul>
                        <!-- 상품리스트나열 -->
                        <div class="ItemContentBox">
                            <div class="ItemContentImg">
                                <img src="@/assets/images/JinRamenSpicy.jpg">
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <!-- 푸터 -->
            <AppFooter/>
            
        </div>
    </div>
</template>
<script>
import '@/assets/css/item/item.css'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
export default {
    name: "ItemList",
    components: {
        AppHeader,
        AppFooter
    },
    data() {
        return {};
    },
    methods: {},
    created(){}
};
</script>
<style></style>