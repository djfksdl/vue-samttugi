<template>
  <router-view  v-bind:key="$route.fullPath"/>
</template>
<script>
import "@/assets/css/index.css"

export default {
  name:"App"//이것도 빼도 괜춘함.
};
</script>

<style>

</style>
