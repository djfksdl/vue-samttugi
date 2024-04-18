<template>
    <div>
        <div class="wrap">
            <AppManagerHeader />
            <div class="managerHome">
                <div class="pManager">
                    <p>관리자홈</p>
                </div>
                <h3>전체상품</h3>
                <div class="managerTitle">
                    <div class="title01">
                        <router-link to="" @click="handleAllClick">전체</router-link>
                        <router-link to="" v-for="(categoryVo, i) in categoryList" v-bind:key="i"
                            @click="handleClick(categoryVo.mcNo)"> {{ categoryVo.mcName }}</router-link>
                    </div>
                    <div class="title02">
                        <p>전체<span>&nbsp; {{ productList.length }}</span>개
                        </p>
                    </div>
                </div>
                <div class="foodListGroup">
                    <div class="foodList" v-for="(productVo, i) in productList" v-bind:key="i">
                        <div class="foodImg">
                            <img v-bind:src="`${this.$store.state.apiBaseUrl}/upload/${productVo.saveName}`">
                        </div>
                        <div class="foodExplan">
                            <p class="foodName2">{{ productVo.productName }}</p>
                            <p class="foodEx2">{{ productVo.detail }}</p>
                            <p class="foodPrice2">{{ numberWithCommas(productVo.price) }}<span>원</span></p>
                            <div class="attribute2">
                                <span class="storageCold" v-if="productVo.storage == 1">냉동&보관</span>
                                <span class="storageWarm" v-if="productVo.storage == 2">실온</span>
                                <img v-if="productVo.best == 1" src="@/assets/images/main/Best.png">
                            </div>
                        </div>
                    </div>


                </div>


            </div>
        </div>

    </div>
</template>

<script>
import '@/assets/css/manager/manager.css';
import AppManagerHeader from '@/components/AppManagerHeader.vue';
import axios from 'axios';
export default {
    name: "ManagerMainView",
    components: {
        AppManagerHeader
    },
    data() {
        return {
            categoryList: [],
            productList: [],
        };
    },
    methods: {
        numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        },
        handleAllClick() {
            this.getsamttugiList();
        },
        getManagerCategory() {
            console.log("카테고리 메뉴 가져오기");

            axios({
                method: 'get', // put, post, delete 
                url: `${this.$store.state.apiBaseUrl}/api/managerCategory`,
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타
                this.categoryList = response.data.apiData;
            }).catch(error => {
                console.log(error);
            });

        },
        getsamttugiList() {
            console.log("관리자 전체리스트");
            axios({
                method: 'get', // put, post, delete 
                url: `${this.$store.state.apiBaseUrl}/api/manager`,
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타
                this.productList = response.data.apiData;
            }).catch(error => {
                console.log(error);
            });

        },
        handleClick(i) {
            console.log("대분류 번호" + i);
            axios({
                method: 'get', // put, post, delete 
                url: `${this.$store.state.apiBaseUrl}/api/getCategoryList`,
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                params: { mcNo: i }, //get방식 파라미터로 값이 전달
                // data: guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response.data.apiData); //수신데이타
                this.productList = response.data.apiData;


            }).catch(error => {
                console.log(error);
            });


        }
    },
    created() {
        this.getManagerCategory();
        this.getsamttugiList();
    }
};
</script>

<style></style>