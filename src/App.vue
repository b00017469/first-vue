<template>
  <div class="app">
    <h1>Страница с постами</h1>

    <my-input
        v-model="searchQuery"
        placeholder="Поиск..."
    />

    <div class="app__btns">
      <my-button
          @click="showDialog">
        Создать пост
      </my-button>
      <my-select
          v-model="selectedSort"
          :options="sortOptions"
      />
    </div>

    <my-dialog v-model:show="dialogVisible">
      <PostForm @create="createPost"/>
    </my-dialog>
    <PostList
        :posts="sortedAndSearchPosts"
        @remove="removePost"
        v-if="!isPostsLoading"/>
    <div v-else>Loading...</div>
    <Pagination :total-pages="totalPages"
                :current-page="page"
                @changePage="changePageNumber"/>
  </div>
</template>

<script>
import PostList from "./components/PostList.vue";
import PostForm from "./components/PostForm.vue";
import MyDialog from "./common/UI/MyDialog.vue";
import axios from "axios";
import MySelect from "./common/UI/MySelect.vue";
import MyInput from "./common/UI/MyInput.vue";
import Pagination from "./components/Pagination.vue";

export default {
  components: {Pagination, MyInput, MySelect, MyDialog, PostForm, PostList},
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: '',
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0,
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По содержимому'}
      ]
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    changePageNumber(pageNumber) {
      this.page = pageNumber;
    },
    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit,
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
        this.posts = response.data;
      } catch (e) {
        console.warn(e);
      } finally {
        this.isPostsLoading = false;
      }
    }
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    sortedPosts() {
      return [...this.posts]
          .sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    },
    sortedAndSearchPosts() {
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },
  watch: {
    page(){
      this.fetchPosts();
    }
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

.app__btns {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}
</style>
