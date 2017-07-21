<template>
  <div>
    <Navi></Navi>
    <nuxt/>
  </div>
</template>
<script>
import Navi from '~components/Navi'
export default {
  components: {
    Navi
  }
}
</script>
<style>
html
{
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: #24292e;
  margin: 0;
}
</style>
