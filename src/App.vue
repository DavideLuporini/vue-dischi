<template>
  <div id="app">
    
    <Header :generes-array="genre" :authors-array="authors" @genre-search="getGenre" @author-search="getAutor"/>
    <main class="d-flex align-items-center">
         <MusicCard :artists="getSongs" :selected-genre="searchGenre" :selected-author="searchAuthor" />
      </main>
    
  </div>
</template>

<script>
import axios from "axios";
import Header from './components/Header.vue'
import MusicCard from './components/MusicCard.vue'

export default {
   name: "App",
   components: {
      Header,
      MusicCard,
   },
   data() {
      return {
         loader: true,
         artists: [],
         genre: [],
         authors: [],
         searchGenre: "",
         searchAuthor: "",
      };
   },
   computed: {
      genreArray() {
         return this.genre;
      },
      getSongs() {
         return this.artists.filter((song) => {
            if (!this.searchGenre && !this.searchAuthor) {
               return true;
            } else if (!this.searchGenre && this.searchAuthor) {
               if (song.author === this.searchAuthor) {
                  return true;
               }
            } else if (this.searchGenre && !this.searchAuthor) {
               if (song.genre === this.searchGenre) {
                  return true;
               }
            } else {
               if (song.genre === this.searchGenre && song.author === this.searchAuthor) {
                  return true;
               }
            }
         });
      },
   },
   methods: {
      getArtists() {
         this.loader = true;
         axios.get("https://flynn.boolean.careers/exercises/api/array/music").then((res) => {
            this.artists = res.data.response;
            this.loader = false;
         });
      },
      getArrayFromApi(arrayName, key) {
         axios.get("https://flynn.boolean.careers/exercises/api/array/music").then((res) => {
            res.data.response.forEach((item) => {
               if (!arrayName.includes(item[key])) {
                  arrayName.push(item[key]);
               }
            });
         });
      },
      getGenre(term) {
         this.searchGenre = term;
      },
      getAutor(term) {
         this.searchAuthor = term;
      },
   },
   mounted() {
      this.getArtists();
      this.getArrayFromApi(this.genre, "genre");
      this.getArrayFromApi(this.authors, "author");
   },
};
</script>

<style lang="scss">
@import 'bootstrap';
*{
box-sizing: border-box;
margin: 0;
padding: 0;
}

body{
  background-color: #1e2d3b;
}
main{
  padding-top: 30px;
}


</style>
