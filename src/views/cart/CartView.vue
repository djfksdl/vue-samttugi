<template>
    <div class="wrap">

        <!-- 헤더 -->
        <AppHeader />

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
                    <span class="count"></span>
                </div>

                <div class="selectBox">
                    <div class="inputBox">
                        <input checked="checked" type="checkbox" name="" id="">
                        <span>전체선택</span>
                    </div>

                    <p class="seldelBtn"></p>
                </div>

                <div class="productBox" v-bind:key="i" v-for="(dbcartVo, i) in cList">
                    <input checked="checked" type="checkbox" name="" id="">
                    <img src="" alt="">
                    <p class="pName">{{ dbcartVo.productName }}</p>
                    <div class="PnMBtn" v-on:click="cCountUpdate(dbcartVo.productNo, dbcartVo.cCount)">
                        <span class="minus" v-on:click="dbcartVo.cCount -= 1">-</span>
                        <span class="p-count">{{ dbcartVo.cCount }}</span>
                        <span class="plus" v-on:click="dbcartVo.cCount += 1">+</span>
                    </div>
                    <b class="p-charge">{{ (dbcartVo.price * dbcartVo.cCount).toLocaleString('ko-KR') }}</b>
                    <p class="p-delBtn" v-on:click="cartDelete(dbcartVo.productNo)">X</p>
                </div>
                <div class="order-charge">주문금액 <span>{{ this.oderPrice.toLocaleString('ko-KR') }}</span>원</div>


            </div><!-- //aSide -->

            <div class="bSide">
                <div class="b-top">
                    <h2>상품금액</h2>
                    <div class="totalPrice">
                        <p>총 상품금액</p>
                        <p><b>{{ this.oderPrice.toLocaleString('ko-KR') }}</b>원</p>
                    </div>
                    <div class="ifBox" v-if="this.oderPrice < 30000">
                        <div>
                            <p>총 배송비</p>
                            <p><b>3,000</b>원</p>
                        </div>
                        <div class="final-charge">
                            <b>결제예상금액</b>
                            <b>{{ (this.oderPrice + 3000).toLocaleString('ko-KR') }}원</b>
                        </div>
                    </div>
                    <div class="ifBox" v-else>
                        <div>
                            <p>총 배송비</p>
                            <p><b>0</b>원</p>
                        </div>
                        <div class="final-charge">
                            <b>결제예상금액</b>
                            <b>{{ this.oderPrice.toLocaleString('ko-KR') }}원</b>
                        </div>
                    </div>
                    <div class="delivery-text">
                        <ul>
                            <li>· 무료배송 혜택 상품 및 배송 유형별 30,000원 이상 구매 시 <br> 무료배송입니다.</li>
                            <li>· 배송 유형 간 교차 합계 금액은 무료배송에 적용되지 않습니다.</li>
                        </ul>
                    </div>
                </div>
                <button v-if="this.oderPrice < 30000" v-on:click="goToOrderForm" class="orderBtn" type="submit">{{ (this.oderPrice + 3000).toLocaleString('ko-KR') }}원
                    주문하기</button>
                <button v-else v-on:click="goToOrderForm" class="orderBtn" type="submit">{{ this.oderPrice.toLocaleString('ko-KR') }}원
                주문하기</button>
            </div><!-- //bSid -->
        </div><!-- //inner -->

        <!-- 푸터 -->
        <AppFooter />

    </div><!-- //wrap -->
</template>
<script>
import '@/assets/css/cart/cart.css'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

import axios from 'axios';

export default {
    name: "CartView",
    components: {
        AppHeader,
        AppFooter
    },
    data() {
        return {
            cList: [],
            cartVo: {
                saveName: "",
                productName: "",
                cCount: "",
                price: ""
            },
            oderPrice: "",
        };
    },
    methods: {
        // 장바구니 불러오기
        getCartList() {
            console.log("장바구니 불러오기");

            axios({
                method: 'get', // put, post, delete
                url: 'http://localhost:9009/api/cart/list',
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                params: {no: this.$store.state.authUser.userNo}, //get방식 파라미터로 값이 전달
                //data: cList, //put, post, delete 방식 자동으로 JSON으로 변환 전달
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타
                console.log(this.$store.state.authUser.userNo);
                this.cList = response.data.apiData;
                console.log(this.cList);

                this.calculate();

            }).catch(error => {
                console.log(error);
            });
        },
        // 주문금액 계산
        calculate() {
            let oderPrice = 0;
            for (let i = 0; i < this.cList.length; i++) {
                oderPrice += (this.cList[i].price*this.cList[i].cCount);
            }
            this.oderPrice = oderPrice;
        },
        // 장바구니 삭제
        cartDelete(productNo) {
            console.log("장바구니 상품 삭제");

            console.log(productNo);

            axios({
                method: 'delete', // put, post, delete
                url: 'http://localhost:9009/api/cart/list',
                headers: { "Content-Type": "application/json" }, //전송타입
                //params: guestbookVo, //get방식 파라미터로 값이 전달
                data: { productNo: productNo }, //put, post, delete 방식 자동으로 JSON으로 변환 전달
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타

                this.getCartList();

            }).catch(error => {
                console.log(error);
            });
        },
        cCountUpdate(productNo, cCount) {
            console.log("수량변경");
            console.log(productNo);
            console.log(cCount);

            axios({
                method: 'post', // put, post, delete
                url: 'http://localhost:9009/api/cart/list',
                headers: { "Content-Type": "application/json" }, //전송타입
                //params: guestbookVo, //get방식 파라미터로 값이 전달
                data: { productNo: productNo, cCount: cCount }, //put, post, delete 방식 자동으로 JSON으로 변환 전달
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타

                this.getCartList();

            }).catch(error => {
                console.log(error);
            });

        },
        goToOrderForm() {
            this.$router.push("/order");
        },
    },
    created() {
        this.getCartList();
    }
};
</script>
<style></style>