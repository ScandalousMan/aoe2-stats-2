<template>
  <div>
    <h1>Hello there</h1>
    <router-link v-bind:to="{ name: 'Posts' }">Go to posts</router-link> 
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
<style type="text/css">

</style>