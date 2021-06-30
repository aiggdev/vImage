<template>
  <div id="header">
    <a href="/"><img src="@/assets/logo.png" id="vImage" width="66" height="66" alt="vImage"></a>     
  </div>
</template>

<script>
export default {
  
  name: 'Header',

  data(){
      return {
        user: null,
      }
    },

}
</script>

<style>
  #header{
    display: block;
    width:99%;
    grid-template-rows: 1fr;
    margin:1rem 0 0 1rem;
  }
  #vImage{
    opacity: 0.9;
  }
   #vImage:hover{
    opacity: 1;
  }
</style>