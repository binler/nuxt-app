import Vue from 'vue'
import Unsplash, {toJson} from 'unsplash-js'

const unsplash = new Unsplash({
  applicationId: '292d30455c7a215186a9d53be1ae9d4eb59e5aff0ba123fc5fbbbf72b3bee12d',
  secret: '202802b46d0c0629b5ea8f4e6476c18a59d99a9682ee189622edfc736c4b7a5d',
  callbackUrl: 'http://localhost:3333/nuxt-app/image'
})
const authenticationUrl = unsplash.auth.getAuthenticationUrl([
  'public',
  'read_user',
  'write_user',
  'read_photos',
  'write_photos'
])

location.assign(authenticationUrl)

unsplash.auth.userAuthentication(code)
  .then(toJson)
  .then(json => {
    unsplash.auth.setBearerToken(json.access_token)
  })

export default ({ app, store }) => {
  Vue.prototype.$unsplash = unsplash
}
