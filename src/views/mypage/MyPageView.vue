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
                    <div class="sidetop">
                        <h2>마이페이지</h2>
                        <ul class="mypageMenu">
                            <li>쇼핑정보</li>
                            <li><router-link to="/mypage">주문배송조회</router-link></li>
                            <li>회원정보</li>
                            <li><router-link to="/modify">회원정보수정</router-link></li>
                        </ul>
                    </div>
                    <div class="sidebottom">
                        <img src="@/assets/images/mypage_banner2.png" alt="">
                    </div>
                </div>
                <!-- 오른쪽내용영역 -->
                <div class="MpRight">
                    <!-- about영역 -->
                    <div class="MpRightAbout">
                        <!-- 주문조회 -->
                        <div class="orderCheckBox">
                            <h1>주문/조회</h1>
                            <label for="date">
                                <input type="date" id="" max="2024-12-30" min="2024-01-01"  v-model="selectedDate" v-on:change="dateChange()">
                            </label>
                        </div>
                        <!-- 날짜별 주문목록 -->
                        <div class="orderListByDate">

                            <div class="orderByDate" v-for="(orderedVo,i) in orderedList" v-bind:key="i"> 
                                <p class="orderDay">{{orderedVo.payDay}}</p>
                                <div class="ordercomplete" >
                                    <!-- <img v-bind:src="`http://localhost:9009/upload/${orderedVo.saveName}`" class="orderCompleteImg"> -->
                                    <img v-bind:src="`http://localhost:9009/upload/${this.$route.query.saveName}`" class="orderCompleteImg">
                                    <div class="buy">
                                        <p><strong>상품명:</strong>{{ orderedVo.productName }}</p>
                                        <p><strong>가격:</strong> {{ orderedVo.oPrice.toLocaleString() }}원</p>
                                        <p><strong>결제방법:</strong>{{ orderedVo.payment }} </p>
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
import axios from 'axios';
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
        return {
            no: this.$store.state.authUser.userNo,
            orderedList:[],
            selectedDate: new Date().toISOString().substring(0, 10),
        };
    },
    methods: {
        getOrderedList(){
            console.log("주문/조회 첫화면")
            axios({
                method: 'get', // put, post, delete 
                url: `${this.$store.state.apiBaseUrl}/api/orderedListByUserNo`,
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                params: {no:this.no}, //get방식 파라미터로 값이 전달
                // data: guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response.data.apiData); //수신데이타
                this.orderedList = response.data.apiData;

                
            }).catch(error => {
                console.log(error);
            });
            

        },
        dateChange() {
            
            console.log("날짜변경");
            console.log(this.selectedDate);
            
            axios({
                method: 'post',  //put,post,delete
                url: `${this.$store.state.apiBaseUrl}/api/findByDate`,
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                params: { selectedDate: this.selectedDate}, //get방식 파라미터로 값이 전달
                // data: attentionVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달

                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response.data); //수신데이타
                console.log(response.data.apiData); //수신데이타
                this.orderedList = response.data.apiData;

            }).catch(error => {
                console.log(error);
            });


        },
    },
    created(){
        this.getOrderedList();
    }
};
</script>
<style></style>