<template>
  <AppHeader />
  <!-- //header -->
  <div class="success-container">

    <span id="name">{{ $route.query.name }}님,</span>
    <span id="welcome"> 환영합니다!</span>
    <p id="now">삼뚜기의 모든 것을 지금부터 만나보세요</p>
    <img class="new" src="@/assets/images/new-product.png" alt="신상">

    <router-link to="/login" id="startBtn">삼뚜기몰 시작하기</router-link>
  </div>
  <AppFooter />
  <!--//footer-->
</template>

<script>
//import axios from 'axios';
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
    /* return {
      usersVo: {
        userName: ""
      } */

    }
  
  /* methods: {
    getName() {
      console.log("연결확인");
      console.log(this.usersVo);
      axios({
        method: "get",
        url: "http://localhost:9009/api/user/loginsuccess",
       
        responseType: "json"
      }).then(response => {
        console.log(response.data);

        this.usersVo = response.data;
      }).catch(error => {
        console.log(error);
      });
    }

  }, */


/* created() {
  //this.getName()

}; */
}
</script>