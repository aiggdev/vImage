<template>
  <div class="lightbox" @click.self="closeLightbox">
   
    <img :src="photoUrl(photo.filename)">
   
    <div class="lightbox-info">
      <div class="lightbox-info-inner">
        
        <div class="photo-title" v-if="photo.title">
          <span class="close-x" @click.self="closeLightbox">&#10006;</span>
           {{ photo.title }}
        </div>

        <p v-if="photo.location" class="location"><small>{{ photo.location }}</small></p>
  
        <p v-if="photo.source" class="photo-source">
          <small>via <a rel="nofollow" :href="photo.source.url">{{ photo.source.name }}</a></small>
        </p>

      </div>
    </div>

  </div>
</template>

<script>
import photos from '@/photos.json';

export default {
  name: 'Photo',
  data() {
    return {
      photos,
    };
  },

  computed: {
    photo() {
      return this.photos.find((photo) => {
        return photo.id === Number(this.$route.params.id);
      });
    },
  },

  methods: {
    photoUrl(filename) {
      return require(`../assets/images/${filename}`);
    },

    closeLightbox() {
      this.$router.push('/');
    },
    
  },
}
</script>

<style>
  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    display: grid;
    grid-gap: 1rem;
  }

  .lightbox img {
    margin: 1rem 0 0 -9px;
    height: 99%;
    grid-template-rows: 1fr;
    border-radius: 0 0.66rem 0 0;
    position: inherit;
    z-index: 98;
    border:9px solid rgb(242, 242, 242, .1);
    box-shadow: 10px 10px 19px 0px rgba(0,0,0,0.21);
    -webkit-box-shadow: 10px 10px 19px 0px rgba(0,0,0,0.21);
    -moz-box-shadow: 10px 10px 19px 0px rgba(0,0,0,0.21);
  }

  .lightbox-info {
    margin: -10px;
    position: inherit;
    z-index: 99;
  }

  .lightbox-info-inner {
    background-color: rgb(242, 242, 242, .66);
    display: inline-block;
    margin:1.5rem 0 0 .33rem;
    padding: .66rem;
    border-radius: 0 0 0.66rem 0;
    border:3px solid rgb(242, 242, 242, .33);
    box-shadow: 10px 10px 19px 0px rgba(0,0,0,0.21);
    -webkit-box-shadow: 10px 10px 19px 0px rgba(0,0,0,0.21);
    -moz-box-shadow: 10px 10px 19px 0px rgba(0,0,0,0.21);
  }

  .close-x{
    margin:-.33rem .33rem 0 .1rem;
    font-size: .75rem;
    border: 1px solid rgba(216, 182, 182, 0.1);
    background-color: rgb(255, 255, 255, .33);
    padding:3px;
    border-radius:  5px 10px 15px 20px;;
    box-shadow: 10px 10px 19px 0px rgba(0,0,0,0.15);
    -webkit-box-shadow: 10px 10px 19px 0px rgba(0,0,0,0.15);
    -moz-box-shadow: 10px 10px 19px 0px rgba(0,0,0,0.15);
    cursor: pointer;
  }

  .close-x:hover{
    border: 1px solid rgb(#ffffff);
    background-color: rgb(255, 255, 255, .2);
    color:#F24822;
  }

  .photo-title{
    display: block;
    background-color:#0D0D0D;
    color: #F2F2F2;
    padding:.66rem .66rem .66rem .5rem;
    font-weight:700;
    border-radius: 0 0.33rem 0.33rem 0;
    margin:0;
  }
  
  p.photo-source{
    margin:0;
    padding:0;
  }

  p.location{
    padding-bottom:0;
    margin: .33rem 0 0 0;
  }

</style>
