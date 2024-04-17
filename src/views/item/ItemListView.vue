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
                            <li v-for="(sCategory, i) in scList" v-bind:key="i" v-on:click="changeItem(i)" >
                                <router-link to="">{{sCategory.scName  }}</router-link>
                            </li>
                        </ul>
                        <!-- 상품리스트나열 -->
                        <div class="ItemContentBoxes" >
                            <div class="ItemContentBox" v-for="(ItemVo,i) in itemList" v-bind:key="i">
                                <router-link to="/itemaccount">
                                    <!-- 상품 이미지 -->
                                    <div class="ItemContentImg">
                                        <!-- <img src="@/assets/images/JinRamenSpicy.jpg"> -->
                                        <img v-bind:src="`http://localhost:9009/upload/${ItemVo.saveName}`">
                                    </div>
                                    <!-- 상품 텍스트 -->
                                    <div class="ItemContentText">
                                        <p>{{ ItemVo.productName }}</p>
                                        <p class="ItemPrice"><span>{{ ItemVo.price }}</span>원</p>
                                        <div class="ItemStorageMethod">
                                            <span>{{ ItemVo.storage }}</span>
                                            <span>{{ ItemVo.best }}</span>
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
            itemList:[],
            scList:[],
            iList:[]
        };
    },
    methods: {
        // 대분류별 아이템 리스트 받아오기 - 디폴트 화면
        getItemList(no){
            console.log("대분류별 아이템 리스");
            no= this.$route.params.no;
            // console.log(no);

            axios({
                method: 'get', // put, post, delete 
                url: `${this.$store.state.apiBaseUrl}/api/itemlist`,
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                params: {no:no}, //get방식 파라미터로 값이 전달
                responseType: 'json' //수신타입
            }).then(response => {
                // console.log(response.data.apiData); //수신데이타
                this.itemList = response.data.apiData;

                
            }).catch(error => {
                console.log(error);
            });

        },

        //소분류별 아이템리스트 받아오기- 탭메뉴 클릭시
        getScList(no){
            console.log("소분류별");
            no= this.$route.params.no;
            console.log(no);

            axios({
                method: 'get', // put, post, delete 
                url: `${this.$store.state.apiBaseUrl}/api/sclist`,
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                params: {no:no}, //get방식 파라미터로 값이 전달
                // data: guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response.data.apiData); //수신데이타
                this.scList = response.data.apiData;

                
            }).catch(error => {
                console.log(error);
            });

        },
        changeItem(i){
            console.log(i);
            axios({
                method: 'get', // put, post, delete 
                url: `${this.$store.state.apiBaseUrl}/api/iListByscNo`,
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                params: {i:i}, //get방식 파라미터로 값이 전달
                // data: guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response.data.apiData); //수신데이타
                this.iList = response.data.apiData;


                
            }).catch(error => {
                console.log(error);
            });
        },
        // handleCategoryClick(categoryNo) {
        //     // 여기에 카테고리 클릭 시 실행될 로직 추가
        //     console.log("카테고리 클릭됨:", categoryNo);
        //     // 이제 해당 카테고리에 대한 작업을 수행할 수 있습니다.
        //     axios({
        //         method: 'get', // put, post, delete 
        //         url: `${this.$store.state.apiBaseUrl}/api/iListByscNo`,
        //         headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
        //         params: {categoryNo:categoryNo}, //get방식 파라미터로 값이 전달
        //         // data: guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
        //         responseType: 'json' //수신타입
        //     }).then(response => {
        //         console.log(response.data.apiData); //수신데이타
        //         this.iList = response.data.apiData;


                
        //     }).catch(error => {
        //         console.log(error);
        //     });
            
        // }

    },
    beforeUpdated(){
        this.getScList();
        this.getItemList()
       // this.getItemList();
    },
    created(){
        this.getScList();
        this.getItemList()
        // this.handleCategoryClick(this.$route.params.no);// 페이지 로드 시 해당 카테고리에 대한 상품 불러오기
    },
    // watch: {
    //     $route(to) {
    //         // 라우트 변경 시 해당 카테고리에 대한 상품 불러오기
    //         this.handleCategoryClick(to.params.no);
    //     }
    // },
    // props: {
    //     categoryNo: Number // 헤더에서 전달된 카테고리 번호
    // }
};
</script>
<style></style>