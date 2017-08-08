import Unsplash from 'unsplash-js'

const unsplash = new Unsplash({
  applicationId: '292d30455c7a215186a9d53be1ae9d4eb59e5aff0ba123fc5fbbbf72b3bee12d',
  secret: '202802b46d0c0629b5ea8f4e6476c18a59d99a9682ee189622edfc736c4b7a5d',
  callbackUrl: 'http://localhost:3333/nuxt-app/image'
})

export default unsplash
