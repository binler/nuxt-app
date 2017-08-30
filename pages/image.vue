<template>
<b-container>
  <div class="bi-content">
    <b-card-group columns>
      <b-card v-for="item in images" :key="item.id" :img-src="item.urls.small" img-fluid img-alt="image" overlay></b-card>
    </b-card-group columns>
  </div>
</b-container>
</template>

<script>

import axios from 'axios'
export default {
  asyncData ({ req, params }) {
    // We can return a Promise instead of calling the callback
    return axios.get('https://api.unsplash.com/photos/?page=1&per_page=100&client_id=292d30455c7a215186a9d53be1ae9d4eb59e5aff0ba123fc5fbbbf72b3bee12d')
    .then((res) => {
      return { images: res.data }
    })
    .catch(err => {
      console.log('Error happened during fetching!', err)
    })
  }
}
</script>

<style>
.bi-content {
  margin-top: 70px;
}
</style>
