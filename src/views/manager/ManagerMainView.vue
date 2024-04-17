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
                    <div class="title01" >
                        <router-link to="">전체</router-link>
                        <router-link to="" v-for="(categoryVo, i) in categoryList" v-bind:key="i">{{ categoryVo.mcName }}</router-link>
                    </div>
                    <div class="title02">
                        <p>전체<span>{{totalProductCount}}</span>개
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
                            <p class="foodPrice">{{ numberWithCommas(productVo.price) }}<span>원</span></p>
                            <div class="attribute">
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
            productList:[],
            totalProductCount:0
        };
    },
    methods: {
        numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        },
        getManagerCategory() {
            console.log("데이터가져오기");

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
            console.log("데이터가져오기");
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

        }
    },
    created() {
        this.totalProductCount = this.productList.length;
        this.getManagerCategory();
        this.getsamttugiList();
    }
};
</script>

<style></style>