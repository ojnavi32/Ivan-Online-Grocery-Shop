export default ({ $axios, store }) => {
  $axios.onRequest(config => {
    const token = store.getters['auth/access_token']

    if (token) {
      config.headers.common['Authorization'] = `Bearer ${token}`
      config.headers.post['Content-Type'] = 'application/json'
    }
  })
}