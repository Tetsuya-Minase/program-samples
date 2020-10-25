<template>
  <div>
    <h1 class="font-bold text-5xl">TodoList</h1>
    <TodoList />
    <TodoForm />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import TodoList from "./todo/TodoList.vue";
import TodoForm from "./todo/TodoForm.vue";

export default defineComponent({
  components: {
    TodoList,
    TodoForm,
  }
});
</script>