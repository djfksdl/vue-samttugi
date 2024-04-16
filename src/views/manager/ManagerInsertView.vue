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
                                    <select name="bigCategory" id="bigCategory">
                                        <option disabled value="" selected>대분류선택</option>
                                        <option>라면/컵누들/곤누들</option>
                                        <option>카레/짜장/간편렌지</option>
                                        <option>소스/드레싱/양념/식초</option>
                                        <option>캔/통조림/오일</option>
                                        <option>떡볶이/핫도그/간식</option>
                                    </select>
                                </div>

                                <p>></p>

                                <div class="miniCategory"><label for="miniCategory">소분류</label><br>
                                    <select name="ramen" id="miniCategory">
                                        <option disabled value="" selected>소분류선택</option>
                                        <option>봉지라면</option>
                                        <option>컵라면</option>
                                        <option>잡채</option>
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
export default {
    name: "ManagerInsertView",
    components: {
        AppManagerHeader
    },
    data() {
        return {};
    },
    methods: {},
};
</script>

<style>
.wrap {
    height: 0px;
}
</style>