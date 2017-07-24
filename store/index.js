//
// import Service from '~plugins/axios'
// export const state = () => ({
//   list: {
//     data: {
//       data: []
//     }
//   },
//   detail: {
//     fetching: false,
//     data: {}
//   }
// })
//
// // global actions
// export const actions = {
//   // 全局服务初始化
//   nuxtServerInit (store, { params, route, isServer, req }) {
//     const initAppData = [
//       store.dispatch('loadArticles')
//     ]
//     return Promise.all(initAppData)
//   },
// // 获取文章列表
//   loadArticles ({ commit }, params = { page: 1 }) {
//     return Service.get('/wp-json/wp/v2/posts', { params })
//     .then(response => {
//       let data = response.data
//       commit('GET_LIST_SUCCESS', data)
//     })
//     .catch(err => {
//       commit('GET_LIST_SUCCESS', err)
//     })
//   },
//   loadArticleDetail ({ commit }, params = {}) {
//     return Service.get(`/wp-json/wp/v2/posts/${params.id}`)
//     .then(response => {
//       console.log(response)
//       commit('GET_DETAIL_SUCCESS', response.data)
//       return Promise.resolve(response.data)
//     }, err => {
//       commit('GET_DETAIL_FAILURE', err)
//       return Promise.reject(err)
//     })
//   }
// }
//
// export const mutations = {
//   GET_LIST_SUCCESS (state, action) {
//     state.list.data = action
//   },
//   GET_DETAIL_SUCCESS (state, action) {
//     state.detail.data = action
//   },
//   GET_DETAIL_FAILURE (state) {
//     state.detail.data = {}
//   }
// }
