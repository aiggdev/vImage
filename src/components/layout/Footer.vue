<template>

  <div id="footer">
    This work is licensed under a <a rel="license" href="https://creativecommons.org/publicdomain/zero/1.0/">Creative Commons License</a>. 
    <br>v. 0.01 - 
    <a href="https://github.com/aiggdev/vImage">Wanna help make this better?</a>
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

  #footer{
    width:96%;
    grid-template-rows: 1fr;
    display: block;
    background-color:rgb(13, 13, 13, .066);

    padding:.96rem;
    font-weight:700;
    margin: 0 0 1rem 1rem;
    font-size: .66rem;
    border-radius:  3px 3px 6px 9px;
  }

  #footer a:hover{color:#A6341B;}
  #footer a{color: #F24822;}

</style>