<template>
    <div class="wrap">
        <!-- 헤더 -->
        <AppHeader />

        <!-- 푸터 -->
        <AppFooter />
    </div>
</template>
<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
    name: "OrderSuccessView",
    components: {
        AppHeader,
        AppFooter
    },
    data() {
        return {};
    },
    methods: {},
    created() { }
};
</script>