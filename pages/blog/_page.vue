<template>
  <section class="container">
    <div>
      	这个是blog页面
      	<article-list :article="article"></article-list>
        <h2 class="info">
          <!-- {{ user.name }} -->
        </h2>
    </div>
  </section>
</template>

<script>
// import Logo from '~components/Logo.vue'
import ArticleList from '~components/article/list'
// import Service from '~plugins/axios'
import axios from '~plugins/axios'

export default {
  name: 'blog-page',
  components: {
    ArticleList
  },
  data(){
    return {
      article:[],
      pages:''
    }
  },
  asyncData ({ params, error }) {
    console.log(params.page);
    if (params.page == undefined) {
      var params = {page: 1}
    }
    return axios.get('/wp-json/wp/v2/posts',{ params })
    .then((res) => {
      // console.log(res.data);
      return {article:res.data}
    })
    .catch((e) => {
      error({ statusCode: 404, message: 'User not found' })
    })
  }
}
</script>
