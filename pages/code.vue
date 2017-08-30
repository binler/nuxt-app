<template>
  <b-container>
    <div class="bi-content">
      <b-card-group columns>
        <b-card v-for="item in repos" :title="item.name" :key="item.id">
          <p class="card-text">{{ (item.description == null) ? 'No description' : item.description }}</p>
          <p class="card-text"><small class="text-muted"><timeago :since="item.updated_at"></timeago></small></p>
        </b-card>
      </b-card-group>
    </div>
  </b-container>
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
