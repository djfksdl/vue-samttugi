<template>
  <router-view  v-bind:key="$route.fullPath"/> 
  <!-- 주소바뀔때마다 계속 인식할 수 있게 하는것 -->
</template>
<script>
import "@/assets/css/index.css"

export default {
  name:"App"//이것도 빼도 괜춘함.
};
</script>

<style>

</style>
