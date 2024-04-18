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
                        <router-link to="">{{ this.mcName }}</router-link>
                    </div>
                    <!-- 타이틀 -->
                    <!-- <h2>{{categoryList[this.$route.params.no].mcName}}</h2> -->
                    <h2>{{ this.mcName }}</h2>
                    <!-- 상품리스트 -->
                    <div class="ItemListSection">
                        <!-- 탭메뉴 -->
                        <ul class="ItemTapMenu">
                            <li v-on:click="getItemAll(no)"><router-link to="">전체</router-link></li>
                            <li v-for="(sCategory, i) in scList" v-bind:key="i" v-on:click="getItemBySc(sCategory.scNo)" >
                                <router-link to="">{{ sCategory.scName }}</router-link>
                            </li>
                        </ul>
                        <!-- 상품리스트나열 -->
                        <div class="ItemContentBoxes" >
                            <div class="ItemContentBox" v-for="(ItemVo,i) in itemList" v-bind:key="i">
                                <router-link v-bind:to="`/itemaccount/${ItemVo.productNo}`">
                                    <!-- 상품 이미지 -->
                                    <div class="ItemContentImg">
                                        <!-- <img src="@/assets/images/JinRamenSpicy.jpg"> -->
                                        <!-- <img v-bind:src="`http://localhost:9009/upload/${ItemVo.saveName}`"> -->
                                        <img v-bind:src="`http://localhost:9009/upload/${this.$route.query.saveName}`">
                                    </div>
                                    <!-- 상품 텍스트 -->
                                    <div class="ItemContentText">
                                        <p>{{ ItemVo.productName }}</p>
                                        <p class="ItemPrice"><span>{{ ItemVo.price.toLocaleString() }}</span>원</p>
                                        <div class="ItemStorageMethod">
                                            <span v-if="ItemVo.storage == 1">냉동&보관</span>
                                            <span v-if="ItemVo.storage == 2">실온</span>
                                            <span><img v-if="ItemVo.best == 1">Best</span>
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
            scList:[],
            itemList:[],
            // iList:[]
            mcName:""
            
        };
    },
    methods: {

        //대분류별 소분류 메뉴리스트가져오기
        getScList(no){
            
            console.log("소분류 메뉴가져오기");
            no= this.$route.params.no;
            // console.log(no);
            axios({
                method: 'get', // put, post, delete 
                url: `${this.$store.state.apiBaseUrl}/api/sclist`,
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                params: {no:no}, //get방식 파라미터로 값이 전달
                // data: guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
                responseType: 'json' //수신타입
            }).then(response => {
                console.log("ㅁㅁㅁ",response.data.apiData); //수신데이타
                this.scList = response.data.apiData.scList;
                this.mcName = response.data.apiData.mcName;

                console.log(this.scList);
                
            }).catch(error => {
                console.log(error);
            });

        },

        //전체 아이템 리스트 불러오기
        getItemAll(no){
            console.log("전체 눌렀을때 아이템리스트!!")
            no= this.$route.params.no;
            // console.log(no);

            axios({
                method: 'get', // put, post, delete 
                url: `${this.$store.state.apiBaseUrl}/api/iListAll`,
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

        //소분류별 아이템 리스트 불러오기
        getItemBySc(i){
            const no= this.$route.params.no;
            console.log("소분류카테고리 번호:"+i);
            console.log("대분류 번호:"+ no);

            const NoVo = {
                scNo:i,
                mcNo:no
            }
            axios({
                method: 'get', // put, post, delete 
                url: `${this.$store.state.apiBaseUrl}/api/iListByscNo`,
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                params: NoVo, //get방식 파라미터로 값이 전달
                responseType: 'json' //수신타입
            }).then(response => {
                //console.log(response.data.apiData); //수신데이타
                this.itemList = response.data.apiData;


                
            }).catch(error => {
                console.log(error);
            });
        },


    },
    created(){
        const no = this.$route.params.no;
        this.getScList();
        this.getItemAll(no);
    },
};
</script>
<style></style>