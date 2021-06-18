import Api from '@/services/Api'

export default {
  fetchPosts () {
    console.log('getting posts from the API')
    return Api().get('posts')
  },

  addPost (params) {
    console.log('calling addPost', params)
    return Api().post('posts', params)
  },

  updatePost (params) {
    return Api().put('posts/' + params.id, params)
  },

  getPost (params) {
    return Api().get('post/' + params.id)
  },

  deletePost (id) {
    return Api().delete('posts/' + id)
  }
}
