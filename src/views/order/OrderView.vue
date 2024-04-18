<template>
    <div class="wrap">

        <!-- 헤더 -->
        <AppHeader />

        <div class="inner">
            <div class="location">
                <ul>
                    <li>홈</li>
                    <li>주문결제</li>
                </ul>
            </div>

            <div class="title">
                <h1>주문결제</h1>
            </div>

            <div class="aSide">
                <div class="order-product">
                    <div class="sub-title">
                        <div>
                            <span>주문상품</span>
                            <span class="op-count"></span>
                        </div>
                    </div>

                    <div class="productBox" v-bind:key="i" v-for="(dbcartVo, i) in orderList">
                        <img src="" alt="">
                        <p class="pName">{{ dbcartVo.productName }}</p>
                        <p class="p-count">{{ dbcartVo.cCount }}개</p>
                        <b class="p-charge">{{ (dbcartVo.price * dbcartVo.cCount).toLocaleString('ko-KR') }}</b>
                    </div>
                </div>

                <div class="order-info">
                    <div class="sub-title">
                        <span>주문자 정보</span>
                        <span>주문자 정보는 <b>마이페이지 > 회원정보 변경</b>에서 변경하실 수 있습니다.</span>
                    </div>

                    <div class="flex-box">
                        <div>
                            <p>보내는 분</p>
                            <p>휴대전화</p>
                            <p>이메일</p>
                        </div>
                        <div>
                            <p>{{ userInfo.userName }}</p>
                            <p>{{ userInfo.hp }}</p>
                            <p>{{ userInfo.email }}</p>
                        </div>
                    </div>
                </div>

                <div class="delivery-info">
                    <div class="sub-title">
                        <span>배송지 정보</span>
                        <button>배송지등록</button>
                    </div>

                    <div class="flex-box">
                        <div>
                            <p>배송지</p>
                            <p>배송 요청사항</p>
                        </div>
                        <div>
                            <p>{{ userInfo.address }}</p>
                            <select v-model="orderVo.request" name="request" id="">
                                <option disabled>배송 요청사항</option>
                                <option>부재시 경비실에 맡겨주세요.</option>
                                <option>택배보관함에 보관해주세요.</option>
                                <option>부재시 문 앞에 놔주세요.</option>
                            </select>
                        </div>
                    </div>

                </div>

                <div class="payment-box">
                    <div class="sub-title">
                        <span>결제수단</span>

                        <div>
                            <input type="checkbox" name="" id="">
                            <label for="">선택한 결제수단 저장</label>
                        </div>
                    </div>

                    <div class="payment-select">
                        <p>결제수단 선택</p>

                        <div class="pay-icon">
                            <div class="pay-select credit" v-on:click="btnActive">신용카드</div>
                            <div class="pay-select kakao" v-on:click="btnActive">kakao</div>
                            <div class="pay-select naver" v-on:click="btnActive">naver</div>
                            <div class="pay-select payco" v-on:click="btnActive">payco</div>
                            <div class="pay-select acount" v-on:click="btnActive">가상계좌</div>
                            <div class="pay-select live" v-on:click="btnActive">실시간계좌이체</div>
                        </div>
                        <b>· 최초 결제 금액 100원 이상일 때 승인 처리가 가능해요.</b>
                    </div>
                </div>

                <div class="agreement">
                    <div class="sub-title"></div>
                    <div>
                        <input v-on:click="allAgree" type="checkbox" name="" id="all-agree">
                        <label class="all-select" for="all-agree">전체동의</label>
                    </div>
                    <div>
                        <input v-on:click="rAllAgree" type="checkbox" name="checkBox" id="pay-agree">
                        <label for="pay-agree"><b>(필수) </b>위 내용을 확인하였으며 결제에 동의합니다.</label>
                    </div>
                    <div>
                        <input v-on:click="rAllAgree" type="checkbox" name="checkBox" id="use-agree">
                        <label for="use-agree"><b>(필수) </b>이용약관 동의</label>
                    </div>
                    <div>
                        <input v-on:click="rAllAgree" type="checkbox" name="checkBox" id="private-agree">
                        <label for="private-agree"><b>(필수) </b>개인정보 수집, 이용에 관한 동의</label>
                    </div>
                </div>

                <ul class="aSide-last-text">
                    <li>· 미성년자가 결제 시 법정대리인이 그 거래를 취소할 수 있습니다.</li>
                    <li>· 주문 취소 시 결제하신 수단으로만 환불됩니다.</li>
                </ul>

                <button v-if="this.orderPrice < 30000" class="orderBtn" type="submit" v-on:click="goToSuccess">{{
                        (this.orderPrice + 3000).toLocaleString('ko-KR') }}원 주문하기</button>
                <button v-else class="orderBtn" type="submit" v-on:click="goToSuccess">{{
                        this.orderPrice.toLocaleString('ko-KR') }}원 주문하기</button>

            </div><!-- //aSide -->

            <div class="bSide">
                <div class="b-top">
                    <h2>상품금액</h2>
                    <div class="totalPrice">
                        <p>총 상품금액</p>
                        <p><b>{{ this.orderPrice.toLocaleString('ko-KR') }}</b>원</p>
                    </div>
                    <div class="ifBox" v-if="this.orderPrice < 30000">
                        <div>
                            <p>총 배송비</p>
                            <p><b>3,000</b>원</p>
                        </div>
                        <div class="final-charge">
                            <b>최종 결제금액</b>
                            <b>{{ (this.orderPrice + 3000).toLocaleString('ko-KR') }}원</b>
                        </div>
                    </div>
                    <div class="ifBox" v-else>
                        <div>
                            <p>총 배송비</p>
                            <p><b>0</b>원</p>
                        </div>
                        <div class="final-charge">
                            <b>최종 결제금액</b>
                            <b>{{ this.orderPrice.toLocaleString('ko-KR') }}원</b>
                        </div>
                    </div>

                    <div class="delivery-text">
                        <ul>
                            <li>· 무료배송 혜택 상품 및 배송 유형별 30,000원 이상 구매 시 <br> 무료배송입니다.</li>
                            <li>· 배송 유형 간 교차 합계 금액은 무료배송에 적용되지 않습니다.</li>
                        </ul>
                    </div>
                </div><!-- //b-top -->

                <button v-if="this.orderPrice < 30000" class="orderBtn" type="submit" v-on:click="goToSuccess">{{
                        (this.orderPrice + 3000).toLocaleString('ko-KR') }}원 주문하기</button>
                <button v-else class="orderBtn" type="submit" v-on:click="goToSuccess">{{
                        this.orderPrice.toLocaleString('ko-KR') }}원 주문하기</button>

            </div><!-- //bSid -->
        </div><!-- //inner -->

        <!-- 푸터 -->
        <AppFooter />

    </div><!-- //wrap -->
</template>
<script>
import '@/assets/css/cart/cart.css'
import '@/assets/css/order/order.css'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

import axios from 'axios';

export default {
    name: "OrderView",
    components: {
        AppHeader,
        AppFooter
    },
    data() {
        return {
            orderList: [],
            userInfo: {
                userName: "",
                hp: "",
                email: "",
                address: ""
            },
            orderPrice: "",
            orderVo: {
                userNo: this.$store.state.authUser.userNo,
                payment: "",
                request: ""
            },
            orderListVo: {
                orderNo: "",
                productNo: "",
                oCount: "",
                oPrice: ""
            }
        };
    },
    methods: {
        // 결제 방법 체크
        btnActive(event) {

            console.log(event.target);
            let credit = document.querySelector('.credit');
            let kakao = document.querySelector('.kakao');
            let naver = document.querySelector('.naver');
            let payco = document.querySelector('.payco');
            let account = document.querySelector('.acount');
            let live = document.querySelector('.live');

            if (event.target == credit) {
                this.orderVo.payment = "신용카드";
            } else if (event.target == kakao) {
                this.orderVo.payment = "카카오페이";
            } else if (event.target == naver) {
                this.orderVo.payment = "네이버페이";
            } else if (event.target == payco) {
                this.orderVo.payment = "페이코";
            } else if (event.target == account) {
                this.orderVo.payment = "가상계좌";
            } else if (event.target == live) {
                this.orderVo.payment = "실시간계좌이체";
            }

            console.log(this.orderVo.payment);

            credit.style.border = '1px solid #dfdede';
            credit.style.color = '#2c2c2c';
            kakao.style.border = '1px solid #dfdede';
            naver.style.border = '1px solid #dfdede';
            payco.style.border = '1px solid #dfdede';
            account.style.border = '1px solid #dfdede';
            account.style.color = '#2c2c2c';
            live.style.border = '1px solid #dfdede';
            live.style.color = '#2c2c2c';

            event.target.style.border = "1px solid #e0123e";
            event.target.style.color = "#e0123e";
        },
        // 전체동의
        allAgree() {
            if (document.querySelector('#all-agree').checked == true) {
                for (let i = 0; i < 3; i++) {
                    document.getElementsByName("checkBox")[i].checked = true;
                }
            } else {
                for (let i = 0; i < 3; i++) {
                    document.getElementsByName("checkBox")[i].checked = false;
                }
            }
        },
        // 동의사항 체크하면 전체동의도 같이 체크
        rAllAgree() {
            let payAgree = document.querySelector('#pay-agree');
            let useAgree = document.querySelector('#use-agree');
            let privateAgree = document.querySelector('#private-agree');

            if (payAgree.checked == true && useAgree.checked == true && privateAgree.checked == true) {
                document.querySelector('#all-agree').checked = true;
            } else {
                document.querySelector('#all-agree').checked = false;
            }
        },
        // 주문상품 데이터 불러오기
        getOrderList() {
            console.log("주문상품 불러오기");

            axios({
                method: 'get', // put, post, delete
                url: 'http://localhost:9009/api/order/list',
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                params: { no: this.$store.state.authUser.userNo }, //get방식 파라미터로 값이 전달
                //data: cList, //put, post, delete 방식 자동으로 JSON으로 변환 전달
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타
                this.orderList = response.data.apiData;

                this.calculate();

            }).catch(error => {
                console.log(error);
            });
        },
        // 주문자정보 가져오기
        getUserInfo() {
            console.log("유저정보 가져오기");

            axios({
                method: 'get', // put, post, delete
                url: 'http://localhost:9009/api/order/userinfo',
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                params: { no: this.$store.state.authUser.userNo }, //get방식 파라미터로 값이 전달
                //data: cList, //put, post, delete 방식 자동으로 JSON으로 변환 전달
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타
                this.userInfo = response.data.apiData;

            }).catch(error => {
                console.log(error);
            });
        },
        // 결제금액 계산
        calculate() {
            let orderPrice = 0;
            for (let i = 0; i < this.orderList.length; i++) {
                orderPrice += (this.orderList[i].price * this.orderList[i].cCount);
            }
            this.orderPrice = orderPrice;
        },
        // 주문하기
        goToSuccess() {

            let orderInfoVo ={
                orderVo: this.orderVo,
                orderList: this.orderList
            }

            console.log(orderInfoVo)


            let payAgree = document.querySelector('#pay-agree');
            let useAgree = document.querySelector('#use-agree');
            let privateAgree = document.querySelector('#private-agree');

            // 동의사항 체크 확인
            if (payAgree.checked == false || useAgree.checked == false || privateAgree.checked == false) {
                alert("필수 동의사항을 체크해 주세요.");

            } else {
                // 서버 통신 작성
                //orderVo를 axios --> orders db에 저장
                axios({
                    method: 'post', // put, post, delete
                    url: 'http://localhost:9009/api/order/orders',
                    headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                    params: { no: this.$store.state.authUser.userNo }, //get방식 파라미터로 값이 전달
                    data: orderInfoVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
                    responseType: 'json' //수신타입
                }).then(response => {
                    console.log(response); //수신데이타

                    //cart에서 정보 삭제

                    // 주문 성공 화면으로 이동
                    // this.$router.push("/order/success");
                }).catch(error => {
                    console.log(error);
                });
            }
        },
    },
    created() {
        this.getOrderList();
        this.getUserInfo();

    }
};
</script>
<style></style>