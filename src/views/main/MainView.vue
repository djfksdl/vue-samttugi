<template>
    <div>
        <div class="wrap">
            <div class="topHeader">
                <p>삼뚜기몰 WECLCOME</p>
            </div>
            <AppHeader />
            <div class="wrapper">
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
            <div class="eventGroup">
                <router-link to="">
                    <img src="@/assets/images/main/1710116887801A9TTr.png">
                    <p>뚜밀리818</p>
                </router-link>
                <router-link to="">
                    <img src="@/assets/images/main/1707798798805365xl.png">
                    <p>맛있는 콘텐츠</p>
                </router-link>
                <router-link to="">
                    <img src="@/assets/images/main/oneplus.png">
                    <p>원쁠원</p>
                </router-link>
                <router-link to="">
                    <img src="@/assets/images/main/1704939117452DH842.png">
                    <p>99마켓</p>
                </router-link>
                <router-link to="">
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
                <h3>삼뚜기몰에서 만나요</h3>
                <div class="foodBox">


                    <router-link to="">
                        <div class="imgButBox">
                            <img class="food" src="@/assets/images/main/새우볶음밥.png">
                            <button type="button" class="cart"></button>
                        </div>
                        <p class="foodEx">속이 꽉~찬!! 통살새우~!!</p>
                        <p class="foodName">맛있는 새우볶음밥 225g</p>
                        <p class="foodPrice">2,980<span>원</span></p>
                        <div class="attribute">
                            <span class="storageCold">냉장&냉동</span>
                            <img src="@/assets/images/main/icon_new.png">
                        </div>
                    </router-link>
                </div>
                <div class="foodBox">
                    <router-link to="">
                        <div class="imgButBox">
                            <img class="food" src="@/assets/images/main/새우볶음밥.png">
                            <button type="button" class="cart"></button>
                        </div>
                        <p class="foodEx">속이 꽉~찬!! 통살새우~!!</p>
                        <p class="foodName">맛있는 새우볶음밥 225g</p>
                        <p class="foodPrice">2,980<span>원</span></p>
                        <div class="attribute">
                            <span class="storageCold">냉장&냉동</span>
                            <img src="@/assets/images/main/icon_new.png">
                        </div>
                    </router-link>
                </div>
                <div class="foodBox">
                    <router-link to="">
                        <div class="imgButBox">
                            <img class="food" src="@/assets/images/main/새우볶음밥.png">
                            <button type="button" class="cart"></button>
                        </div>
                        <p class="foodEx">속이 꽉~찬!! 통살새우~!!</p>
                        <p class="foodName">맛있는 새우볶음밥 225g</p>
                        <p class="foodPrice">2,980<span>원</span></p>
                        <div class="attribute">
                            <span class="storageCold">냉장&냉동</span>
                            <img src="@/assets/images/main/icon_new.png">
                        </div>
                    </router-link>
                </div>
                <div class="foodBox">
                    <router-link to="">
                        <div class="imgButBox">
                            <img class="food" src="@/assets/images/main/새우볶음밥.png">
                            <button type="button" class="cart"></button>
                        </div>
                        <p class="foodEx">속이 꽉~찬!! 통살새우~!!</p>
                        <p class="foodName">맛있는 새우볶음밥 225g</p>
                        <p class="foodPrice">2,980<span>원</span></p>
                        <div class="attribute">
                            <span class="storageCold">냉장&냉동</span>
                            <img src="@/assets/images/main/icon_new.png">
                        </div>
                    </router-link>
                </div>
            </div>


            <div class="firstAdBox">
                <img src="@/assets/images/main/firstAD.jpg" class="firstAd">
            </div>


            <div class="foodBoxGroup2">
                <div class="foodBox">
                    <h3>이런상품 어때요?</h3>
                    <router-link to="">
                        <div class="imgButBox">
                            <img class="food" src="@/assets/images/main/옛날잡채.png">
                            <button type="button" class="cart"></button>
                        </div>
                        <p class="foodName">옛날잡채 용기 76G</p>
                        <p class="foodPrice">1,780<span>원</span></p>
                        <div class="attribute">
                            <span class="storageWarm">실온</span>
                            <img src="@/assets/images/main/Best.png">
                        </div>
                    </router-link>
                </div>
                <div class="foodBox">
                    <router-link to="">
                        <div class="imgButBox">
                            <img class="food" src="@/assets/images/main/옛날잡채.png">
                            <button type="button" class="cart"></button>
                        </div>
                        <p class="foodName">옛날잡채 용기 76G</p>
                        <p class="foodPrice">1,780<span>원</span></p>
                        <div class="attribute">
                            <span class="storageWarm">실온</span>
                        </div>
                    </router-link>
                </div>
                <div class="foodBox">
                    <router-link to="">
                        <div class="imgButBox">
                            <img class="food" src="@/assets/images/main/옛날잡채.png">
                            <button type="button" class="cart"></button>
                        </div>
                        <p class="foodName">옛날잡채 용기 76G</p>
                        <p class="foodPrice">1,780<span>원</span></p>
                        <div class="attribute">
                            <span class="storageWarm">실온</span>
                        </div>
                    </router-link>
                </div>
                <div class="foodBox">
                    <router-link to="">
                        <div class="imgButBox">
                            <img class="food" src="@/assets/images/main/옛날잡채.png">
                            <button type="button" class="cart"></button>
                        </div>
                        <p class="foodName">옛날잡채 용기 76G</p>
                        <p class="foodPrice">1,780<span>원</span></p>
                        <div class="attribute">
                            <span class="storageWarm">실온</span>
                        </div>
                    </router-link>
                </div>

            </div>

            <div class="foodBoxGroup3">
                <div class="foodBox">
                    <h3>원쁠원으로 만나요</h3>
                    <router-link to="">
                        <div class="imgButBox">
                            <img class="food" src="@/assets/images/main/양송이컵스프.png">
                            <button type="button" class="cart"></button>
                        </div>
                        <p class="foodName">[원쁠원]양송이컵스프 27G+양송이컵스프 27G 1+1</p>
                        <p class="foodPrice"><span class="saleNum">19%
                            </span>2,080<span>원</span><del>3,080<span>원</span></del></p>
                        <div class="attribute">
                            <span class="storageWarm">실온</span>
                            <img src="@/assets/images/main/icon_new.png">
                        </div>
                    </router-link>
                </div>
                <div class="foodBox">
                    <router-link to="">
                        <div class="imgButBox">
                            <img class="food" src="@/assets/images/main/양송이컵스프.png">
                            <button type="button" class="cart"></button>
                        </div>
                        <p class="foodName">[원쁠원]양송이컵스프 27G+양송이컵스프 27G 1+1</p>
                        <p class="foodPrice"><span class="saleNum">19%
                            </span>2,080<span>원</span><del>3,080<span>원</span></del></p>
                        <div class="attribute">
                            <span class="storageWarm">실온</span>
                        </div>
                    </router-link>
                </div>
                <div class="foodBox">
                    <router-link to="">
                        <div class="imgButBox">
                            <img class="food" src="@/assets/images/main/양송이컵스프.png">
                            <button type="button" class="cart"></button>
                        </div>
                        <p class="foodName">[원쁠원]양송이컵스프 27G+양송이컵스프 27G 1+1</p>
                        <p class="foodPrice"><span class="saleNum">19%
                            </span>2,080<span>원</span><del>3,080<span>원</span></del></p>
                        <div class="attribute">
                            <span class="storageWarm">실온</span>
                        </div>
                    </router-link>
                </div>
                <div class="foodBox">
                    <router-link to="">
                        <div class="imgButBox">
                            <img class="food" src="@/assets/images/main/양송이컵스프.png">
                            <button type="button" class="cart"></button>
                        </div>
                        <p class="foodName">[원쁠원]양송이컵스프 27G+양송이컵스프 27G 1+1</p>
                        <p class="foodPrice"><span class="saleNum">19%
                            </span>2,080<span>원</span><del>3,080<span>원</span></del></p>
                        <div class="attribute">
                            <span class="storageWarm">실온</span>
                        </div>
                    </router-link>
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
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
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
        };
    },
    methods: {
        getsamttugiList() {
            console.log("데이터가져오기");

            axios({
                method: 'get', // put, post, delete 
                url: `${this.$store.state.apiBaseUrl}/api/samttugiList`,
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                // params: guestbookVo, //get방식 파라미터로 값이 전달
                // data: guestbookVo, //put, post, delete 방식 자동으로 JSON으로 변환 전달
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타
            }).catch(error => {
                console.log(error);
            });

        }

    },
});
</script>

<style>
.carousel__prev,
.carousel__next {
    color: white;
    opacity: 0.9;
}
</style>