<template>
    <div>
        <div class="wrap">
            <AppManagerHeader />
            <div class="managerInsert">
                <div class="pManager">
                    <p>관리자 > 상품추가</p>
                    <h3>상품등록</h3>
                </div>
                <form v-on:submit.prevent="uploadFile" class="managerInsert2" enctype="multipart/form-data">
                    <div class="insertGroup">
                        <div class="fileGroup">
                            <div class="foodPhotoFile">
                                <img :src="previewImage">
                            </div>
                            <input type="file" name="file" id="profile" style="width: auto;"
                                @change="handleImagePreview">
                        </div>



                        <div class="foodExplanInsert">
                            <span class="category">카테고리</span>

                            <div class="selectBoxGroup">
                                <div class="bigCategoryBox"><label for="bigCategory">대분류</label> <br>
                                    <select name="bigCategory" id="bigCategory" @change="handleBigCategoryChange">
                                        <option disabled selected>대분류선택</option>
                                        <option v-for="(bigCategoryVo, i) in bigCategoryList" v-bind:key="i">
                                            {{ bigCategoryVo.mcName }}</option>
                                    </select>

                                    
                                </div>

                                <p>></p>

                                <div class="miniCategory">
                                    <label for="miniCategory">소분류</label><br>
                                    <select id="miniCategory" @change="handleMiniCategoryChange">
                                        <option disabled value="" selected>소분류선택</option>
                                        <option v-for="(miniCategoryVo, i) in miniCategoryList" v-bind:key="i">
                                            {{ miniCategoryVo.scName }}</option>
                                    </select>

                                </div>

                            </div>






                            <div class="productGroup">
                                <div><label for="foodName">제품명</label></div><input type="text" placeholder="제품명입력"
                                    id="foodName" v-model="productVo.productName">
                                <div><label for="explan">제품설명</label></div><input type="text" placeholder="제품설명입력"
                                    id="explan" v-model="productVo.detail">
                                <div><label for="price">가격</label></div><input type="text" placeholder="가격입력" id="price"
                                    v-model="productVo.price">
                            </div>



                            <div class="storeage">
                                <div>
                                    <p>보관방법</p>
                                </div>
                                <div><label for="downzero"><span class="storageCold">냉장&냉동</span></label><input
                                        type="radio" name="storage" id="downzero" value="1" v-model="productVo.storage">
                                    <label for="upzero"><span class="storageWarm">실온</span> </label><input type="radio"
                                        name="storage" id="upzero" value="2" v-model="productVo.storage">
                                </div>
                            </div>


                            <div class="Best">
                                <span class="bestChoice"><label>best선택</label></span>
                                <div><span><label for="o"><img src="../../assets/images/main/Best.png"></label>
                                        <input type="radio" name="best" id="o" v-model="productVo.best"
                                            value="1"></span>
                                    <span><label for="x">선택안함 </label><input type="radio" name="best" id="x"
                                            v-model="productVo.best" value="2"></span>
                                </div>
                            </div>



                        </div>
                    </div>

                    <button type="submit">추가</button>
                </form>
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
            selectedCategory: '',
            bigCategoryList: [],
            miniCategoryList: [],
            productVo: {
                mcNo: '',
                scNo: '',
                productName: '',
                price: '',
                storage: '',
                detail: '',
                best: '',
            },
            file: '',
            previewImage: '',

        };
    },
    methods: {


        // 대분류
        handleBigCategoryChange(event) {
            this.selectedCategory = event.target.value;

            const selectedIndex = event.target.selectedIndex - 1;
            // 선택된 대분류의 mcNo
            this.productVo.mcNo = (this.bigCategoryList[selectedIndex].mcNo);

            this.getMiniCategory();

            console.log(this.selectedCategory);
            console.log(this.productVo.mcNo);

        },
        // 소분류
        handleMiniCategoryChange(event) {
            if (this.productVo) {
                this.selectedCategory = event.target.value;

                const selectedIndex = event.target.selectedIndex - 1;
                this.productVo.scNo = (this.miniCategoryList[selectedIndex].scNo);

                console.log(this.selectedCategory);
                console.log(this.productVo.scNo);
            } else {
                console.error('productVo is undefined');
            }
        },

        // 대분류카테고리
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

        // 소분류카테고리
        getMiniCategory() {
            console.log("데이터가져오기");

            const mcNo = this.productVo.mcNo;
            axios({
                method: 'get', // put, post, delete 
                url: `${this.$store.state.apiBaseUrl}/api/miniCategory`,
                headers: { "Content-Type": "application/json; charset=utf-8" }, //전송타입
                params: { mcNo: mcNo },
                responseType: 'json', //수신타입
            }).then(response => {
                console.log(response); //수신데이타
                this.miniCategoryList = response.data.apiData;
                this.productVo.scNo = this.miniCategoryList
            }).catch(error => {
                console.log(error);
            });
        },

        // 이미지선택시 미리보기
        handleImagePreview(event) {

            // 선택한 파일
            const file = event.target.files[0];
            console.log(file);
            // FileReader 객체를 사용하여 이미지를 읽음
            const reader = new FileReader();

            // 읽기가 완료된 후 실행되는 콜백 함수
            reader.onload = (e) => {
                // 읽은 이미지 데이터를 previewImage에 할당하여 이미지 미리보기 업데이트
                this.previewImage = e.target.result;
            };

            // 파일을 읽음
            if (file) {
                reader.readAsDataURL(file);
            }

            this.file = event.target.files[0];

            this.productVo.saveName = this.previewImage;
        },


        // 등록
        uploadFile() {
            console.log("파일업로드");
            console.log(this.productVo);
            console.log(this.file);

            //서버전송용 전용 박스
            let formData = new FormData();

            formData.append("file", this.file);
            formData.append("productName", this.productVo.productName);
            formData.append("scNo", this.productVo.scNo);
            formData.append("detail", this.productVo.detail);
            formData.append("price", this.productVo.price)
            formData.append("storage", this.productVo.storage);
            formData.append("best", this.productVo.best);

            axios({
                method: 'post', // put, post, delete 
                url: `${this.$store.state.apiBaseUrl}/api/insert`,
                headers: { "Content-Type": "multipart/form-data" },
                // params: guestbookVo, //get방식 파라미터로 값이 전달
                data: formData, //put, post, delete 방식 자동으로 JSON으로 변환 전달
                responseType: 'json' //수신타입
            }).then(response => {
                console.log(response); //수신데이타
                console.log(response.data.apiData);

                this.$router.push('/manager');

            }).catch(error => {
                console.log(error);
            });

        }


    },
    created() {
        this.getBigCategory();
    },
    computed: {

    }
};
</script>

<style>
.wrap {
    height: 0px;
}
</style>