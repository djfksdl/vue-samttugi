<template>
    <div>
        <div class="wrap">
            <!-- 헤더 -->
            <AppHeader/>
            <!-- 내용 -->
            <div class="ItemListContainer">
                <div class="ItemListInner"></div>
            </div>
            <!-- 푸터 -->
            <AppFooter/>
            
        </div>
    </div>
</template>
<script>
import '@/assets/css/item/item.css'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
export default {
    name: "ItemList",
    components: {
        AppHeader,
        AppFooter
    },
    data() {
        return {};
    },
    methods: {},
    created(){}
};
</script>
<style></style>