<template>
  <AppHeader />
  <!-- //header -->
  <div class="success-container">
    <span id="name">{{ usersVo.userName }}님,</span>
    <span id="welcome"> 환영합니다!</span>
    <p id="now">삼뚜기의 모든 것을 지금부터 만나보세요</p>
    <img class="new" src="@/assets/images/new-product.png" alt="신상">

    <router-link to="/" id="startBtn">삼뚜기몰 시작하기</router-link>
  </div>
  <AppFooter />
  <!--//footer-->
</template>

<script>
import axios from 'axios';
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
    return {
      
    };
  },
  methods: {
    // 사용자 정보를 서버로부터 받아오는 메소드
    getUserName() {
      console.log("회원이름");
      console.log(this.userName);
      axios({
        method: 'get',
        url: 'http://localhost:9009/api/user/loginsuccess',
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Authorization: "Bearer " + this.$store.state.token
        },
        responseType: "json"
      })
        .then(response => {
          console.log(response.data);
          // 서버로부터 받아온 사용자 정보에서 이름값을 추출
          const userName = response.data.userName;
          // 추출한 이름값을 화면에 표시
          this.userName = userName;
        })
        .catch(error => {
          console.error(error);
        });
    }
  },
  created() { }
};
</script>