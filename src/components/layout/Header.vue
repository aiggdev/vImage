<template>
  <div id="header">
    <a href="/"><img src="@/assets/logo.png" id="vImage" width="66" height="66" alt="vImage"></a> 

    <div class="dropdown">
     <nav role="navigation">
        <ul>
          <li>
            <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle">
                <img src="https://avatars.githubusercontent.com/u/69393462?v=4" alt="mdo" width="32" height="32" class="rounded-circle">
            </a>
            <ul class="dropdown-menu">
              <li><a href="#">User Profile</a></li>
              <li><a href="#">Edit Profile</a></li>
              <li><a href="#">Upload Photos</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
        
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

  .dropdown{
    display: block;
    float:right;
    margin: -1rem 3rem 0 0;
  }

  .dropdown-menu{
    background-color: #fff;
    display: block;
    float:right;
    margin: 0 3rem 0 0;
    text-align: left!important;
    padding: 0;
  }

  .dropdown-menu li{
    font-size:.66rem;
    padding-left:5px;
  }

  li {
    display: block;
    transition-duration: 0.5s;
  }

  li:hover {
    cursor: pointer;
  }

  ul li ul {
    visibility: hidden;
    opacity: 0;
    position: sticky;
    transition: all 0.5s ease;
    margin-top: 1rem;
    display: none;
  }

  ul li:hover > ul, ul li ul:hover {
    visibility: visible;
    opacity: 1;
    display: block;
  }

  ul li ul li {
    clear: both;
    width: 100%;
  }

  .rounded-circle {
    border-radius: 50%!important;
    margin:0 0 0 .33rem;
  }

  .dropdown-toggle::before {
    display: inline-block;
    margin-left: .255em;
    vertical-align: .255em;
    content: "";
    border-top: .3em solid;
    border-right: .3em solid transparent;
    border-bottom: 0;
    border-left: .3em solid transparent;
  }

  .dropdown-toggle {
    outline: 0;
    white-space: nowrap;
  }

  .text-decoration-none {
    text-decoration: none!important;
  }

  .d-block {
    display: block!important;
  }

  .link-dark {
    color: #212529;
  }

</style>