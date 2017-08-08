<template>
  <div>
    image
  </div>
</template>

<script>
import { toJson } from 'unsplash-js'
export default {
  mounted () {
    return this.$unsplash.currentUser.profile()
    .then(toJson)
    .then(json => {
      console.log(json)
    })
  }
}
</script>

<style lang="css">
</style>
