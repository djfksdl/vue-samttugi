<template>
    <AppHeader />
    <!-- //header -->
    <div class="success-container">
      <span id="name">이연수님,</span> 
      <span id="welcome"> 환영합니다!</span>
        <p id="now">삼뚜기의 모든 것을 지금부터 만나보세요</p>
        <img class="new" src="@/assets/images/new-product.png" alt="신상">
    
      <router-link to="/" id="startBtn">삼뚜기몰 시작하기</router-link>
    </div>
    <AppFooter />
    <!--//footer-->
  </template>
  
  <script>
  import "@/assets/css/user/loginScs.css"
  import AppFooter from '@/components/AppFooter.vue';
  import AppHeader from '@/components/AppHeader.vue';
  export default {
      name: "LoginScsView",
      components: {
          AppFooter,
          AppHeader
      },
      data() {
          return {};
      },
      methods: {},
      created() { }
  };
  </script>
  