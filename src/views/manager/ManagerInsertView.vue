<template>
    <div>
        <div class="wrap">
            <AppManagerHeader />
            <div class="managerInsert">
                <div class="pManager">
                    <p>관리자 > 상품추가</p>
                </div>
                <div class="insertGroup">
                    <div class="fileGroup">
                        <div class="foodPhotoFile">
                        </div>
                        <input type="file">
                    </div>
                    <form action="">
                        <div class="foodExplanInsert">
                            <div class="categoryBox"><label for="category">카테고리</label><select name="cate"
                                    id="category">
                                    <option disabled value="" selected>카테고리선택</option>
                                    <option>라면/컵누들/곤누들</option>
                                    <option>카레/짜장/간편렌지</option>
                                    <option>소스/드레싱/양념/식초</option>
                                    <option>캔/통조림/오일</option>
                                    <option>떡볶이/핫도그/간식</option>
                                </select>
                            </div>
                            <div class="nameBox"><label for="name">제품명</label><input type="text" placeholder="제품명입력"
                                    id="name"></div>
                            <div class="explanBox"><label for="explan">상세정보</label><textarea placeholder="제품설명"
                                    id="explan"></textarea></div>
                            <div class="originBox"><label for="origin">원산지</label><input type="text"
                                    placeholder="원산지입력 " id="origin"></div>
                            <div class="priceBox"><label for="price">가격</label><input type="text" placeholder="가격입력"
                                    id="price"></div>
                            <div><label for="sale">할인율</label><input type="text" id="sale" placeholder="할인율%"></div>

                            <div class="inforBox"><label for="infor">배송정보</label><input type="text" placeholder="배송정보"
                                    id="infor"></div>
                            <div class="storeage">
                                <div>
                                    <p>보관방법</p>
                                </div>
                                <div><label for="downzero">냉장&냉동 </label><input type="radio" name="store"
                                        value="downzero" id="downzero">
                                    <label for="upzero">실온 </label><input type="radio" name="store" value="upzero"
                                        id="upzero">
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <button type="submit">추 가</button>
            </div>

        </div>
        <AppFooter />
    </div>

</template>

<script>
import '@/assets/css/manager/manager.css';
import AppManagerHeader from '@/components/AppManagerHeader.vue';
import AppFooter from '@/components/AppFooter.vue'
export default {
    name: "ManagerInsertView",
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