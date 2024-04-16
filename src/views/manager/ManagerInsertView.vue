<template>
    <div>
        <div class="wrap">
            <AppManagerHeader />
            <div class="managerInsert">
                <div class="pManager">
                    <p>관리자 > 상품추가</p>
                </div>
                <form action="">
                    <div class="insertGroup">
                        <div class="fileGroup">
                            <div class="foodPhotoFile">
                            </div>
                            <input type="file">
                        </div>

                        <div class="foodExplanInsert">
                            <span class="category">카테고리</span>

                            <div class="selectBoxGroup">
                                <div class="bigCategoryBox"><label for="bigCategory">대분류</label> <br>
                                    <select  name="bigCategory" id="bigCategory" >
                                        <option disabled selected>대분류선택</option>
                                        <option v-for="(bigCategoryVo,i) in bigCategoryList" v-bind:key="i">{{ bigCategoryVo.mcName }}</option>
                                    </select>
                                </div>

                                <p>></p>

                                <div class="miniCategory"><label for="miniCategory">소분류</label><br>
                                    <select name="ramen" id="miniCategory">
                                        <option disabled value="" selected>소분류선택</option>
                                        <option v-for="(miniCategoryVo,i) in miniCategoryList" v-bind:key="i" >{{ miniCategoryVo.scName }}</option>
                                    </select>
                                </div>
                            </div>


                            <div class="productGroup">
                                <div><label for="foodName">제품명</label></div><input type="text" placeholder="제품명입력"
                                    id="foodName">
                                <div><label for="explan">제품설명</label></div><input type="text" placeholder="제품설명입력"
                                    id="explan">
                                <div><label for="price">가격</label></div><input type="text" placeholder="가격입력"
                                    id="price">
                                <div><label for="infor">배송정보</label></div><input type="text" placeholder="배송정보"
                                    id="infor">
                            </div>



                            <div class="storeage">
                                <div>
                                    <p>보관방법</p>
                                </div>
                                <div><label for="downzero"><span class="storageCold">냉장&냉동</span></label><input
                                        type="radio" name="store" value="downzero" id="downzero">
                                    <label for="upzero"><span class="storageWarm">실온</span> </label><input type="radio"
                                        name="store" value="upzero" id="upzero">
                                </div>
                            </div>


                            <div class="Best">
                                <span class="bestChoice"><label>best선택</label></span>
                                <div><span><label for="o"><img src="../../assets/images/main/Best.png"></label>
                                        <input type="radio" name="best" value="o" id="o"></span>
                                    <span><label for="x">선택안함 </label><input type="radio" name="best" value="x"
                                            id="x"></span>
                                </div>
                            </div>



                        </div>
                    </div>

                </form>
                <button type="submit">추가</button>
            </div>

        </div>
    </div>

</template>

<script>
import '@/assets/css/manager/manager.css';
import AppManagerHeader from '@/components/AppManagerHeader.vue';

import axios from 'axios';

export default {
    name: "ManagerInsertView",
    components: {
        AppManagerHeader
    },
    data() {
        return {
            bigCategoryList:[],
            miniCategoryList:[]
        };
    },
    methods: {
        getBigCategory() {
            console.log("데이터가져오기");

            axios({
                method: 'get', // put, post, delete 
                url: `${this.$store.state.apiBaseUrl}/api/bigCategory`,
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                responseType: 'json' //수신타입
            }).then(response => {
                this.bigCategoryList = response.data.apiData;
                }).catch(error => {
                console.log(error);
            });

        },
        getMiniCategory(){
            console.log("데이터가져오기");

            axios({
                method: 'get', // put, post, delete 
                url: `${this.$store.state.apiBaseUrl}/api/miniCategory`,
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타
                this.miniCategoryList = response.data.apiData;
                }).catch(error => {
                console.log(error);
            });
        },
    },
    created() {
        this.getBigCategory();
        this.getMiniCategory();
    },
    computed:{

    }
};
</script>

<style>
.wrap {
    height: 0px;
}
</style>