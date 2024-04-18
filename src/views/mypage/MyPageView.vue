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
            orderedList:[]
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
            

        }
    },
    created(){
        this.getOrderedList();
    }
};
</script>
<style></style>