<template>
    <div class="container">
      <div class="row g-3">
         <div v-for="artist in artists" :key="artist.author" class="card text-center">
            <div class="card-cont">
               <img class="img-fluid" :src="artist.poster" :alt="artist.author" />
            </div>
            <div class="card-text d-flex flex-column justify-content-end flex-grow-1">
               <p class="song-name text-white text-uppercase">{{ artist.title }}</p>
                  <p class="author">{{ artist.author }}</p>
                  <p class="year">{{ artist.year }}</p>
            </div>
         </div>
      </div>
   </div>
</template>

<script>    
export default {
 name : 'MusicCard',
 props: ["artists", "selectedAuthor", "selectedGenre"],
}
</script>

<style lang="scss" scoped>
.card {
   max-width: calc(100% / 5 - 30px);
   max-height: 380px;
   padding: 10px;
   background-color: #2e3a46;
   border: none;
   margin: 15px 15px;
   transition: transform 0.5s;
   cursor: pointer;
   &:hover img{
      filter: contrast(1.2);
   }
   &:hover{
      border: 1px solid #245770;
      transform: scale(1.1);
      transition-delay: 0.5s;
   }

   .card-text{

       p {
          margin-bottom: 0;
       }
       .song-name {
          font-size: 20px;
          font-weight: bold;
          margin-top: 15px;
          margin-bottom: 20px;
       }
        .author{
            font-size: 20px;
            color: #687074;
        }
       .year {
          font-size: 12px;
          color: #687074;
       }
   }
}

</style>