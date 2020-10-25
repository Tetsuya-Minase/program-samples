<template>
  <div>
    <!-- font bold & font size 3rem -->
    <h1 class="font-bold text-5xl">TodoList</h1>
    <TodoList />
    <TodoForm />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import TodoList from "./TodoList.vue";
import TodoForm from "./TodoForm.vue";

export default defineComponent({
  components: {
    TodoList,
    TodoForm,
  }
});
</script>