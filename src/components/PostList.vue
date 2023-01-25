<template>
  <div v-if="posts.length > 0">
    <h4>Список постов:</h4>
    <transition-group name="post-list">
      <PostItem :post="post"
                :key="post.id"
                v-for="post in posts"
                @remove="$emit('remove', post)"
      />
    </transition-group>
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
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.6s ease;
}
.post-list-enter-from,
.post-list-leave-to{
  opacity: 0;
  transform: translateY(30px);
}
.post-list-move {
  transition: transform 0.6s ease;
}
</style>