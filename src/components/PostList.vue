<template>
  <div>
    <h4>Список постов:</h4>
    <PostItem :post="post" v-for="post in posts"/>
  </div>


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