<script xmlns="http://www.w3.org/1999/html">
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    addCount() {
      this.count += 1;
    }
  }
}
</script>

<template>
  <div>
    Count - {{ count }}
    <button @click="addCount">Add count</button>
  </div>
</template>

<style>

</style>
