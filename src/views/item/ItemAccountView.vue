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
                        <router-link to="/">홈</router-link>
                        <router-link to="">라면/컵누들/곤누들</router-link>
                        <router-link to="">봉지라면</router-link>
                    </div>

                    <!-- 상품내용 -->
                    <div class="ItemAccountSection">
                        <!-- 상품내용 - 왼쪽 -->
                        <div class="ItemAccountLeft">
                            <img v-bind:src="`http://localhost:9009/upload/${itemInfo.saveName}`">
                        </div>
                        <!-- 상품내용 - 오른쪽 -->
                        <div class="ItemAccountRight">
                            <div class="ItemAcocuntText">
                                <!-- 텍스트-Top -->
                                <div class="ItemAcocuntTextTop">
                                    <p>{{ itemInfo.productName }}</p>
                                    <p>{{itemInfo.price}}<span></span>원</p>
                                </div>
                                <!-- 텍스트-Mid -->
                                <ul class="ItemAcocuntTextMid">
                                    <li>
                                        <span>원산지</span>
                                        <p>상품정보 원산지 참조</p>
                                    </li>
                                    <li>
                                        <span>상세정보</span>
                                        <p>{{ itemInfo.detail }}</p>
                                    </li>
                                    <li>
                                        <span>배송료&<br>보관방법</span>
                                        <p>
                                            <span>3000</span>원
                                            <span v-if="this.itemInfo.storage ==1">냉동&냉장</span>
                                            <span v-if="this.itemInfo.storage ==2">실온</span>
                                            <br>
                                            <span>동일 배송유형 상품 30,000원 이상 구매시 무료</span>
                                        </p>
                                        
                                    </li>
                                    <li>
                                        <span>수량선택</span>
                                        <div class="InputWrapper">
                                            <button type="button" class="minusBtn" v-on:click="minusBtn()">-</button>
                                            <input type="text" class="countInput" v-model="goCartVo.cCount">
                                            <button type="button" class="plusBtn" v-on:click="plusBtn()">+</button>

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
                                        <router-link to="" v-on:click="goCart()" >장바구니</router-link>
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
        <!-- ======== 모달창 ======== -->
        <div class="ItemAccountModal" v-bind:class="{'modal-on': isMaodal}">
            <div class="ItemAccountModal-content">
                <div>
                    <p>선택하신 상품을 결제하시겠습니까?</p>
                    <buttom>계속 쇼핑하기</buttom>
                    <buttom>결제하기</buttom>
                </div>
            </div>

        </div>
    </div>
 </template>
<script>
import axios from 'axios';
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
        return {
            itemInfo:[],
            goCartVo:{
                cCount:1,
                productNo: this.$route.params.no,
                userNo: this.$store.state.authUser.userNo
            }
        };
    },
    methods: {
        // 선택한 상품 정보 불러오기
        getItemInfo(){
            // console.log(this.no);

            axios({
                method: 'get', // put, post, delete 
                url: `${this.$store.state.apiBaseUrl}/api/itemInfoBypNo`,
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                params: {no:this.goCartVo.productNo}, //get방식 파라미터로 값이 전달
                // data: guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response.data.apiData); //수신데이타
                this.itemInfo = response.data.apiData;

                
            }).catch(error => {
                console.log(error);
            });
        },
         //장바구니 버튼 눌렀을때 -> 모달창에서 구매하기 버튼 눌렀을때!
         goCart(){
            console.log("장바구니로 고")
            console.log(this.goCartVo)
            axios({
                method: 'post', // put, post, delete 
                url: `${this.$store.state.apiBaseUrl}/api/goCart`,
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                data: this.goCartVo , //put, post, delete 방식 자동으로 JSON으로 변환 전달
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response.data.apiData); //수신데이타
                console.log("장바구니 넣기 성공")

                
            }).catch(error => {
                console.log(error);
            });
        },
        //장바구니 버튼 눌렀을때 모달창 띄우기
        modalOpen(){
            // this.isMaodal= true
            document.querySelector('.ItemAccountModal').style.display = "block"
        },

        //수량 플러스버튼
        plusBtn(){
            console.log("더하기")
            this.goCartVo.cCount++
        },
        //수량 마이너스버튼
        minusBtn(){
            console.log("빼기")
            if(this.goCartVo.cCount>1){
                this.goCartVo.cCount--
            }
        },
       
        
    },
    created(){
        this.getItemInfo();
    }
};
</script>
<style></style>