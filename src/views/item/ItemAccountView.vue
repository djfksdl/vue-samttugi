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
                            <!-- <img v-bind:src="`http://localhost:9009/upload/${itemInfo.saveName}`"> -->
                            <img v-bind:src="`${this.$store.state.apiBaseUrl}/upload/${this.$route.query.saveName}`">
                        </div>
                        <!-- 상품내용 - 오른쪽 -->
                        <div class="ItemAccountRight">
                            <div class="ItemAcocuntText">
                                <!-- 텍스트-Top -->
                                <div class="ItemAcocuntTextTop">
                                    <p>{{ itemInfo.productName }}</p>
                                    <p v-if="itemInfo && itemInfo.price">{{itemInfo.price.toLocaleString()}}<span></span>원</p>
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
                                            <span>3,000</span>원
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
                                            <strong>{{ (itemInfo.price * goCartVo.cCount).toLocaleString() }}</strong>
                                            <span>원</span>
                                        </p>
                                    </div>
                                    <!-- 버튼 -->
                                    <div class="ItemAcocuntTextBottomBtn">
                                        <router-link to="" v-on:click="modalOpen" >장바구니</router-link>
                                        <router-link to="" v-on:click="goOrder()">바로구매</router-link>
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
            <!-- 로그인했을때 -->
            <div class="ItemAccountModal-content" v-if="this.$store.state.authUser !== null">
                <div class="closeModal" v-on:click="modalClose">x</div>
                <div class="ItemModalText">
                    <p>장바구니로 이동하시겠습니까?</p>
                </div>
                <div class="ItemModalBtnBox">
                    <router-link to="" v-on:click="goCartTo()">계속 쇼핑하기</router-link>
                    <button v-on:click="goCart()">장바구니로 이동</button>
                </div>
            </div>
            <!-- 로그인 안했을때 -->
            <div class="ItemAccountModal-content" v-if="this.$store.state.authUser == null">
                <div class="ItemModalText">
                    <p>로그인이 필요한 서비스입니다.</p>
                </div>
                <div class="ItemModalBtnBox">
                    <router-link to="/login">로그인 페이지 이동</router-link>
                    <button v-on:click="modalClose" >취소</button>
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
                userNo: null
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
            this.goCartVo.userNo= this.$store.state.authUser.userNo
            axios({
                method: 'post', // put, post, delete 
                url: `${this.$store.state.apiBaseUrl}/api/goCart`,
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                data: this.goCartVo , //put, post, delete 방식 자동으로 JSON으로 변환 전달
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response.data.apiData); //수신데이타
                console.log("장바구니 넣기 성공")

                this.$router.push("/cart")
                
            }).catch(error => {
                console.log(error);
            });
        },
        //장바구니 버튼 눌렀을때 -> 모달창에서 계속 쇼핑하기 버튼 눌렀을때!
        goCartTo(){
            this.goCartVo.userNo= this.$store.state.authUser.userNo
            axios({
                method: 'post', // put, post, delete 
                url: `${this.$store.state.apiBaseUrl}/api/goCart`,
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                data: this.goCartVo , //put, post, delete 방식 자동으로 JSON으로 변환 전달
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response.data.apiData); //수신데이타
                console.log("장바구니 넣고 쇼핑가자")

                this.$router.push("/itemlist/1")
                
            }).catch(error => {
                console.log(error);
            });
        },
        //바로구매 버튼 눌렀을때 -> 모달창에서 구매하기 버튼 눌렀을때!
        goOrder(){
            console.log("구매페이지로 고")
            if(this.$store.state.authUser == null){
                this.modalOpen()
                
            }else{
                this.goCartVo.userNo= this.$store.state.authUser.userNo
                axios({
                    method: 'post', // put, post, delete 
                    url: `${this.$store.state.apiBaseUrl}/api/goCart`,
                    headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                    data: this.goCartVo , //put, post, delete 방식 자동으로 JSON으로 변환 전달
                    responseType: 'json' //수신타입
                }).then(response => {
                    console.log(response.data.apiData); //수신데이타
                    console.log("장바구니 넣기 성공")

                    this.$router.push("/order")
                    
                }).catch(error => {
                    console.log(error);
                });
            }
        },
        //장바구니 버튼 눌렀을때 모달창 띄우기
        modalOpen(){
            // this.isMaodal= true
            document.querySelector('.ItemAccountModal').style.display = "block"
        },
        modalClose(){
            document.querySelector('.ItemAccountModal').style.display = "none"
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