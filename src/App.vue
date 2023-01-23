<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <my-button
        @click="showDialog"
        style="margin: 15px 0">
      Создать пост
    </my-button>
    <my-dialog v-model:show="dialogVisible">
      <PostForm @create="createPost"/>
    </my-dialog>
    <PostList :posts="posts" @remove="removePost"/>
  </div>
</template>

<script xmlns="http://www.w3.org/1999/html">
import PostList from "./components/PostList.vue";
import PostForm from "./components/PostForm.vue";
import MyDialog from "./common/UI/MyDialog.vue";
import axios from "axios";

export default {
  components: {MyDialog, PostForm, PostList},
  data() {
    return {
      posts: [],
      dialogVisible: false,
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true;
    },
    async fetchPosts() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
        this.posts = response.data;
      } catch (e) {
        console.warn(e);
      }
    }
  },
  mounted() {
    this.fetchPosts();
  }
}
</script>

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
