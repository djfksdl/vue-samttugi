<template>
    <div class="wrap">

        <!-- 헤더 -->
        <AppHeader/>

        <div class="inner">
            <div class="location">
                <ul>
                    <li>홈</li>
                    <li>장바구니</li>
                </ul>
            </div>
    
            <div class="title">
                <h1>장바구니</h1>
            </div>
    
            <div class="aSide">
                <div class="countBox">
                    <span>일반배송</span>
                    <span class="count">0</span>
                </div>
    
                <div class="selectBox">
                    <div class="inputBox">
                        <input checked="checked" type="checkbox" name="" id="">
                        <span>전체선택</span>
                    </div>
    
                    <p class="seldelBtn">선택삭제</p>
                </div>
    
                <div class="productBox">
                    <input checked="checked" type="checkbox" name="" id="">
                    <img src="" alt="">
                    <p>진비빔면 용기 132G</p>
                    <div class="PnMBtn">
                        <span class="minus" v-on:click="pNM">-</span>
                        <span class="p-num">{{this.pNum}}</span>
                        <span class="plus" v-on:click="pNP">+</span>
                    </div>
                    <b class="p-charge">00원</b>
                    <p class="p-delBtn">X</p>
                </div>
    
                <div class="order-charge">주문금액 00원</div>
                
            </div><!-- //aSide -->
    
            <div class="bSide">
                <div class="b-top">
                    <h2>상품금액</h2>
                    <div>
                        <p>총 상품금액</p>
                        <p><b>00</b>원</p>
                    </div>
                    <div>
                        <p>총 배송비</p>
                        <p><b>00</b>원</p>
                    </div>
                    <div class="final-charge">
                        <b>결제예상금액</b>
                        <b>0,000원</b>
                    </div>
                    <div class="delivery-text">
                        <ul>
                            <li>· 무료배송 혜택 상품 및 배송 유형별 30,000원 이상 구매 시 <br> 무료배송입니다.</li>
                            <li>· 배송 유형 간 교차 합계 금액은 무료배송에 적용되지 않습니다. <br>
                                 (상온 배송+저온 배송 합계 30,000원 무료배송불가)    
                            </li>
                        </ul>
                    </div>
                </div>
                <button class="orderBtn" type="submit">00원 주문하기</button>
            </div><!-- //bSid -->
        </div><!-- //inner -->

        <!-- 푸터 -->
        <AppFooter/>

    </div><!-- //wrap -->
</template>
<script>
import '@/assets/css/cart/cart.css'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
    name: "CartView",
    components: {
        AppHeader,
        AppFooter
    },
    data() {
        return {
            pNum: "1",
        };
    },
    methods: {
        pNP() {
            if(this.pNum > 0) {
                this.pNum++;
            }
        },
        pNM() {
            if(this.pNum > 1 ) {
                this.pNum--;
            }
        },
    },
    created(){}
};
</script>
<style></style>