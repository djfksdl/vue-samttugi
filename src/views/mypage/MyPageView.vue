<template>
    <div>
        <div class="wrap">
            <!-- 헤더 -->
            <AppHeader/>

            <!-- container 부분 -->
            <div class="MpOrderContainer">
                <!-- 왼쪽내용영역 -->
                <div class="MpLeft">
                    <!--nav-->
                    <div class="sidetop">nav</div>
                    <div class="sidebottom">bener</div>
                </div>
                <!-- 오른쪽내용영역 -->
                <div class="MpRight">
                    <!-- about영역 -->
                    <div class="MpRightAbout">
                        <!-- 주문조회 -->
                        <div class="orderCheckBox">
                            <h1>주문/조회</h1>
                            <label for="date">
                                <input type="date" id="" max="2024-12-30" min="2024-01-01" value="2024-03-19">
                            </label>
                        </div>
                        <!-- 날짜별 주문목록 -->
                        <div class="orderListByDate">

                            <div class="orderByDate" > 
                                <p class="orderDay">2024-04-17</p>
                                <div class="ordercomplete">
                                    <img src="@/assets/images/logo.png" class="orderCompleteImg">
                                    <div class="buy">
                                        <p>구매확정 - 4/17(수)</p>
                                        <p>가격 0,000원</p>
                                        <p>제품명</p>
                                    </div>
                                </div>
                            </div>

                            <div class="orderByDate" > 
                                <p class="orderDay">2024-04-18</p>
                                <div class="ordercomplete">
                                    <img src="@/assets/images/logo.png" class="orderCompleteImg">
                                    <div class="orderCompleteInfo">
                                        <p>구매확정 - 4/17(수)</p>
                                        <p>가격 0,000원</p>
                                        <p>제품명</p>
                                    </div>
                                </div>
                                <div class="ordercomplete">
                                    <img src="@/assets/images/logo.png" class="orderCompleteImg">
                                    <div class="buy">
                                        <p>구매확정 - 4/17(수)</p>
                                        <p>가격 0,000원</p>
                                        <p>제품명</p>
                                    </div>
                                </div>
                                <div class="ordercomplete">
                                    <img src="@/assets/images/logo.png" class="orderCompleteImg">
                                    <div class="buy">
                                        <p>구매확정 - 4/17(수)</p>
                                        <p>가격 0,000원</p>
                                        <p>제품명</p>
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
import "@/assets/css/mypage/MyPageOrder.css"
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
    name: "MyPageOrder",
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