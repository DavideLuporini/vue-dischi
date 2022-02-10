<template>
<header>
<nav class="navbar navbar-light">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img class="img-fluid" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="" width="30" height="24">
    </a>
  </div>
</nav>
</header>
</template>

<script>
export default {
  name: 'Header',
  props: {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import 'bootstrap';
nav{
  background-color: #2e3a46;
  img{
    height: 35px;
      width: 95px;
  
  }
}
</style>
