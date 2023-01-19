<script xmlns="http://www.w3.org/1999/html">
import PostList from "./components/PostList.vue";
import PostForm from "./components/PostForm.vue";

export default {
  components: {PostForm, PostList},
  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'JavaScript',
          body: 'JavaScript универсальный язык програмирования'
        },
        {
          id: 2,
          title: 'JavaScript 2',
          body: 'JavaScript универсальный язык програмирования'
        },
        {id: 3, title: 'Java', body: 'Its cool!!'}
      ],
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
    },
  }
}
</script>

<template>
  <div class="app">
    <PostForm @create="createPost"/>
    <PostList :posts="posts"/>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}
</style>
