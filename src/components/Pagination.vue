<template>
  <div class="page__wrapper">
    <div v-for="page in totalPages"
         :key="page"
         class="page"
         :class="{'current__page' : currentPage === page}"
         @click="$emit('changePage', page)">
      {{ page }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    totalPages: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style scoped>
.page__wrapper {
  display: flex;
  margin-top: 15px;
}

.page {
  border: 1px solid black;
  padding: 10px;
  cursor: pointer;
}

.current__page {
  border: 2px solid teal;
}
</style>