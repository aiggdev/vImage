<template>
  <div id="footer">
    Help
    <a rel="license" href="https://buymeacoffee.com/aigg">Support this Project!</a>
    <br />v. 0.02 -
    <a href="https://github.com/aiggdev/vImage">Wanna help make this better?</a>
  </div>
</template>

<script>
export default {
  name: 'Footer',

  data() {
    return {
      user: null,
    };
  },
};
</script>

<style>
#footer {
  width: 90%;
  grid-template-rows: 1fr;
  display: block;
  background: linear-gradient(
    90deg,
    rgba(231, 231, 231, 1) 0%,
    rgba(242, 242, 242, 0.819765406162465) 49%,
    rgba(255, 255, 255, 1) 90%
  );
  padding: 0.96rem;
  font-weight: 700;
  margin: 0 0 1rem 1rem;
  font-size: 0.66rem;
  border-radius: 3px 3px 6px 9px;
}

#footer a:hover {
  color: #a6341b;
}
#footer a {
  color: #f24822;
}
</style>
