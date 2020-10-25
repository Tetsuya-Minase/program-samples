<template>
  <!-- 縦並び & 中央揃え -->
  <div class="flex flex-col items-center">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Todo />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Todo from "./components/todo/Todo.vue";

export default defineComponent({
  name: "App",
  components: {
    Todo
  },
});
</script>
<style src="./assets/styles/main.css">
</style>