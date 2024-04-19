<template>
    <div class="wrap">
        <!-- 헤더 -->
        <AppHeader />

        <div class="successBox">
            <p><b>삼뚜기몰</b>을 이용해 주셔서 감사합니다.</p>
            <h1>주문이 성공적으로 완료되었습니다.</h1>
            <img class="del" src="@/assets/images/del.png" alt="배송">
            <h2>고객님의 소중한 상품을 안전하게 배송해 드리겠습니다.</h2>
            <button class="orderBtn" v-on:click="goToHome">홈으로</button>
        </div>

        <!-- 푸터 -->
        <AppFooter />
    </div>
</template>
<script>
import '@/assets/css/cart/cart.css'
import '@/assets/css/order/success.css'

import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
    name: "OrderSuccessView",
    components: {
        AppHeader,
        AppFooter
    },
    data() {
        return {};
    },
    methods: {
        goToHome() {
            this.$router.push("/");
        }
    },
    created() { }
};
</script>