<template>
  <div class="container">
    <div class="bi-content">
      <b-card-group columns>
        <b-card v-for="item in repos" :header="item.name" :key="item.id">
          <blockquote class="blockquote mb-0">
            <p>{{ (item.description = null) ? 'No des' : item.description }}</p>
            <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
          </blockquote>
        </b-card>
      </b-card-group columns>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  asyncData ({ req, params }) {
    return axios.get('https://api.github.com/users/binler/repos')
    .then((res) => {
      return { repos: res.data }
    })
    .catch(err => {
      console.log('Error happened during fetching!', err)
    })
  }
}
</script>

<style lang="css">
.bi-content {
  margin-top: 70px;
}
</style>
