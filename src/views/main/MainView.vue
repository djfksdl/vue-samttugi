<template>
    <div>
        <div class="wrap">
            <div class="topHeader">
                <p>삼뚜기몰 WECLCOME</p>
            </div>
            <AppHeader />
            <div class="wrapper">
                <div class="slider01">
                    <Carousel :autoplay="2600" :wrap-around="true">
                        <Slide v-for="slide in slides" :key="slide">
                            <div class="carousel__item">
                                <img class="slideImg" :src="slide" />
                            </div>
                        </Slide>
                        <template #addons>
                            <Navigation />
                            <Pagination />
                        </template>
                    </Carousel>
                </div>
            </div>
            <div class="eventGroup">
                <router-link to="https://www.ottogimall.co.kr/front/promo/event/273">
                    <img src="@/assets/images/main/1710116887801A9TTr.png">
                    <p>뚜밀리818</p>
                </router-link>
                <router-link to="https://www.ottogimall.co.kr/front/product/brand/20?ptype=0&psort=pop&pageSize=80&listBtn=0">
                    <img src="@/assets/images/main/1707798798805365xl.png">
                    <p>맛있는 콘텐츠</p>
                </router-link>
                <router-link to="https://www.ottogimall.co.kr/front/promo/event/137">
                    <img src="@/assets/images/main/oneplus.png">
                    <p>원쁠원</p>
                </router-link>
                <router-link to="https://www.ottogimall.co.kr/front/promo/event/236">
                    <img src="@/assets/images/main/1704939117452DH842.png">
                    <p>99마켓</p>
                </router-link>
                <router-link to="https://www.ottogimall.co.kr/front/product/brand">
                    <img src="@/assets/images/main/1702343761667faagd.png">
                    <p>브랜드관</p>
                </router-link>

                <router-link to="">
                    <img src="@/assets/images/main/1711593325640XDNYd.png">
                    <p>굿즈</p>
                </router-link>

                <router-link to="">
                    <img src="@/assets/images/main/1711593225746xvZaA.png">
                    <p>초시원 매콤</p>
                </router-link>


            </div>
            <div class="foodBoxGroup">
                <div class="foodBox">
                    <h3>삼뚜기에서 만나요</h3>
                    <Carousel v-bind="settings" :breakpoints="breakpoints">
                        <Slide v-for="(productVo, i) in productList" :key="i" >
                            <div class="carousel__item">
                                <router-link to="">
                                    <div class="foodBoxUnder">
                                        <div class="imgButBox">
                                            <img :src="`${this.$store.state.apiBaseUrl}/upload/${productVo.saveName}`" />
                                            <!-- <img :src="`${this.$store.state.apiBaseUrl}/upload/${this.$route.query.saveName}`" /> -->
                                            <button type="button" class="cart"></button>
                                        </div>
                                        <p class="foodEx">{{ productVo.detail }}</p>
                                        <p class="foodName">{{ productVo.productName }}</p>
                                        <p class="foodPrice">{{ numberWithCommas(productVo.price) }}<span>원</span></p>
                                        <div class="attribute">
                                            <span class="storageCold" v-if="productVo.storage == 1">냉동&보관</span>
                                            <span class="storageWarm" v-if="productVo.storage == 2">실온</span>
                                            <img v-if="productVo.best == 1" src="@/assets/images/main/Best.png" />
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </Slide>
                        <template #addons>
                            <Navigation />
                        </template>
                    </Carousel>
                </div>

            </div>


            <div class="firstAdBox">
                <img src="@/assets/images/main/firstAD.jpg" class="firstAd">
            </div>


            <div class="foodBoxGroup2">
                <div class="foodBox">
                    <h3>이런상품 어때요?</h3>
                    <Carousel v-bind="settings" :breakpoints="breakpoints">
                        <Slide v-for="(productVo, i) in productList2" :key="i">
                            <div class="carousel__item">
                                <router-link to="">
                                    <div class="foodBoxUnder">
                                        <div class="imgButBox">
                                            <img :src="`${this.$store.state.apiBaseUrl}/upload/${productVo.saveName}`" />
                                            <!-- <img :src="`${this.$store.state.apiBaseUrl}/upload/${this.$route.query.saveName}`" /> -->
                                            <button type="button" class="cart"></button>
                                        </div>
                                        <p class="foodEx">{{ productVo.detail }}</p>
                                        <p class="foodName">{{ productVo.productName }}</p>
                                        <p class="foodPrice">{{ numberWithCommas(productVo.price) }}<span>원</span></p>
                                        <div class="attribute">
                                            <span class="storageCold" v-if="productVo.storage == 1">냉동&보관</span>
                                            <span class="storageWarm" v-if="productVo.storage == 2">실온</span>
                                            <img v-if="productVo.best == 1" src="@/assets/images/main/Best.png" />
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </Slide>
                        <template #addons>
                            <Navigation />
                        </template>
                    </Carousel>
                </div>


            </div>

            <div class="foodBoxGroup3">
                <div class="foodBox">
                    <h3>원쁠원으로 만나요</h3>
                    <Carousel v-bind="settings" :breakpoints="breakpoints">
                        <Slide v-for="(productVo, i) in productList3" :key="i">
                            <div class="carousel__item">
                                <router-link to="">
                                    <div class="foodBoxUnder">
                                        <div class="imgButBox">
                                            <img :src="`${this.$store.state.apiBaseUrl}/upload/${productVo.saveName}`" />
                                            <!-- <img :src="`${this.$store.state.apiBaseUrl}/upload/${this.$route.query.saveName}`" /> -->
                                            <button type="button" class="cart"></button>
                                        </div>
                                        <p class="foodEx">{{ productVo.detail }}</p>
                                        <p class="foodName">{{ productVo.productName }}</p>
                                        <p class="foodPrice">{{ numberWithCommas(productVo.price) }}<span>원</span></p>
                                        <div class="attribute">
                                            <span class="storageCold" v-if="productVo.storage == 1">냉동&보관</span>
                                            <span class="storageWarm" v-if="productVo.storage == 2">실온</span>
                                            <img v-if="productVo.best == 1" src="@/assets/images/main/Best.png" />
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </Slide>
                        <template #addons>
                            <Navigation />
                        </template>
                    </Carousel>
                </div>

            </div>



            <AppFooter />

        </div>
    </div>
</template>

<script>
import '@/assets/css/main/main.css';
import { defineComponent } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import axios from 'axios';

import slide01 from "@/assets/images/main/slide01.jpg";
import slide02 from "@/assets/images/main/slide02.jpg";
import slide03 from "@/assets/images/main/slide03.jpg";
import slide04 from "@/assets/images/main/slide04.jpg";
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

export default defineComponent({
    name: "MainView",
    components: {
        AppHeader,
        AppFooter,
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    data() {
        return {
            slides: [slide01, slide02, slide03, slide04],
            productList: [],
            productList2: [],
            productList3: [],
            settings: {
                itemsToShow: 2,
                snapAlign: 'center',
            },
            breakpoints: {
                1024: {
                    itemsToShow: 4,
                    snapAlign: 'start',
                },
            },
        };
    },
    methods: {
        numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        },
        getsamttugiList() {
            console.log("데이터가져오기");

            axios({
                method: 'get', // put, post, delete 
                url: `${this.$store.state.apiBaseUrl}/api/samttugiList`,
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타
                this.productList = response.data.apiData;
            }).catch(error => {
                console.log(error);
            });


        },
        getsamttugiList2() {
            console.log("데이터가져오기");

            axios({
                method: 'get', // put, post, delete 
                url: `${this.$store.state.apiBaseUrl}/api/samttugiList2`,
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타
                this.productList2 = response.data.apiData;
            }).catch(error => {
                console.log(error);
            });

            
        },
        getsamttugiList3() {
            console.log("데이터가져오기");

            axios({
                method: 'get', // put, post, delete 
                url: `${this.$store.state.apiBaseUrl}/api/samttugiList3`,
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타
                this.productList3 = response.data.apiData;
            }).catch(error => {
                console.log(error);
            });

        }

    },
    created() {
        this.getsamttugiList();
        this.getsamttugiList2();
        this.getsamttugiList3();

    }
});
</script>

<style>
.slider01 .carousel__prev,
.slider01 .carousel__next {
    color: white;
    opacity: 0.9;
}
.carousel__slide{
    align-items: start;
}

</style>