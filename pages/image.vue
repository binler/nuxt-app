<template>
  <div>
    image
  </div>
</template>

<script>
import unsplash from '~plugins/unsplash'
export default {
  created () {
    unsplash.currentUser.profile()
    .then(toJson)
    .then(json => {
      console.log(json)
    })
  }
}
</script>

<style lang="css">
</style>
