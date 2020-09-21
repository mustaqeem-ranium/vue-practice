<template>
  <div class="home">
    <PostList v-bind:posts="posts" />
  </div>
</template>

<script>
// @ is an alias to /src
// import '../assets/css/tailwind.css'

import axios from 'axios';

import PostList from '@/views/PostList.vue';

export default {
  name: 'Home',
  components: {
    PostList
  },
  data() {
    return {
      posts: [],
      errors: []
    }
  },
  created() {
    axios
    .get(`http://jsonplaceholder.typicode.com/posts`)
    .then(res => {
      this.posts = res.data
    })
    .catch(err => {
      this.errors.push(err);
    })
  },
}
</script>
