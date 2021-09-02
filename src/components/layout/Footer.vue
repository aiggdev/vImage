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
    width:90%;
    grid-template-rows: 1fr;
    display: block;
    background: linear-gradient(90deg, rgba(231,231,231,1) 0%, rgba(242,242,242,0.819765406162465) 49%, rgba(255,255,255,1) 90%);
    padding:.96rem;
    font-weight:700;
    margin: 0 0 1rem 1rem;
    font-size: .66rem;
    border-radius:  3px 3px 6px 9px;
  }

  #footer a:hover{color:#A6341B;}
  #footer a{color: #F24822;}

</style>