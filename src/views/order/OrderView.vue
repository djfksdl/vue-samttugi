<template>
    <div class="wrap">

        <!-- 헤더 -->
        <AppHeader/>

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
                            <span class="op-count">2</span>
                        </div>
                    </div>
    
                    <div class="productBox">
                        <img src="" alt="">
                        <p>진비빔면 용기 132G</p>
                        <p class="p-count">0개</p>
                        <b class="p-charge">0,000원</b>
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
                            <p>이연수</p>
                            <p>010-1234-1234</p>
                            <p>1234@naver.com</p>
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
                            <p>등록된 기본배송지가 없습니다.배송지를 추가해주세요.</p>
                            <select name="" id="">
                                <option value="">배송 요청사항</option>
                                <option value="">부재시 경비실에 맡겨주세요.</option>
                                <option value="">택배보관함에 보관해주세요.</option>
                                <option value="">부재시 문 앞에 놔주세요.</option>
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
                            <div class="pay-select kakao" v-on:click="btnActive"></div>
                            <div class="pay-select naver" v-on:click="btnActive"></div>
                            <div class="pay-select payco" v-on:click="btnActive"></div>
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
                        <input type="checkbox" name="checkBox" id="pay-agree">
                        <label for="pay-agree"><b>(필수) </b>위 내용을 확인하였으며 결제에 동의합니다.</label>
                    </div>
                    <div>
                        <input type="checkbox" name="checkBox" id="use-agree">
                        <label for="use-agree"><b>(필수) </b>이용약관 동의</label>
                    </div>
                    <div>
                        <input type="checkbox" name="checkBox" id="private-agree">
                        <label for="private-agree"><b>(필수) </b>개인정보 수집, 이용에 관한 동의</label>
                    </div>
                </div>
    
                <ul class="aSide-last-text">
                    <li>· 미성년자가 결제 시 법정대리인이 그 거래를 취소할 수 있습니다.</li>
                    <li>· 주문 취소 시 결제하신 수단으로만 환불됩니다.</li>
                </ul>
    
                <button class="orderBtn" type="submit">00원 주문하기</button>
    
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
                        <b>최종 결제금액</b>
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
                </div><!-- //b-top -->
    
                <button class="orderBtn" type="submit">00원 주문하기</button>
    
            </div><!-- //bSid -->
        </div><!-- //inner -->

        <!-- 푸터 -->
        <AppFooter/>

    </div><!-- //wrap -->
</template>
<script>
import '@/assets/css/cart/cart.css'
import '@/assets/css/order/order.css'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
    name: "OrderView",
    components: {
        AppHeader,
        AppFooter
    },
    data() {
        return {};
    },
    methods: {
        btnActive(event) {

            console.log(event.target);

            document.querySelector('.credit').style.border = '1px solid #dfdede';
            document.querySelector('.credit').style.color = '#2c2c2c';
            document.querySelector('.kakao').style.border = '1px solid #dfdede';
            document.querySelector('.naver').style.border = '1px solid #dfdede';
            document.querySelector('.payco').style.border = '1px solid #dfdede';
            document.querySelector('.acount').style.border = '1px solid #dfdede';
            document.querySelector('.acount').style.color = '#2c2c2c';
            document.querySelector('.live').style.border = '1px solid #dfdede';
            document.querySelector('.live').style.color = '#2c2c2c';

            event.target.style.border = "1px solid #e0123e";
            event.target.style.color = "#e0123e";
        },
        allAgree() {
            if(document.querySelector('#all-agree').checked == true) {
                for(let i=0; i<3; i++) {
                    document.getElementsByName("checkBox")[i].checked=true;
                }
            } else {
                for(let i=0; i<3; i++) {
                    document.getElementsByName("checkBox")[i].checked=false;
                }
            }
        },
    },
    created(){}
};
</script>
<style></style>