<template>
    <div>
        <div class="wrap">
            <AppManagerHeader/>
            <div class="managerHome">
                <div class="pManager"><p>관리자홈</p></div>
                <h3>전체상품</h3>
                <div class="managerTitle">
                    <div class="title01">
                        <router-link to="">전체</router-link>
                        <router-link to="">라면/컵누들/곤누들</router-link>
                        <router-link to="">카레/짜장/간편렌지</router-link>
                        <router-link to="">소스/드레싱/양념/식초</router-link>
                        <router-link to="">캔/통조림/오일</router-link>
                        <router-link to="">떡볶이/핫도그/간식</router-link>
                    </div> 
                    <div class="title02">
                        <p>전체<span>143</span>개
                        </p>
                    </div>
                </div>
                <div class="foodListGroup">
                    <div class="foodList">
                        <div class="foodImg">
                            <img src="@/assets/images/main/새우볶음밥.png">
                        </div>
                        <div class="foodExplan">
                            <p class="foodName2">맛있는 새우볶음밥 225g</p>
                            <p class="foodEx2">속이 꽉~찬!! 통살새우~!!</p>
                            <p>원산지  대한민국</p>
                            <p class="foodPrice">2,980<span>원</span></p>
                            <p >배송정보 3,000<span>원</span></p>
                            <div class="attribute">
                                <span class="storageCold">냉장&냉동</span>
                                <img src="@/assets/images/main/icon_new.png">
                            </div>
                        </div>
                    </div>
                    <div class="foodList">
                        <div class="foodImg">
                            <img src="@/assets/images/main/새우볶음밥.png">
                        </div>
                        <div class="foodExplan">
                            <p class="foodEx">속이 꽉~찬!! 통살새우~!!</p>
                            <p class="foodName">맛있는 새우볶음밥 225g</p>
                            <p class="foodPrice">2,980<span>원</span></p>
                            <div class="attribute">
                                <span class="storageCold">냉장&냉동</span>
                                <img src="@/assets/images/main/icon_new.png">
                            </div>
                        </div>
                    </div>
                    <div class="foodList">
                        <div class="foodImg">
                            <img src="@/assets/images/main/새우볶음밥.png">
                        </div>
                        <div class="foodExplan">
                            <p class="foodEx">속이 꽉~찬!! 통살새우~!!</p>
                            <p class="foodName">맛있는 새우볶음밥 225g</p>
                            <p class="foodPrice">2,980<span>원</span></p>
                            <div class="attribute">
                                <span class="storageCold">냉장&냉동</span>
                                <img src="@/assets/images/main/icon_new.png">
                            </div>
                        </div>
                    </div>
                    <div class="foodList">
                        <div class="foodImg">
                            <img src="@/assets/images/main/새우볶음밥.png">
                        </div>
                        <div class="foodExplan">
                            <p class="foodEx">속이 꽉~찬!! 통살새우~!!</p>
                            <p class="foodName">맛있는 새우볶음밥 225g</p>
                            <p class="foodPrice">2,980<span>원</span></p>
                            <div class="attribute">
                                <span class="storageCold">냉장&냉동</span>
                                <img src="@/assets/images/main/icon_new.png">
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <AppFooter/>
        </div>

    </div>
</template>

<script>
import '@/assets/css/manager/manager.css';
import AppManagerHeader from '@/components/AppManagerHeader.vue';
import AppFooter from '@/components/AppFooter.vue'
export default {
    name: "ManagerMainView",
    components: {
        AppManagerHeader,
        AppFooter
    },
    data() {
        return {};
    },
    methods: {},
};
</script>

<style></style>