<template>
    <div>
        <div class="wrap">
            <!-- 헤더 -->
            <AppHeader/>

            <!-- 내용 -->
            <div class="ItemListContainer">
                <div class="ItemListInner">
                    <!-- 경로 -->
                    <div class="channelSrc">
                        <router-link to="/">홈</router-link>
                        <router-link to="">라면/컵누들/곤누들</router-link>
                    </div>
                    <!-- 타이틀 -->
                    <h2>라면/컵누들/곤누들</h2>
                    <!-- 상품리스트 -->
                    <div class="ItemListSection">
                        <!-- 탭메뉴 -->
                        <ul class="ItemTapMenu">
                            <li><router-link to="">전체</router-link></li>
                            <li><router-link to="">봉지라면</router-link></li>
                            <li><router-link to="">컵라면</router-link></li>
                            <li><router-link to="">컵누들</router-link></li>
                            <li><router-link to="">라면스프</router-link></li>
                            <li><router-link to="">곤누들</router-link></li>
                            <li><router-link to="">잡채</router-link></li>
                            <li><router-link to="">사리면</router-link></li>
                        </ul>
                        <!-- 상품리스트나열 -->
                        <div class="ItemContentBoxes" >
                            <div class="ItemContentBox">
                                <router-link to="/itemaccount">
                                    <!-- 상품 이미지 -->
                                    <div class="ItemContentImg">
                                        <img src="@/assets/images/JinRamenSpicy.jpg">
                                    </div>
                                    <!-- 상품 텍스트 -->
                                    <div class="ItemContentText">
                                        <p>진라면 매운맛 (120GX5)</p>
                                        <p class="ItemPrice"><span>3580</span>원</p>
                                        <div class="ItemStorageMethod">
                                            <span>실온</span>
                                            <span>BEST</span>
                                        </div>
                                    </div>
                                </router-link>
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
import '@/assets/css/item/itemList.css'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
export default {
    name: "ItemList",
    components: {
        AppHeader,
        AppFooter
    },
    data() {
        return {
        };
    },
    methods: {
        getItemList(no){
            no= this.$route.params.no;
            console.log(no);

            axios({
                method: 'get', // put, post, delete 
                url: `${this.$store.state.apiBaseUrl}/api/itemlist`,
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                params: {no:no}, //get방식 파라미터로 값이 전달
                // data: guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response.data.apiData); //수신데이타
                
            }).catch(error => {
                console.log(error);
            });

        }
    },
    created(){
        this.getItemList();
    }
};
</script>
<style></style>