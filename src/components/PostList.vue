<template>
  <div v-if="posts.length > 0">
    <h4>Список постов:</h4>
    <PostItem :post="post"
              :key="post.id"
              v-for="post in posts"
              @remove="$emit('remove', post)"
    />
  </div>
  <h3 v-else style="color: red">
    Список постов пуст
  </h3>

</template>

<script>
import PostItem from "./PostItem.vue";

export default {
  name: "PostList",
  components: {PostItem},
  props: {
    posts: Array,
    required: true,
  }
}
</script>

<style scoped>

</style>