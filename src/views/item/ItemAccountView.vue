<template>
    <div>
        <div class="wrap">
            <!-- 헤더 -->
            <AppHeader/>

            <!-- 내용 -->
            <div class="ItemAccountContainer">
                <div class="ItemAccountInner">
                    <!-- 경로 -->
                    <div class="channelSrc">
                        <router-link to="">홈</router-link>
                        <router-link to="">라면/컵누들/곤누들</router-link>
                        <router-link to="">봉지라면</router-link>
                    </div>

                    <!-- 상품내용 -->
                    <div class="ItemAccountSection">
                        <!-- 상품내용 - 왼쪽 -->
                        <div class="ItemAccountLeft">
                            <img src="@/assets/images/JinRamenSpicy.jpg">
                        </div>
                        <!-- 상품내용 - 오른쪽 -->
                        <div class="ItemAccountRight">
                            <div class="ItemAcocuntText">
                                <!-- 텍스트-Top -->
                                <div class="ItemAcocuntTextTop">
                                    <p>진라면 매운맛(120GX5)</p>
                                    <p><span>3580</span>원</p>
                                </div>
                                <!-- 텍스트-Mid -->
                                <ul class="ItemAcocuntTextMid">
                                    <li>
                                        <span>원산지</span>
                                        <p>상품정보 원산지 참조</p>
                                    </li>
                                    <li>
                                        <span>적립정보</span>
                                        <p>로그인 후 적립혜택 제공</p>
                                    </li>
                                    <li>
                                        <span>배송정보</span>
                                        <p>
                                            <span>3000</span>원
                                            <span>실온</span>
                                            <br>
                                            <br>
                                            <span>동일 배송유형 상품 30,000원 이상 구매시 무료</span>
                                        </p>
                                        
                                    </li>
                                    <li>
                                        <span>수량선택</span>
                                        <div class="InputWrapper">
                                            <button type="button" class="minusBtn">-</button>
                                            <input type="text" class="countInput" value="1">
                                            <button type="button" class="plusBtn">+</button>

                                        </div>
                                    </li>
                                </ul>
                                <!-- 텍스트-Bottom -->
                                <div class="ItemAcocuntTextBottom">
                                    <!-- 총금액 -->
                                    <div class="ItemAcocuntTextBottomPrice">
                                        <p>총금액
                                            <strong>3580</strong>
                                            <span>원</span>
                                        </p>
                                    </div>
                                    <!-- 버튼 -->
                                    <div class="ItemAcocuntTextBottomBtn">
                                        <router-link to="">장바구니</router-link>
                                        <router-link to="">바로구매</router-link>
                                    </div>
                                </div>
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
import '@/assets/css/item/itemAccount.css'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
export default {
    name: "itemAccount",
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