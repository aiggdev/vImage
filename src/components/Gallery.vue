<template>

  <div class="v-image-gallery">

    <Header />

    <div class="gallery">
      <div class="gallery-panel" v-for="item in pageOfItems" :key="item.id">
        <router-link :to="`/photo/${item.id}`">
          <img :src="thumbUrl(item.filename)" class="gallery-images">
        </router-link>
      </div>
    </div>

    <div class="pagination">
      <jw-pagination :items="photos" @changePage="onChangePage"></jw-pagination>
      <span style="font-size:33px;" class="to-top">
        <a @click="scrollToTop" class="scroll-to-top">&#8613;</a>
      </span>
    </div>

    <Footer />

  </div>

</template>

<script>

import photos from '@/photos.json';
import Header from '@/components/layout/Header.vue';
import Footer from '@/components/layout/Footer.vue';

export default {

  name: 'Gallery',

  props: {

    pageSize: {
      type: Number,
      default: 8
    },

  },

  data() {
    return {
      photos,
      pageOfItems: []
    }
  },

  components: {
    Header,
    Footer,
  },

  methods: {
    thumbUrl(filename) {
      return require(`../assets/images/thumbnails/${filename}`);
    },

    countPhotos(obj) {
      let count = 0;
        for(var prop in obj) {
            if(obj.hasOwnProperty(prop))
              ++count
        }
      return count;
    },

    onChangePage(pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems;
    },

    scrollToTop() {
      window.scrollTo(0, 0);
    },

  },

  mounted() {
    console.log(this.countPhotos(photos))
  }
}

</script>

<style>

  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-gap: .66rem;
    max-width: 99%;
    margin: 1rem auto;
    padding: 0;
  }

  .gallery-panel img {
    width: 99%;
    height: 33vw;
    object-fit: cover;
    border-radius: 0.66rem;
  }

  .gallery-images{
    opacity: 0.9;
    border: 9px solid #fff;
  }

  .gallery-images:hover{
    opacity: 1;
    border: 9px solid #e2e2e2;
    box-shadow: 9px 9px 16px 0px rgba(0,0,0,0.1);
    -webkit-box-shadow: 9px 9px 16px 0px rgba(0,0,0,0.1);
    -moz-box-shadow: 9px 9px 16px 0px rgba(0,0,0,0.1);
  }

  .pagination{
    grid-template-rows: 1fr;
    margin-left: 1rem;
  }

  .page-link{
    margin:-.33rem .33rem 1rem .33rem;
    font-size: .75rem;
    color: #fff;
    border: 1px solid #f2f2f2;
    background-color: #f24822;
    padding:3px;
    border-radius:  3px 3px 6px 9px;
    cursor: pointer;
  }
  .page-link:hover{
    background-color:#A6341B;
    color:#ffffff;
  }
  .to-top{
    font-weight:800;
    float:right;
    margin: 0 2rem 0 0;
  }

  a.scroll-to-top:hover{color:#A6341B;}
  a.scroll-to-top{color: #F24822; cursor: pointer;}

  li.disabled{
    display:none!important;
  }

</style>