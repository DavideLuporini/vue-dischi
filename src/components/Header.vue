<template>
<header>
<nav class="navbar navbar-light">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img class="img-fluid" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="" width="30" height="24">
    </a>
  <div id="filters">
         <select name="genre" id="genre" v-model="genreValue" @input="$emit('genre-search', $event.target.value)">
            <option value="">Seleziona genere</option>
            <option v-for="genre in generesArray" :key="genre" :value="genre">{{ genre }}</option>
         </select>
         <select name="author" id="author" v-model="authorValue" @input="$emit('author-search', $event.target.value)">
            <option value="">Seleziona per autore</option>
            <option v-for="author in authorsArray" :key="author" :value="author">{{ author }}</option>
         </select>
      </div>
  </div>
</nav>
</header>
</template>

<script>
export default {
  name: 'Header',
  props: ["generesArray", "authorsArray"],

  data() {
        return {
          genreValue: "",
          authorValue: "",
        };
    },
    mounted() {},
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import 'bootstrap';
header{
  height: 70px;
}
nav{
  background-color: #2e3a46;
  height: 70px;
  img{
    height: 35px;
      width: 95px;
  
  }
  select{
    display: inline-flex;
    background-color: #1e2d3b;
    color: white;
    padding: 10px;
    margin-left: 10px;
    border: transparent;
      &:focus-visible{
      outline-color: rgb(61, 189, 243);
      }
      &:hover{
      border: rgb(61, 189, 243) solid 1px;
      }
  }
  #filters{
    display: inline-flex;
  }
}
</style>
